import axios from 'axios';
import {Urls} from './Url'

const client_ID = '131c3841b70be2908cf7a3fabcaa002e'

export const moviePopular = async() =>{
    try {
        const data = await axios.get(`${Urls.BASE}${Urls.MOVIE_POPULAR}api_key=${client_ID}`)
        return data.data.results
    } catch (error) {
        console.log(error);
    } 
}

export const tvPopular = async() =>{
    try {
        const data = await axios.get(`${Urls.BASE}${Urls.TV_POPULAR}api_key=${client_ID}`)
        return data.data.results
    } catch (error) {
        console.log(error);
    } 
}

export const detail = async({id,type}) =>{
    try {
        const data = await axios.get(`${Urls.BASE}/${type}/${id}?api_key=${client_ID}`)
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const cast = async({id,type}) =>{
    try {
        const data = await axios.get(`${Urls.BASE}/${type}/${id}/credits?api_key=${client_ID}`)
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const recommend = async({id,type}) => {
    try {
        const data = await axios.get(`${Urls.BASE}/${type}/${id}/${Urls.RECOMMENDATION}api_key=${client_ID}`)
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const searchMutil = async({keyword}) => {
    if(keyword){
        try {
            const data = await axios.get(`${Urls.BASE}${Urls.SEARCH}api_key=${client_ID}&query=${keyword}`)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }else{
        return []
    }
}