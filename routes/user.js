const UserController = require('../app/controllers/UserController');

module.exports = app => {
  app.get('/register', UserController.register_form);
  app.get('/login', UserController.login_form);

  app.post('/register', UserController.register)
  app.post('/login', UserController.login)

}
