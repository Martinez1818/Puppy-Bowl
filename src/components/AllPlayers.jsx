import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDetails = (id) => {
    navigate(`/player/${id}`);
  };

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const playersData = await fetchAllPlayers();
        console.log(playersData);
        setPlayers(playersData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    getPlayers();
  }, []);

  return (
    <div className="all-players-container">
      <h1 className="title">All Players</h1>
      <input
        type="text"
        placeholder="Search players by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      
      <div className="players-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div className="player-card" key={player.id}>
              <img
                className="player-image"
                src={
                  player.imageUrl && player.imageUrl.startsWith("http")
                    ? player.imageUrl
                    : "https://via.placeholder.com/150"
                }
                alt={player.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h4 className="player-name">{player.name}</h4>
              <p className="player-breed">Breed: {player.breed}</p>
              <button
                className="details-button"
                onClick={() => handleDetails(player.id)}
              >
                See Details
              </button>
            </div>
          ))
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
