//Interface for newsletter button in Newsletter component
export interface NewsletterButton {
    type: 'submit' | 'button';
    value: string;
    isSuccess: boolean;
}

export interface Newsletter {
    title: string;
    desc: string;
    buttons: NewsletterButton[];
}

//Interface for form data used in useForm and formValidator
export interface FormData {
    email: string;
}
