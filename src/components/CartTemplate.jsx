import React, { useEffect, useRef, useState } from "react";

import { Button, Card as CardBS } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./CartTemplate.css";

export function CartTemplate({
  title,
  description,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNfRFSIbyb40oYPjza5OgYytSKB5U0019ZQ&s",
  price,
  id,
  setEdit,
}) {
  const [form, setForm] = useState({
    title,
    description,
    image,
    price,
    id,
  });

  const textareaRef = useRef(null);

  const inmutableForm = { title, description, image, price, id };

  useEffect(() => {
    adjustHeight();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitEdit = () => {
    const requestForm = {
      ...form,
      price: isNaN(parseFloat(form.price)) ? 0 : parseFloat(form.price),
    };

    setForm(requestForm);
    console.log(requestForm);
    setEdit(false);
  };

  const clean = () => {
    setForm(inmutableForm);
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <CardBS style={{ width: "18rem", marginBottom: "20px", cursor: "pointer" }}>
      <div className="d-flex mt-1 mb-1">
        <Button
          className="col-2 ms-auto"
          variant="warning d-flex align-items-center justify-content-center"
          onClick={clean}
        >
          <span className="material-symbols-outlined">cleaning_services</span>
        </Button>
        <Button
          className="col-2 ms-1"
          variant="primary d-flex align-items-center justify-content-center"
          onClick={submitEdit}
        >
          <span className="material-symbols-outlined">save</span>
        </Button>
        <Button
          className="col-2 ms-1"
          variant="danger d-flex align-items-center justify-content-center"
          onClick={() => setEdit(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </Button>
      </div>
      <img
        src={form.image}
        alt="Preview"
        className="m-auto border-bottom"
        style={{ width: "260px", height: "280px" }}
      />
      <Form.Control
        name="image"
        type="text"
        value={form.image}
        placeholder="Image URL"
        className="mt-3"
        onChange={handleChange}
      />
      <Form.Control
        name="price"
        type="number"
        min={0}
        step={0.01}
        value={form.price}
        placeholder="Price"
        className="mt-3 fs-4"
        onChange={handleChange}
      />
      <CardBS.Body>
        <Form.Control
          name="title"
          as="textarea"
          ref={textareaRef}
          value={form.title}
          placeholder="Title"
          className="mt-1 card-title h5 fs-5"
          style={{ resize: "none" }}
          onChange={(e) => {
            handleChange(e);
            adjustHeight();
          }}
        />
        <Form.Control
          name="description"
          as="textarea"
          rows={5}
          value={form.description}
          placeholder="Description"
          style={{ height: "200px", resize: "none" }}
          onChange={handleChange}
        />
      </CardBS.Body>
    </CardBS>
  );
}
