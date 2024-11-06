const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logged');
    return res.render('login');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        const isValidLogin = await login.register();
    
        if (!isValidLogin) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }
        
        req.flash('success', 'User created with success.');
        req.session.save(() => {
            return res.redirect('/login/index');
        });
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        const isValidLogin = await login.login();
    
        if (!isValidLogin) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }
        
        req.flash('success', 'User logged with success.');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/login/index');
        });
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}