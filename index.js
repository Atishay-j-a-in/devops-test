import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!',test:"testing github webhook 2", status:"success", github:"github actions deployed", docker:"docker actions depployed 🐋" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})