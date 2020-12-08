import mongoose from 'mongoose'

const connect = () => {
mongoose.connect('mongodb+srv://Raynor:database@cluster0.owly2.mongodb.net/RaynorSoleSlash?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(res => {console.log(res)}).catch(err => {console.log(err)})
}

export default connect