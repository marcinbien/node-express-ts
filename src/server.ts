import express from "express";

import {WelcomeController} from "./controllers/welcome.controller";

const app: express.Application = express();
const port: number =  3000;

app.use("/welcome", WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
