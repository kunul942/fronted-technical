import { FormData } from '@/interface';

import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { formValidator } from '@/utils/formValidator';

export const useForm = (initialState: FormData) => {
    const [form, setForm] = useState<FormData>(initialState);
    const [errors, setErrors] = useState({ email: '' });
    const [isSuccess, setIsSuccess] = useState(false);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onBlur = () => {
        setErrors(formValidator(form));
    };

    const onResetForm = () => {
        setForm(initialState);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(formValidator(form));

        if (formValidator(form).email) return;

        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            onResetForm();
        }, 5000);
    };

    return {
        ...form,
        form,
        onInputChange,
        onResetForm,
        onSubmit,
        onBlur,
        errors,
        isSuccess,
    };
};
