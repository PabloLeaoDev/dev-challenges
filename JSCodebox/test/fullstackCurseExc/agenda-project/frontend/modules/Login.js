import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailIn = el.querySelector('input[name="email"]');
        const passwordIn = el.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailIn.value)) {
            alert('Invalid e-mail');
            error = true;
        }

        if (passwordIn.value.length < 3 || passwordIn.value.length > 50) {
            alert('Password must have between 3 and 50 characters long.');
            error = true;
        }

        if (!error) el.submit();
    }
}