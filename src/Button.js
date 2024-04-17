const Button = ({ handler, text, keys, className, disabled }) => {
  return (
    <button
      onClick={handler}
      key={keys}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
