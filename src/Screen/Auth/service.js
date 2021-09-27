import auth, {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {uploadImage} from '../../Camera/Index'


const saveUser = async id => {
  console.log(id + "cdj vậy");
  const user = await firestore().collection('user').doc(id).get();
  const data = user.data();
  console.log(data + ' data ');
  return {id, ...data};
};

export const getUser = async({id}) =>{
    const user = await firestore().collection('user').doc(id).get();
    const data = user.data();
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
    const id =  auth().currentUser.uid.toString();
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