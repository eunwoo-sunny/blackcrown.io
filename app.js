const express = require('express');
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');
const app = express(); 
const port = 3000;
app.set('view engine','ejs');
app.set('views','./views');
dbConnect();

 
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static('./public'));
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.render('home')
})

app.use('/login', require('./routes/loginRoutes')); 
app.use('/request', require('./routes/requestRoutes')); 
app.use('/register', require('./routes/registerRoutes')); 

app.listen(port, () => console.log(`${port} is running`))