import { useState, useEffect, useRef } from 'react';
import axios from 'axios'

const Menu = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchItems();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // URL base de la PokeAPI
  const baseUrl = 'https://pokeapi.com/api/v2';

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
      const data = response.data;
      console.log('Datos obtenidos:', data); // Verifica los datos obtenidos en la consola

      // Verificar la estructura de la respuesta
      if (Array.isArray(data.results)) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setPage(prevPage => prevPage + 1);
        
      } else {
        console.error('La respuesta de la API no contiene un array en "items":', data);
      }
    } catch (error) {
      console.log('Error fetching items..', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight && !loading) {
      fetchItems();
    }
  };

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="grid-container" ref={containerRef}>
          {items.length === 0 && !loading && <p>No items to display.</p>}
          {items.map((pokemon, index) => (
            <div key={index} className="grid-item">
              <h1></h1>
              <p>name: {pokemon.name}</p>
            </div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Menu;