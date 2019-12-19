import Axios from 'axios'

const url = 'http://localhost:5000/api/arama2/';


class Arama2 {
    // Get Post
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await Axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        
                    }))
                );
            }
            catch(err) {
                reject(err);
            }
        });
    }
    // Create Post
    static insertPost(id,isim,resim,fiyat,adet,tür){
        return Axios.post(url, {
            id,
            isim,
            resim,
            fiyat,
            adet,
            tür
        });
    }

    //Delete Post
    static deletePost(id) {
        return Axios.delete(url+id);
    }

}


export default Arama2;
