import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label = 'My Button' }) => {
  return <button>{label}</button>;
};

export default Button;
