import { useState } from 'react'

const useForm = ( initialState = {} ) => {

    const [value, setValue] = useState(initialState);

    const reset = (formState = initialState) => {
        setValue(formState);
    }

    const handleInputChange = ({target}) => {
        setValue({
            ...value,
            [target.name]: target.value,
        });
    }
    return [
        value,
        handleInputChange,
        reset
    ];
}

export default useForm;