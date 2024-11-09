const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.validate();
        if (this.errors.length > 0) return false;

        const isUserExists = await this.userExists(1);

        if (isUserExists) return false;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
        return true;
    }

    async login() {
        this.validate();
        if (this.errors.length > 0) return false;

        const isUserExists = await this.userExists(2);

        if (!isUserExists) return false;

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Invalid password');
            return false;
        }
        return true;
    }

    validate() {
        this.cleanUp();
        if (!validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
        
        if (this.body.password.length < 3 || this.body.password.length > 50) 
            this.errors.push('Password must have between 3 and 50 characters long.');
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] != 'string') this.body[key] = ''; 
            
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }

    async userExists(accessType) {
        this.user = await LoginModel.findOne({ email: this.body.email });

        switch (accessType) {
            case 1:
                if (this.user) {
                    this.errors.push('User already exists.');
                    return true;
                }
            case 2:
                if (!this.user) {
                    this.errors.push('User does not exists');
                    return false;
                }
        }
        return true;
    }

}

module.exports = Login;