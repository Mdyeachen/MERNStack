import express from "express";

const app = express();


app.get('/', (req, res) => {
    res.send('Server is Runing')
})

app.listen(3000, () => {
    console.log('Port runing on 3000')
})