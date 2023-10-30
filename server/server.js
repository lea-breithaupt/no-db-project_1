import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

app.get('/appointments', handlerFunctions.getAppointments)
app.post('/addAppointment', handlerFunctions.addAppointment)
app.delete('/deleteAppointment/:id', handlerFunctions.deleteAppointment)
app.put('/editAppointment/:id', handlerFunctions.editAppointment)


ViteExpress.listen(app, 5555, () => console.log(`http://localhost:5555`))