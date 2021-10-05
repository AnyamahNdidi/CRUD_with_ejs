const { months } = require('moment')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemshema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }

}, { timestamps: true })

const Item = mongoose.model("Item", itemshema)
module.exports = Item

