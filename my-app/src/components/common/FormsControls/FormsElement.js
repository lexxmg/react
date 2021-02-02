
export const Textarea = (props) => {
  const { input, meta, className} = props;

  return (
    <div>
      <textarea className={className} {...input}></textarea>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}
