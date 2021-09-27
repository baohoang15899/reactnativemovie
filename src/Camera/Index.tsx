import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

export const uploadImage = async(image:any) =>{
    console.log(image + "testtttt");
    if(image){
        const ref = storage().ref(`Image/${image.fileName}`)
        try {
            await ref.putFile(image.uri)
            const url = await storage().ref(`Image/${image.fileName}`).getDownloadURL();
            return url
        } catch (error) {
            console.log(error);
        }
    }
}

export const gallery = (setImage:(e:any) => void) => {
    launchImageLibrary({mediaType: 'photo'}, props => {
        console.log(props);
        if(props.assets){
            setImage(props?.assets[0])
        }else{
            console.log("Turn off camera");
        }
    });
  };

