/**
 * Controller for users
 */
const bcrypt = require('bcrypt');
const User = require('../models/User');

const salt = bcrypt.genSaltSync(10);


exports.register = (req, res) => {
    const user =  User.create({
        'email':'ommerce@gmail.com',
        'name':'xcommece',
        'password': bcrypt.hashSync('password', salt),
    });
    user.then((data) => {
        return res.status(200).send({'user':data});
    })
}