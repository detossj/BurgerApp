import React from 'react';

export const Nav = ({ OnChangeNav }) => {
  return (
    <nav>
      <ul>
        <li>
          <button className="button-nav" onClick={() => OnChangeNav(1)}>
            Hamburguesas
          </button>
        </li>
        <li>
          <button className="button-nav" onClick={() => OnChangeNav(2)}>
            Bebidas
          </button>
        </li>
        <li>
          <button className="button-nav" onClick={() => OnChangeNav(3)}>
            Agregados
          </button>
        </li>
      </ul>
    </nav>
  );
};
