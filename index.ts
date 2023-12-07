import express, { Request, Response, Application } from "express"
// const express = require("express")

const PORT = 8888

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
    return res.send({
        hello: "world"
    })
})

app.post("/", (req: Request, res: Response) => {
    return res.send({
        message: "add data user success"
    })
})

app.listen(PORT, () => {
    console.log("application run on port ", PORT)
})