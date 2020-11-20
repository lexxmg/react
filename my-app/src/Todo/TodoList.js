
const styles = {
  li: {
    marginLeft: '5px',
    color: 'red'
  }
}

setTimeout(() => {
  console.log(styles.li.color);
}, 10000);

export default function TodoList() {
  return (
    <ul className="list">
      <li className="list__item">задача-1</li>
      <li className="list__item" style={styles.li}>задача-2</li>
      <li className="list__item">задача-3</li>
      <li className="list__item">задача-4</li>
    </ul>
  )
}
