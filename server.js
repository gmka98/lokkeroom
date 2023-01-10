const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOptions = {
    origin: 'http:localhost: 1600'
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.get ('/', (req,res) =>{
    res.json({message: "The Repo of GMK4."})
})


const PORT = process.env.PORT || 1600
app.listen(PORT, () => 
   console.log(`Server start: ${PORT}`))
