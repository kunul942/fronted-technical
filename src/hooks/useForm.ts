import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
    const [form, setForm] = useState(initialState);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setForm(initialState);
    };

    return {
        ...form,
        form,
        onInputChange,
        onResetForm,
    };
};
