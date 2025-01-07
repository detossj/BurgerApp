import '../estilos/Filter/filter.css'

export const Filter = ({ OnChangeFilter }) => {
  return (
    <nav>
      <ul>
        <li>
          <button className="filter" onClick={() => OnChangeFilter(1)}>
            Hamburguesas
          </button>
        </li>
        <li>
          <button className="filter" onClick={() => OnChangeFilter(2)}>
            Bebidas
          </button>
        </li>
        <li>
          <button className="filter" onClick={() => OnChangeFilter(3)}>
            Agregados
          </button>
        </li>
      </ul>
    </nav>
  );
};
