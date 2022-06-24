const Post = require('../models/posts');
const User = require('../models/users');
const fs = require('fs');

module.exports = class API {
    /** POST SESSION */
    // fetch all posts
    static async fetchAllPosts(req, res) {
        try {
            const posts = await Post.find();
            if(posts > 0) {
                res.status(200).json({
                    message: 'empty'
                });
            } else {
                res.status(200).json(posts);
            }
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    };

    // fetch post by ID
    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const posts = await Post.findById(id);
            if(!posts) {
                res.status(404).json({
                    message: 'id not found'
                });
            } else {
                res.status(200).json(posts);
            }
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    };

    // create post
    static async createPost(req, res) {
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({
                message: 'Post created successfully!'
            });
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    };

    // update post
    static async updatePost(req, res) {
        const id = req.params.id;
        let new_image = '';
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/'+req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;

        try {
            const update = await Post.findByIdAndUpdate(id, newPost);
            if(!update) {
                res.status(404).json({
                    message: 'id not found'
                });
            } else {
                res.status(200).json({
                    message: 'Post updated successfully'
                });
            }
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    };
    
    // delete post
    static async deletePost(req, res) {
        const id = req.params.id;
        try {
            const result = await Post.findByIdAndDelete(id);
            if(!result) {
                res.status(404).json({
                    message: 'id not found'
                });
            } else {
                if(result.image != ''){
                    try {
                        fs.unlinkSync('./uploads/'+result.image);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            res.status(200).json({
                message: 'Post deleted successfully'
            });
        } catch (err) {
            res.status(200).json({
                message: err.message
            });
        }
    };








    
    /** USERS SESSION */
    // fetch users
    static async fetchAllUsers(req, res) {
        try {
            const users = await User.find();
            if(users > 0) {
                res.status(400),json({
                    message: 'empty'
                });
            } else {
                res.status(200).json(users);
            }
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    };
    // fetch user by ID
    static async fetchUserByID(req, res) {
        const id = req.params.id;
        try {
            const users = await User.findById(id);
            if(!users) {
                res.status(404).json({
                    message: 'id not found'
                });
            } else {
                res.status(200).json(users);
            }
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    };

    // create user
    static async createUser(req, res) {
        const user = req.body;
        const imagename = req.file.filename;
        user.image = imagename;
        try {
            await User.create(user);
            res.status(201).json({
                message: 'User created successfully!'
            });
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    };

    // update user
    static async updateUser(req, res) {
        const id = req.params.id;
        let new_image = '';
        if (req.file) {
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/'+req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const newUser = req.body;
        newUser.image = new_image;

        try {
            const update = await User.findByIdAndUpdate(id, newUser);
            if(!update) {
                res.status(404).json({
                    message: 'id not found'
                });
            } else {
                res.status(200).json({
                    message: 'User updated successfully'
                });
            }
        } catch (err) {
            res.status(404).json({ message: err.message});
        }
    };
    
    // delete user
    static async deleteUser(req, res) {
        const id = req.params.id;
        try {
            const result = await User.findByIdAndDelete(id);
            if(!result) {
                res.status(404).json({
                    message: "id not found"
                });
            } else {
                if(result.image != ''){
                    try {
                        fs.unlinkSync('./uploads/'+result.image);
                    } catch (err) {
                        console.log(err);
                    }
                }
                res.status(200).json({
                    message: 'User deleted successfully'
                });
            }
        } catch (err) {
            res.status(200).json({
                message: err.message
            });
        }
    };
}