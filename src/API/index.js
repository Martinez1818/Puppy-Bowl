export const fetchAllPlayers = async () => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT/players");
        const result = await response.json();
        return result.data.players;
    } catch (err) {
        console.error("Error fetching players: ", err);
        return [];

    }
};