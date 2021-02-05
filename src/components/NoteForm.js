import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";
import thumbBg from "../assets/images/thumbnail.jpg";

const NoteForm = ({ note, onSubmit }) => {
  const [id, setId] = useState(note ? note.id : "");
  const [title, setTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");
  const [image, setImage] = useState(note ? note.image : "");
  const [error, setError] = useState(undefined);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === "") {
      setError("Title is required");
    } else {
      setError(undefined);
      onSubmit({
        id: id ? id : uuid(),
        title: title,
        description: description,
        image: image,
        createdAt: moment().valueOf(),
      });
    }
  };

  const onTitleChange = (e) => {
    const input = e.target.value;
    setTitle(input);
  };

  const onDescriptionChange = (e) => {
    const input = e.target.value;
    setDescription(input);
  };

  const onFileChange = (e) => {
    const fileType = e.target.files[0].type;
    if (fileType === "image/jpeg" || fileType === "image/png") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });

      reader.readAsDataURL(e.target.files[0]);
    } else {
      alert("file type must be JPEG or PNG");
    }
  };

  return (
    <div>
      <form className="note-form" onSubmit={onSubmitHandler}>
        <div className="form-input">
          <br />
          {error && <span className="error-message">* Title is required</span>}
          <div className="form-control">
            <input onChange={onTitleChange} placeholder="Title" type="text" value={title} />
          </div>

          <div className="form-control">
            <div className="textarea-wrapper">
              <textarea
                className="textarea-add"
                id="textarea-add"
                onChange={onDescriptionChange}
                placeholder="Description"
                value={description}
              />
            </div>
          </div>
          <div className="form-control">
            <button className="button--add button--icon">
              <span>Save Note</span>
            </button>
          </div>
        </div>
        <div className="form-thumbnail">
          <img src={image ? image : thumbBg} alt="" />
          <div className="form-file-chooser">
            <label className="button--block file-label" htmlFor="file">
              Choose Thumbnail
            </label>
            <input className="input-file" id="file" onChange={onFileChange} type="file" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
