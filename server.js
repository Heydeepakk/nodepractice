const connection = require('./database/db');
const router = require('./router/route');

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
