const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ msg: 'Testing Docker Composer' })
});


app.listen(3000);