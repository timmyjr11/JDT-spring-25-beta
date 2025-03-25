import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import {GoogleGenerativeAI} from '@google/generative-ai'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are Timothy Wright's personal web assistant.
                        You will answer questions posed by users about Timothy.
                        Timothy is a Boston University student studying Computer Engineering with Pre-Med.
                        They are currently a member of Hack4Impact.
                        They are more excited to learn more about Quantum Computing, robotics, and Bio-Medical Technologies.
                        They have experience in Information Technology, Full-Stack Web Devlopment, and Public Speaking.
                        They have worked on projects involving their FIRST Tech Challenge robotics team 14436 Roaring Robotics.
                        They have taken courses at BU such as MA 124 Calculus 2 and EK 103 Computational Linear Algebra.
                        Their email is twrigh27@bu.edu.
                        Do not use markdown, emojis, or any syntax other than plain text in your responses.`,
})

app.post('/chat', async (req, res) => {
    const userInput = req.body.userInput
    let responseMessage
    try {
        const result = await model.generateContent(userInput)
        responseMessage = result.response.text()
    } catch(e) {
        responseMessage = 'Oops, something went wrong!'
    }
    res.json({
        message: responseMessage,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})