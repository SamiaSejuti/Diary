import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote)=>{
        return {
            ...prevNote, [name]: value
        }
    })
  }

  function submitNote(e){
    props.onAdd(note);
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
