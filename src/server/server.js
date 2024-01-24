
require('dotenv').config({path: '../.env'})
const port = 3000
const app =require('./index')
// SERVER HANDLER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})