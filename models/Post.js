import mongoose from "mongoose";


const Post = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        photo: true,
    },
    photo: {
        type: String,
        photo: true,
    }
})

const PostSchema = mongoose.model('Post', Post)
export default PostSchema