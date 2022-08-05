import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    // const { user, email, pass } = formState;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        })

    }

    return {
        // ...formState,
        formState,
        onInputChange,

    }
}
