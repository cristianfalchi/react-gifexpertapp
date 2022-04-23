import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    // Necesito saber lo que la persona esta escribiendo
    const [inputValue, setInputValue] = useState(''); // definir siempre un estado inicial

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search category..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}