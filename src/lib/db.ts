import mongoose, { ConnectOptions } from "mongoose"

let isConnected = false

export const connectDB = async () => {
    if (isConnected) return

    try {
        const dbUrl = process.env.MONGO_URL!
        const con = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)

        isConnected = true

        console.log(`Database connected : ${con.connection.host}`)
    } catch (error: any) {
        console.error(`Error: ${error.message}`)
    }
}
