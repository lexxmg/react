
import './textarea.css';

export const Textarea = (props) => {
  const { input, meta, className} = props;

  return (
    <div className={(meta.touched && meta.error) ? "textarea__wrapper textarea__wrapper--err" : "textarea__wrapper" }>
      <textarea className={className + " " + "textarea"} {...input}></textarea>
      {meta.touched && meta.error && <span className="textarea__span" >{meta.error}</span>}
      {meta.submitSucceeded && <span className="textarea__span" >"send"</span>}
    </div>
  )
}
