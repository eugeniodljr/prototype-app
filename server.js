const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use('/', (request, response)=>{
    response.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(port, ()=>{
    console.log(`We are rolling on port ${port}`);
})