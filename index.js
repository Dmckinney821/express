const express = require('express');
const app = express();
const contacts = require('./contacts');
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');



//Hone Page = show the user a welcome message
app.get('/', (req, res) => {
    res.render('home', {
        message: 'Hello Handlebars!',
        headerText: 'hewo handlebars'
    });
    // res.send('HAAAAAAAY');
});
// Contacts List Page = show the user all contacts
app.get('/contacts', (req, res) => {
    res.render('contacts-list', {
        contacts: contacts.users
    })
    // res.send(contacts.users);
});
// Contacts Detail = show the user all info for one contact
app.get('/contacts/:id', (req, res) => {
    // res.send(`You are viewing details for ${req.params.id}`);
    let id = req.params.id;
    let contact = contacts.users.find((user) => {
      return user.id === id;   
    });
    res.render('contact-details', {
        contact 
    });
});
app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});