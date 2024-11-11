const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    middlename: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    phoneNumber: {type: String, required: false, default: ''},
    creationDate: {type: Date, default: Date.now}
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    static async searchId(id) {
        if (typeof id !== 'string') return;
        const contact = await ContactModel.findById(id);
        return contact;
    }

    static async searchContacts() {
        const contacts = await ContactModel.find()
            .sort({ creationDate: -1 });
        return contacts;
    }

    async register() {
        await this.validate();
        if (this.errors.length > 0) return;
        this.contact = await ContactModel.create(this.body);
    }

    async validate() {
        this.cleanUp();
        const contactExists = await this.contactExists();
        if (contactExists) this.errors.push('Contact already exists');
        if (!this.body.name) this.errors.push('Name is required field.');
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail.');
        if (!this.body.email && !this.body.phoneNumber) 
            this.errors.push('At least one contact needs to be sent: e-mail or phone number.');
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] != 'string') this.body[key] = ''; 
        }

        this.body = {
            name: this.body.name,
            middlename: this.body.middlename,
            email: this.body.email,
            phoneNumber: this.body.phoneNumber
        };
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        this.validate();
        if (this.errors.length > 0) return;
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
    }

    async delete(id) {
        if (typeof id !== 'string') return;
        this.contact = await ContactModel.findByIdAndDelete(id, this.body);
    }

    async contactExists() {
        if (this.body.middlename !== '') {
            this.contact = await ContactModel.findOne({ name: this.body.name, middlename: this.body.middlename });
        } else {
            this.contact = await ContactModel.findOne({ name: this.body.name });
        }

        if (!this.contact) {
            if (this.body.email !== '') {
                this.contact = await ContactModel.findOne({ email: this.body.email });
            }
        }
        

        if (!this.contact) {
            if (this.body.phoneNumber !== '') {
                this.contact = await ContactModel.findOne({ phoneNumber: this.body.phoneNumber });
            }
        }

        if (!this.contact) {
            return false;
        }

        return true;
    }
}

module.exports = Contact;