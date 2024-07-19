import Express, {Request, Response, NextFunction} from "express"

const app = Express()

app.use((err: Error, req: Request, res: Response, n: NextFunction) => {

    res.status(500).json({
        status: "error",
        name: err.name,
        message: err.message,
        stack: err.stack
    })

})

export default app
