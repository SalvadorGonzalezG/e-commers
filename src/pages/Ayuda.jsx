import { useAppContext } from "../context/AppContext";

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Ayuda = () => {
  const { value, moreValue } = useContext(AppContext);

  return (
    <>
      <div>
        <button onClick={moreValue}>Incrementar compras</button>
        <p>valor actual: {value}</p>
      </div>
    </>
  );
};

export default Ayuda;