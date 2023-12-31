require('dotenv').config()
const PORT = process.env.PORT || 3025

const express = require('express');

const usersRoutes = require('./routes/users');

const middlewareLogReq = require('./middleware/log')
const upload = require('./middleware/multer')

const app = express();

app.use(middlewareLogReq);
app.use(express.json());
app.use( '/assets' ,express.static('public/images'))


app.use('/users', usersRoutes )
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})

app.use(( err, req, res, next ) => {
    res.json({
        message: err.message
    })
})


app.listen(PORT, () => {
    console.log(`Server berhasil di running diport ${PORT}`);
})









