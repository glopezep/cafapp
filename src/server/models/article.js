import mongoose, { Schema, model } from mongoose

let ArticleSchema = new Schema({
  id: Number,
  name: String,
  price: Number
})

export default model('Article', ArticleSchema)
