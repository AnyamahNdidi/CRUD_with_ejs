const express = require('express')
const app = express()
const Item = require('./models/items')
app.use(express.urlencoded({ extended: true }))
const port = 5000
const mongoose = require('mongoose')
const monngodb = 'mongodb+srv://user:GR7WMQT4u4Rh7BV9@cluster0.xg4zd.mongodb.net/testclass?retryWrites=true&w=majority'


mongoose.connect(monngodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("connection sucessful")).catch(err => console.log(err))
app.set('view engine', 'ejs')

// app.get("/create", (req, res) => {
//   const item = new Item({
//     name: "computer",
//     price: 500
//   })
//   item.save().then(result => res.send(result))
// })

// app.get("/get-item", (req, res) => {
//   Item.find().then(result => res.send(result)).catch(err => console.log(err))
// })


app.get("/", (req, res) => {
  // res.sendFile("./aviews/index.html", { root: __dirname })
  res.redirect('/get-item')
})

app.get("/get-item", (req, res) => {
  Item.find().then(result => {
    res.render('index', { items: result })
  }).catch(err => console.log(err))
})

app.post("/items", (req, res) => {
  console.log(req.body)
  const item = Item(req.body)
  item.save().then(() => {
    res.redirect('/get-item')
  }).catch(err => console.log(err))
})

app.get("/add-items", (req, res) => {
  // res.sendFile("./aviews/add-items.html", { root: __dirname })
  res.render('add-items')
})

app.get("/items/:id", (req, res) => {
  console.log(req.params)
  const id = req.params.id
  Item.findById(id).then(result => {
    res.render('item-details', { items: result })
  })
})

app.delete('/item/:id', (req, res) => {
  const id = req.params.id
  Item.findByIdAndDelete(id).then(result => {
    res.json({ redirect: "/get-item" })
  })
})

app.put('/item/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body).then(result => {
    res.json({ msg: 'Updated Successfully' })
  })
})




app.use((req, res) => {
  // res.sendFile("./aviews/error.html", { root: __dirname })
  res.render('error.ejs')
})

app.listen(port, () => {
  console.log(`this is port ${port}`)
})