import axios from "axios";
const posturl = "/api/post";
const userurl = "/api/user";

export default class API {
    // get all post from server
    static async getAllPost(){
        const res = await axios.get(posturl);
        return res.data;
    }
    // get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${posturl}/${id}`);
        return res.data;
    }
    // insert post into database
    static async addPost(post){
        const res = await axios.post(posturl, post);
        return res.data;
    }
    // update post
    static async getPostByID(id, post){
        const res = await axios.patch(`${posturl}/${id}`, post);
        return res.data;
    }
    // delete post
    static async deletePost(id){
        const res = await axios.delete(`${posturl}/${id}`);
        return res.data;
    }

    
    // get all user from server
    static async getAllUser(){
        const res = await axios.get(userurl);
        return res.data;
    }
    // get single user by id
    static async getUserByID(id){
        const res = await axios.get(`${userurl}/${id}`);
        return res.data;
    }
    // insert user into database
    static async addUser(post){
        const res = await axios.user(userurl, post);
        return res.data;
    }
    // update user
    static async getUserByID(id, post){
        const res = await axios.patch(`${userurl}/${id}`, post);
        return res.data;
    }
    // delete user
    static async deleteUser(id){
        const res = await axios.delete(`${userurl}/${id}`);
        return res.data;
    }
}