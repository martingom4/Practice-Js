import mongoose from "mongoose"
import colors from 'colors'


export const conectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.blue.italic.bold(`Database conected en ${url}`))
    }catch (error) {
        console.log(colors.red.bold(error.message))
        process.exit(1)//exit the app
    }
}

