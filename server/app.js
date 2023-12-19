import express from "express"

const app = express()
const port = 3001

app.get("/", (req, res)=>{
  res.send("hi from server")
})

app.listen(port, ()=>{
  console.log(`listening on port ${port} (http://localhost:${port})`)
})