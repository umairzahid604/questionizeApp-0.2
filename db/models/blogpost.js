import mongoose from 'mongoose'
import connectToDatabase from "../conn";

const postSchema = new mongoose.Schema({
  author: {
    type: Object,
    required: true,
  },

  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
  imagelink: {
    type: String,
    required: true
  },
  readmins:{
    type: Number,
    required: true
  }

}, { timestamps: true })

const BlogPost = mongoose.models.blogpost || mongoose.model('blogpost', postSchema)

export default BlogPost
