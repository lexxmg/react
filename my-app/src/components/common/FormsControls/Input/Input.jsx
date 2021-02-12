
import './inputForm.css';

export const Input = ({meta, input, ...props}) => {
  //console.log(props);
  //console.log(meta);
  return (
    <div className="form-input">
      <input {...input} {...props}
        className={ (meta.touched && meta.error)
                    ? props.className + " " + "form-input__input form-input__input--err"
                    : props.className + " " + "form-input__input"
                  }
      />
      {
        (meta.touched && meta.error)
        ? <span className="form-input__text">{meta.error}</span>
        : ''
      }
    </div>
  )
}
