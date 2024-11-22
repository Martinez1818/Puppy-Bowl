import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`
        );
        const result = await response.json();
        setPlayer(result.data.player);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };
    fetchPlayer();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Player deleted successfully!");
        navigate("/"); // Redirect to the home page after deletion
      } else {
        alert("Failed to delete the player.");
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  if (!player) return <div>Loading...</div>;

  return (
    <div className="single-player-container">
      <div className="single-player-card">
        <img className="player-image" src={player.imageUrl} alt={player.name} />
        <h4 className="player-name">{player.name}</h4>
        <p className="player-breed">{player.breed}</p>
        <button className="delete-button" onClick={handleDelete}>
          Delete Player
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
