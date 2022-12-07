import express from 'express'
import pkg from 'pg'

const {Client} = pkg

const server = express()

const client = new Client({
    database: 'lokkerroom_db',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'becode20092022',
})


server.get('/test_table/all',function (req, res){
    //connect to the test table and retrieve all of its contents
    client.connect((err) => {
        if (err) {
            console.error('connection error', err.stack)
        }
        else{

            //console.log('connetcted')
        }
    })
    
   
})

client.query('SELECT * FROM test', (err, res) => {
    if(err) throw err
    console.log(res)
    response.send({connection: "succesuful", connection_time: Date.now(), response: res})
    client.end()
})

server.listen(3000)
