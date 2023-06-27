import "./form-input.styles.scss";

const FormInput = (props) => {
  const { label, id, value, ...otherProps } = props;
  return (
    <div className="form-group">
      <input className="form-input" value={value} {...otherProps} />
      {label && (
        <label
          className={`form-input-label ${value.length ? "shrink" : ""}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
