import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.set('strictQuery',true)
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectDB