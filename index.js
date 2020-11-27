const express = require('express')

//App setup
const app = express()
const server = app.listen(4000, ()=>{
    console.log('Listen to request on port 4000')
})

app.use(express.static('public'))