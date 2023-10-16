import React, { useState } from "react";

function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        text: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
    }

    return (
        <div className="todo-addnote">
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Heading"
                />
                <textarea
                    name="text"
                    onChange={handleChange}
                    value={note.text}
                    placeholder="Content"
                    rows="3"
                ></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    );
}

export default CreateNote;
