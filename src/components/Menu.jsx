import { useState, useEffect, useRef } from 'react';
//import axios from 'axios'
import { usersData } from '../data/users'
import { GiShoppingCart } from "react-icons/gi";
import { IoAdd } from "react-icons/io5";

const Menu = () => {
  const [items, setItems] = useState([]);

  //const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  //prueba contador para ocupar los articulos.
  useEffect(() => {
    // Simula la carga de datos al montar el componente
    fetchItems();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // URL base de la PokeAPI
  //const baseUrl = 'https://pokeapi.com/api/v2';

  const fetchItems = () => {
    setLoading(true);
    // Utiliza los datos importantes directamente 
    try {
      //const response = await axios.get(usersData.json);
      const data = usersData;
      //const data = response.data;
      console.log('Datos obtenidos:', data); // Verifica los datos obtenidos en la consola

      // Verificar la estructura de la respuesta
      if (Array.isArray(data)) {
        //setItems(prevItems => [...prevItems, ...data]);
        //setPage(prevPage => prevPage + 1);
        setItems(data)
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
    <>
      <div className="menu">
        <div className="menu-container">
          <div className="grid-container" ref={containerRef}>
            {items.length === 0 && !loading && <p>No items to display.</p>}
            {items.map((item, index) => (
              <div key={index} className="grid-item">
                <div className='more-info'>
                  <button><IoAdd />
                  </button>
                </div>
                <div>
                  <img className='img-central' src={item.img} alt="img" />
                </div>
                <div className='contenido'>
                  <section>
                    <h2> <i>ID:</i> {item.id}</h2>
                    <i>name</i> {item.name} <br />
                    <i>age:</i> {item.age} <br />
                    <i>pais:</i> {item.pais} <br />
                    <b>
                      <i>@mail</i> {item.mail}
                    </b>
                  </section>
                  <button className='btn-buy' ><GiShoppingCart /> agregar</button>
                </div>

              </div>
            ))}
          </div>
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default Menu;