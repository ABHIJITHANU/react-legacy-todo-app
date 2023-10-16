function Note(props) {
  return (
    <div className="todo-note">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Note;
