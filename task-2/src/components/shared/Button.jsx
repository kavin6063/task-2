const Button = ({ children, bgcolor, textColor, type, isDisabled }) => {
  return (
    <button type={type} className={`bg-${bgcolor} text-${textColor}`}>
      {children}
    </button>
  );
};

export default Button;
