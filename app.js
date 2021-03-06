const express = require ('express');
const path = require ('path');
const app = express ();


app.get ('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/index.html')
)});


app.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/registro.html'))
})


app.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './views')))


 app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

