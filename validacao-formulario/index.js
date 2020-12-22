class ValidateForm {
    constructor() {
        this.form = document.querySelector('.formulario');

        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.isValidFields();
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
        }

    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    isValidCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if(!cpf.isValid()) {
            this.createError(field, 'CPF inválido');
            return false;
        }
    }

}

const validate = new ValidateForm();