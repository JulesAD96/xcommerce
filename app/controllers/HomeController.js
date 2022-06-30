/**
 * Controller for application home page
 * 
 */

exports.index = (req, res) => {
    res.render('pages/home', { title: 'Express' });
}