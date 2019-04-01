import express from 'express';

import WelcomeController from './controllers/welcome.controller';

const app: express.Application = express();
const port = 3000;

app.use('/welcome', WelcomeController);


app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening at http://localhost:${port}/`);
});
