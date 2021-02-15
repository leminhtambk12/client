import axios from "axios";

const url = "api/posts/";

class PostService {
    //Get posts
    static async getPosts() {
            const res = await axios.get(url);
            return res.data;
        }
        //Add post
    static insertPost(text) {
            return axios.post(url, {
                text,
            });
        }
        //Delete post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;