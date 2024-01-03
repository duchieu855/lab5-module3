import React from 'react';
import 'tailwindcss/tailwind.css';

interface TypeForm {
    name: string; 
    type: string; 
    value : string;  
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onBlur : (e: React.ChangeEvent<HTMLInputElement>) => void; 
    error : string;}

const Form: React.FunctionComponent<TypeForm> = ({name, type, value, onChange, onBlur, error}) => {
    return (
        <>
            <div className='flex flex-col text-start'>
                <label htmlFor={name}>{name}</label>
                <input type={type} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur}/>
                {error && <span>{error}</span>}
            </div>
        </>

    )
}

export default Form