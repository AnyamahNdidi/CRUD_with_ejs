// console.log(global)
// global.setTimeout(() => {
//   console.log("God help me")
// }, 4000)

// const { num, users } = require("./users")
// console.log(users)

const fs = require("fs")

//read a file
// fs.readFile("note.txt", (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }

// })

//write to a file
// fs.writeFile("note.txt", "i juste wanted to add this", (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("sucessful added some content")
//   }

// })
//apendfilr

// fs.appendFile("note.txt", "i juste wanted to add this \r\n", (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("sucessful added some content")
//   }

// })

//make a new foleder
// if (!fs.existsSync("Allfile")) {
//   fs.mkdir("Allfile", (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("folder created sucefully")
//     }

//   })
// } else {
//   console.log("foler alrady exsit")

// }

//delete a foleder

// if (fs.existsSync("Allfile")) {
//   fs.rmdir("Allfile", (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("folder created sucefully")
//     }

//   })
// } else {
//   console.log("folder already deleted")
// }
//deleting a file

if (fs.existsSync("note.txt")) {
  fs.unlink("note.txt", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log("folder created sucefully")
    }
  })
} else {
  console.log("folder already deleted")
}


