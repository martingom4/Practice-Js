import mongoose from "mongoose"


export const conectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(`Database conected en ${url}`)
    }catch (error) {
        console.log('Error connecting to the database')
        console.log(error)
        process.exit(1)//exit the app
    }
}

