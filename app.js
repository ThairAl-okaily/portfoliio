const express = require ('express');
const app = express();


app.get('/', (req, res) => {
    res.send('hello from me')
})

app.listen(3000, () => {
    console.log('port 3000')
})