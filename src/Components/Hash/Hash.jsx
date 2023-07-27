import md5 from "md5";
import axios from "axios";


const getCurrentTimestamp= Date.now();
const privateKey="e2b0abb61a978417651ee7321ecc7eef90adde5b";
const publicKey="c655cb30c70af2339dad08687db22892";
const hash = md5(getCurrentTimestamp+privateKey+publicKey);



const getCharacters = async()=>{
    try {
        const characters= await axios.get('http://gateway.marvel.com/v1/public/characters',{
            params: {
                ts : getCurrentTimestamp,
                apikey : publicKey,
                hash : hash 
            }
        })
    // console.log(characters.data.data.results[13].name)
    return characters.data.data.results
    }
    catch(error){
        console.log(error)
    }
}

getCharacters();


export default getCharacters;