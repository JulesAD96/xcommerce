const UserController = require('../app/controllers/UserController');

module.exports = app => {
  app.get('/register', UserController.register);
}
