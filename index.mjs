import express, { json } from 'express'

const app = express()
app.disable('x-powered-by')


app.use((req, res) => {
	res.json({message: 'se logro gente'})
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
	console.log(`listening in port => http://localhost:${PORT}`)
})
