import { Console } from 'console'
import express from 'express'
import 'dotenv/config.js'
import connect from './database.js'
import data from './data.js'

const app = express()
const router = express.Router()

connect()

router.get('/', (req, res) => {
    res.send("Hello!")
})

router.get('/addnew/:username', (req, res) => {
    
    const newData = new data({username: req.params.username, wins: 0})

    newData.save().then(succ => {
        res.send("New Data")
        console.log(succ)
        console.log('Saved')
    }).catch(err => {
        res.send("Did not work")
        console.log(err)
    })
})

router.get('/getfromusername/:username', (req, res) => {

    data.findOne({username: req.params.username}).lean().then(succ =>{
        res.send(succ)
        console.log('success')
    }).catch(err => {
        console.log(err)
    })
})

router.get('/addwins/:username', (req, res) => {

    data.findOne({username: req.params.username}).lean().then(succ =>{

        data.updateOne({username: req.params.username}, {wins: succ.wins + 1}).then(succ2 => {
            console.log('Changed')
        }).catch(err2 => {
            console.log(err2)
            console.log('Did not Change')
        })
        
    }).catch(err => {
        console.log(err)
    })
})

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log("Hey");
})