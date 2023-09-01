import React from 'react';

    const Button = ({onClick, label, id}) => {
        return(
            <button onClick = {onClick} id = {id}>{label}</button>
        )
    }
export default Button;