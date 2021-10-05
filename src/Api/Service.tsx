import axios from 'axios';
import {Urls} from './Url'

const client_ID = '131c3841b70be2908cf7a3fabcaa002e'


const dataProcess = async(url:any) =>{
    try {
        const data = await url
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const moviePopular = async() =>{
    const data = await axios.get(`${Urls.BASE}${Urls.MOVIE_POPULAR}api_key=${client_ID}`)
    return dataProcess(data)
}

export const tvPopular = async() =>{
    const data = await axios.get(`${Urls.BASE}${Urls.TV_POPULAR}api_key=${client_ID}`)
    return dataProcess(data)
}

export const detail = async({id,type}) =>{
    const data = await axios.get(`${Urls.BASE}/${type}/${id}?api_key=${client_ID}`)
    return dataProcess(data)
}

export const cast = async({id,type}) =>{
    const data = await axios.get(`${Urls.BASE}/${type}/${id}/credits?api_key=${client_ID}`)
    return dataProcess(data)
}

export const recommend = async({id,type}) => {
    const data = await axios.get(`${Urls.BASE}/${type}/${id}/${Urls.RECOMMENDATION}api_key=${client_ID}`)
    return dataProcess(data)
}

export const searchMutil = async({keyword}) => {
    if(keyword){
        const data = await axios.get(`${Urls.BASE}${Urls.SEARCH}api_key=${client_ID}&query=${keyword}`)
        return dataProcess(data)
    }else{
        return []
    }
}