const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'))

router.get("/", (req, res)=>{
    res.sendFile('/public/home.html');
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/home.html');
})

app.get('/getall', (req, res)=>{
    res.sendFile(__dirname + '/public/getAll.html');
})

app.get('/getbykey', (req, res)=>{
    res.sendFile(__dirname + '/public/getByKey.html');
})

app.get('/getbyrecord', (req, res)=>{
    res.sendFile(__dirname + '/public/getByRecord.html');
})

app.get('/put', (req, res)=>{
    res.sendFile(__dirname + '/public/put.html');
})

app.get('/update', (req, res)=>{
    res.sendFile(__dirname + '/public/update.html');
})

app.get('/delete', (req, res)=>{
    res.sendFile(__dirname + '/public/delete.html');
})

app.use('/.netlify/function/public/home', router)

app.listen(port, ()=>{
    console.log(`Port running at http://localhost:${port}`)
});

