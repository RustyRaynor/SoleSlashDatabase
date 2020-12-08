import mongoose from 'mongoose'

const playerData = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },
    wins:{
        type: Number,
    }
})

export default mongoose.model('Data', playerData)