import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote}/>
      {notes.map((noteItem) => (
        <Note key={noteItem.key} title={noteItem.title} text={noteItem.text} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
