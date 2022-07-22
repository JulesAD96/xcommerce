/**
 * Controller for users
 */
 const bcrypt = require('bcrypt');
 const db = require('../../models');
 
 const salt = bcrypt.genSaltSync(10);
 
 /**
  * SHow register form
  * @param {*} req 
  * @param {*} res 
  * @returns 
  */
 exports.register_form = (req, res) => {
     return res.render('pages/register', {layout:false});
 }
 
 /**
  * Create an user by using credentials
  * @param {*} req 
  * @param {*} res 
  * @returns
  */
 exports.register = (req, res) => {
     // Check if form is not empty
     if(Object.keys(req.body).length === 0) {
         return res.redirect('/register');
     }
     const password_hash = bcrypt.hashSync(req.body.password, salt);
     // Create new user
     const user = db.User.create({
         email: req.body.email,
         name: req.body.name,
         password : password_hash,
     })
     user.then((data) => {
         return res.redirect('/login');
     }).catch(error => {
        console.log(error);
        return res.redirect('/register');
     })
 }
 
 
 /**
  * Show login form
  * @param {*} req 
  * @param {*} res 
  * @returns 
  */
 exports.login_form = (req, res) => {
 
     return res.render('pages/login', {layout:false})
 }
 
 /**
  * Login user by using email and password
  * @param {*} req 
  * @param {*} res 
  * @returns 
  */
 exports.login = (req, res) => {
     return res.status(200).send({'crendentials': req.body});
 }