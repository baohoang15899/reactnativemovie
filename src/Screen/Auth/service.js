import auth, {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {uploadImage} from '../../Camera/Index'


const saveUser = async id => {
  const user = await firestore().collection('user').doc(id).get();
  const favorite = await firestore().collection('favorite').doc(id).get();
  const data = user.data();
  if (favorite.exists) {
    const listResults = favorite.data() 
    return {id,listResults,...data};
  }
  console.log(JSON.stringify(data) + ' data ');
  return {id, ...data};
};

const createFavorite = async(id) =>{
    if(id){
        const data = []
        await firestore().collection('favorite').doc(id).set({
            list:data
        });
    }
}

export const getUser = async({id}) =>{
    const user = await firestore().collection('user').doc(id).get();
    const favorite = await firestore().collection('favorite').doc(id).get();
    const data = user.data();
    if (favorite.exists) {
      const listResults = favorite.data() 
      return {id,listResults,...data};
    }
    return {id,...data};
}

const Error = error => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            Alert.alert('Error', 'That email address is already in use!');
            break;
        case 'auth/invalid-email':
            Alert.alert('Error', 'That email address is invalid!');
        case 'auth/user-not-found':
            Alert.alert('Error', 'Account dont exist')
        default:
            break;
    }
};

const save = async(id,name,email) => {
    try {
        await firestore().collection('user').doc(id).set({
            name: name,
            email: email,
          });
    } catch (error) {
        console.log(error);
    }

}

export const login = async ({email,pass}) => {
    try {
        await auth().signInWithEmailAndPassword(email,pass)
    } catch (error) {
        console.log(error);
        Error(error);
    }
}

export const register = async ({email, pass, name}) => {
  try {
    await auth().createUserWithEmailAndPassword(email, pass);
    const id =  auth().currentUser.uid;
    createFavorite(auth().currentUser.uid)
    console.log(id + " lúc tạo nick");
    save(id,name,email)
    return saveUser(id);
  } catch (error) {
    console.log(error);
    Error(error);
  }
};

export const logout = async() =>{
    try {
        await auth().signOut()
    } catch (error) {
        console.log(error);
    }
}

export const handleUpdateAvatar = async ({id,image}) =>{
    const url = await uploadImage(image)
    if (url) {
        try {
            await firestore().collection('user').doc(id).update({
                avatar:url
            })
            return saveUser(id)
        } catch (error) {
            console.log(error);
        }
    }
}

export const handleUpdateProfile = async ({id,name,age}) =>{
    try {
        await firestore().collection('user').doc(id).update({
            name:name,
            age:age
        })
        return saveUser(id)
    } catch (error) {
        console.log(error);
    }
}