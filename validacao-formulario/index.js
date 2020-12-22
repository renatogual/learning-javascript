class ValidateForm {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.isValidPasswords();

        if(validFields && validPasswords) {
            alert('Formulário enviado.');
            this.form.submit();
        }
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    isValidFields() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.validar')) {
            const label = field.previousElementSibling.innerText;
            if(!field.value) {
                this.createError(field, `${label} não pode estar em branco`)
                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.isValidCPF(field)) valid = false;
            }

            if(field.classList.contains('usuario')) {
                if(!this.isValidUser(field)) valid = false;
            }
        }

        return valid;
    }

    isValidCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if(!cpf.isValid()) {
            this.createError(field, 'CPF inválido');
            return false;
        }

        return true;
    }

    isValidUser(field) {
        const user = field.value;
        let valid = true;

        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números');
            valid = false;
        }
        
        return valid;
    }

    isValidPasswords() {
        let valid = true;

        const password = this.form.querySelector('.senha');
        const repeatPassword = this.form.querySelector('.repetir-senha');

        if(password.value != repeatPassword.value) {
            this.createError(password, 'Campo senha e repetir senha precisam ser iguais');
            this.createError(repeatPassword, 'Campo senha e repetir senha precisam ser iguais');
            valid = false;
        }

        if(password.value.length < 6 || password.value.length > 12) {
            this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres');
            valid = false;
        }

        return valid;
    }
}

const validate = new ValidateForm();