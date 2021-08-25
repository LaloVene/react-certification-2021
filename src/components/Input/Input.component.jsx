import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  margin: 1rem 0;
`;
const InputField = styled.input`
  width: 100%;
  height: 30px;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.primaryTextColor};
  letter-spacing: ${(props) => (props.type === 'password' ? '0.8rem' : '')};
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
`;
const Label = styled.label`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 0.8rem;
`;

function Input({ onChange, placeholder, label, type, required }) {
  return (
    <Group>
      <Label>{label}</Label>
      <InputField
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </Group>
  );
}

export default Input;
