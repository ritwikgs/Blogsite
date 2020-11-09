const express = require('express');
const mongoose = require('mongoose');
// const Blog = require('./models/blog');
const { result } = require('lodash');

const blogRoutes = require('./routes/blogRoutes');

const app = express();
const dbURI = 'mongodb+srv://yeedk:Mtbtdk999@cluster0.45otd.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}).then((result) => app.listen(3000))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));










app.get('/', (req,res) => {
    res.redirect('/blogs');
});
app.get('/about', (req,res) => {
    // res.sendFile('./views/about.html', {root : __dirname});
    res.render('about', { title : 'about' });
});
// app.get('/blogs', (req,res) => {
//     Blog.find().sort({createdAt : -1}).then((result) =>{
//         res.render('index', { title : 'all blogs', blogs: result});
//     }).catch((err) => {
//         console.log(err)
//     });

// });
// app.post('/blogs', (req,res) => {
//     const blog = new Blog(req.body);
//     blog.save().then((result) => {
//         res.redirect('/blogs');
//     }).catch((err) => {
//         console.log(err);
//     });
// });
// app.get('/blogs/:id', (req,res) => {
//     const id = req.params.id;
//     Blog.findById(id).then((result) => {
//         res.render('details', { title : 'blog details', bblog: result });
//     }).catch((err) => {
//         console.log(err);
//     });       
// });

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
    
//     Blog.findByIdAndDelete(id)
//       .then(result => {
//         res.json({ redirect: '/blogs' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//  });

app.use('/blogs', blogRoutes);

app.get('/error', (req,res) => {
    // res.sendFile('./views/404.html', {root : __dirname});
    res.render('404', { title : 'error' });
});
// app.get('/newblogs/create', (req,res) => {
//     // res.sendFile('./views/about.html', {root : __dirname});
//     res.render('create', { title : 'creates' });
// });
// app.get('/one', (req,res) => {
//     res.sendFile('./views/one.html', {root : __dirname});
// });


app.use( (req,res) => {
    res.status(404).render('404', { title : 'error' });
});
