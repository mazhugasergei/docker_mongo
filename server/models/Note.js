import { Schema, model } from "mongoose"

const NoteSchema = new Schema({
  body: {
    type: String,
    required: true
  }
})

export default model("note", NoteSchema)
