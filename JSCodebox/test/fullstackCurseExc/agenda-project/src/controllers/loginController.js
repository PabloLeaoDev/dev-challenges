const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        const isValidLogin = await login.register();
    
        if (!isValidLogin) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }
        
        req.flash('success', 'User created with success.')
        req.session.save(() => {
            return res.redirect('/login');
        });
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
}