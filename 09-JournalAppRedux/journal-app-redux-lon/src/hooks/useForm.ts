import { useEffect, useState } from "react";


export const useForm = (initialForm: Object = {}, formValidations: any = {}) => {
    const [formState, setFormState] = useState(initialForm) as [formState: any, setFormState: any];
    // const { user, email, pass } = formState;
    const [formValidation, setFormValidation] = useState() as [formValidation: any, setFormValidation: any];

    useEffect(() => {
        createValidators();
    }, [formState])

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        })

    }
    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues: any = {};
        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField] as [fn: Function, errorMessage: string];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? '' : errorMessage;

            // setFormValidation({
            //     ...formValidation,
            //     [`${formField}Valid`]: fn(formState[formField]) ? '' : errorMessage,
            // })
        }
        setFormValidation(formCheckedValues);
        console.log(formValidation);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        formValidation,

    }
}
