import axios from "axios";

export const load = async () => {
 const respuesta = await axios.get('https://leonardoapi.vercel.app/api/tracks')

 return {
    tracks: respuesta.data.tracks
 }
 
}