import express from "express"
import cors from "cors"
import Note from "./models/Note.js"
import mongoose from "mongoose"
import "dotenv/config"

const app = express()
const port = 3001
app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }))

app.get("/", async (req, res) => {
  let notesData = await Note.find()
  // create sample notes if no notes in the db
  if (!notesData.length) {
    for (let i = 1; i <= 3; i++) {
      await Note.create({
        body: `note_${i}`
      })
    }
    notesData = await Note.find()
  }
  const notes = notesData.map(note => ({
    _id: note._id.toString(),
    body: note.body
  }))
  res.json({ notes })
})

app.listen(port, () => {
  mongoose
    .connect("mongodb://mazhugasergei:12312131231213@mongo:27017")
    .then(() => console.log("connected to db"))
})
