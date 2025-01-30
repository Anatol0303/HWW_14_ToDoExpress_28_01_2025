import express, {Application, NextFunction, Request, Response} from 'express';
import {initDB} from "./todo/dao/db";
import todoRouter from "./routes/todoRouter";

const app: Application = express();
const PORT = 3000;

app.use(express.json()); // -> or ./utils/parseBody.ts

app.use('/todos', todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(400).json({error: err.message});
})

async function startServer() {
    await initDB();

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}

startServer().catch(console.error);