import express, { json } from 'express'
const app = express()

app.use(json())

app.post('/api/register', (req, res) => {
     const note = req.body
     console.log(note)
     res.json(note)

        
    })


app.listen(3000, function(){
    console.log('Server work on port 3000')
})
