import React, { useState } from "react";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            breed,
            imageUrl,
          }),
        }
      );
      const result = await response.json();
      console.log("Player Created:", result);

      setName("");
      setBreed("");
      setImageUrl("");
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <div className="new-player-form-container">
      <form onSubmit={handleSubmit} className="new-player-form">
        <h2>Add New Player</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
