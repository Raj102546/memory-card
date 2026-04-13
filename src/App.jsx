import { useEffect, useState } from "react";
import Cards from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { pokemon: "pikachu", image: "" },
    { pokemon: "bulbasaur", image: "" },
    { pokemon: "squirtle", image: "" },
    { pokemon: "charizard", image: "" },
    { pokemon: "arceus", image: "" },
    { pokemon: "hydrapple", image: "" },
    { pokemon: "greninja", image: "" },
    { pokemon: "hawlucha", image: "" },
    { pokemon: "onix", image: "" },
    { pokemon: "psyduck", image: "" },
    { pokemon: "garchomp", image: "" },
    { pokemon: "mewtwo", image: "" },
    { pokemon: "gengar", image: "" },
    { pokemon: "eevee", image: "" },
    { pokemon: "dragonite", image: "" },
    { pokemon: "blaziken", image: "" },
    { pokemon: "togekiss", image: "" },
    { pokemon: "lucario", image: "" },
  ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchData = cards.map((card) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${card.pokemon}`),
      );
      const responses = await Promise.all(fetchData);
      const jsonPromise = responses.map((response) => response.json());
      const data = await Promise.all(jsonPromise);
      setCards(
        cards.map((card, index) => ({
          ...card,
          image: data[index].sprites.other["official-artwork"].front_default,
        })),
      );
    } catch (err) {
      setError(err.message);
      setCards(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="header">
        <h1>Pokémon Memory</h1>
        <p className="loading">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="header">
        <h1>Pokémon Memory</h1>
        <p className="error-msg">There occured an error!</p>
        {/* Style this button later lol */}
        <button onClick={async () => fetchAllData()}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1>Pokémon Memory</h1>
        <p>Click each Pokémon only once — don't repeat!</p>
      </div>
      {<Cards cards={cards} setCards={setCards} />}
    </div>
  );
}

export default App;
