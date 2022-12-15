import { app } from "./app";
import * as dotenv from 'dotenv'
dotenv.config()
const {
    PORT,
} = process.env

const port = PORT;

app.listen(port, () => console.log(`Server init in localhost:${port}`));
