import * as express from "express"
import * as cors from "cors"
const app=express()
app.use(cors())
app.listen(3000,()=>{
    console.log("listening at 3000")
})