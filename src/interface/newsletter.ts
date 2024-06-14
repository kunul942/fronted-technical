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
