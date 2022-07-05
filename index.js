const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './')));

app.use((req,res,next)=>{
    return res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(3000, () => {
    console.log("Server listening at port 3000")
})