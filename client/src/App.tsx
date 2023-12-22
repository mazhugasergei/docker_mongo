import { useEffect, useState } from "react"

type Note = {
  _id: string
  body: string
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>()

  useEffect(() => {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(data => setNotes(data.notes))
  }, [])

  return (
    <>
      {notes?.map(note => <div key={note._id}>{note.body}</div>) ||
        "loading..."}
    </>
  )
}

export default App
