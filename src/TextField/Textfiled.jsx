import React from 'react';

const TextField = ({ onChange, id, placeholder }) => {
  return (
    <input
        placeholder={placeholder}
        onChange = {onChange}
        id = {id}
      />
  );
};

export default TextField;
