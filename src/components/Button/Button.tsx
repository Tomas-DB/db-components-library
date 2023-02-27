import React from 'react';
import './Button.css';

export type ButtonProps = {
  /**
   * Button Label
   */
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label = 'My Button' }) => {
  return <button className="btn">{label}</button>;
};

export default Button;
