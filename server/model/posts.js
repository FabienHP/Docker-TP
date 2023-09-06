import { Schema, model } from "mongoose";

const PostsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
      type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const PostsModel = model("Posts", PostsSchema)

export default PostsModel;
