
import './inputForm.css';

export const Input = ({meta, input, ...props}) => {
  console.log(props);
  return (
    <div className="form-input">
      <input {...input} {...props}
        className={ (meta.error && meta.touched)
                    ? props.className + " " + "form-input__input form-input__input--err"
                    : props.className + " " + "form-input__input"
                  }
      />
      {
        (meta.error && meta.touched)
        ? <span className="form-input__text">{meta.error}</span>
        : ''
      }
    </div>
  )
}
