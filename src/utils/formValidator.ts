import { FormData } from '@/interface';

//regular expression for form email validation
const isValidEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//Validations used for the form
export const formValidator = (form: FormData) => {
    let errors: FormData = { email: '' };

    const { email } = form;

    if (email.trim().length <= 1) {
        errors.email = 'Email is empty';
    } else if (!isValidEmail(email)) {
        errors.email = `Email "${email}" is not valid`;
    }

    return errors;
};
