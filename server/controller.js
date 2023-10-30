let APPT_DATA = [
    { id: 0, date: "10/20/2023", time: "10:30 AM", mainService: "trim", additionalService:"none", description: "Basic trim with layers" },
    { id: 1, date: "10/21/2023", time: "12:30 PM", mainService: "none", additionalService: "partial-color", description: "blonde highlights"},
    { id: 2, date: "10/22/2023", time: "2:30 PM", mainService: "major-cut", additionalService: "none", description: "want to take several inches off"},
    { id: 3, date: "11/04/2023", time: "1:30 PM", mainService: "none", additionalService: "volumizing-blow-out", description: "needing to get my hair done for an event"},
]

let globalId = 4

const handlerFunctions = {
    getAppointments: (req, res) => {
        res.send(APPT_DATA)
    },
    addAppointment: (req, res) => {
        const { date, time, mainService, additionalService, description } = req.body
        const newApptObj = {
            id: globalId,
            date: date,
            time: time,
            mainService: mainService,
            additionalService: additionalService,
            description: description
        }

        APPT_DATA.push(newApptObj)
        globalId++
        res.send(newApptObj)
    },
    deleteAppointment: (req, res) => {
        const { id } = req.params
        APPT_DATA = APPT_DATA.filter((appt) => appt.id !== +id)
        res.send("Appointment cancelled")
    },
    editAppointment: (req, res) => {
        const { id } = req.params
        const { date, time, mainService, additionalService, description } = req.body
        
        const index = APPT_DATA.findIndex(appt => appt.id == id)
        const apptItem = APPT_DATA[index]
        
        apptItem.date = date
        apptItem.time = time
        apptItem.mainService = mainService
        apptItem.additionalService = additionalService
        apptItem.description = description

        res.send(apptItem)
    }
}

export default handlerFunctions