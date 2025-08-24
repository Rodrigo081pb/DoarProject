import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Switch = ({ small }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <StyledWrapper $small={small}>
      <div>
        <input
          type="checkbox"
          id="toggle_checkbox"
          checked={dark}
          onChange={() => setDark((v) => !v)}
        />
        <label htmlFor="toggle_checkbox" className={small ? 'small' : ''}>
          <div
            className={`star transition-all duration-300 ${dark ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
            role="img"
            aria-label="Sol"
          >
            ☀️
          </div>
          <div
            className={`moon transition-all duration-300 ${dark ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            role="img"
            aria-label="Lua"
          >
            🌙
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  /* Usar prop transitória $small se necessário para estilos futuros */
  #toggle_checkbox {
    display: none;
  }

  label {
    display: block;
    position: relative;
    width: 116px;
    height: 56px;
    background-color: rgb(9, 189, 128);
    border: 4px solid rgb(75, 114, 94);
    border-radius: 56px;
    cursor: pointer;
    transition: 0.3s ease background-color;
    overflow: hidden;
    user-select: none;
    /* Ajuste para alinhar verticalmente no flex */
    margin: 0;
    top: 0;
    left: 0;
  }

  label.small {
    width: 60px;
    height: 20px;
    border-radius: 30px;
    border-width: 2px;
  }

  label, label.small {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    position: relative;
  }

  .star, .moon {
    position: static;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    font-size: 1.1em;
    z-index: 1;
    transition: all 0.3s cubic-bezier(.4,0,.2,1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  label.small .star, label.small .moon {
    font-size: 0.9em;
  }

  label.small .star, label.small .moon {
    font-size: 0.9em;
  }

  .moon:before {
    content: "";
    position: absolute;
    top: -12px;
    left: -17px;
    background-color: none;
    width: 30px;
    height: 30px;
    font-size: 30px;
    transition: 0.2s ease background-color;
  }

  #toggle_checkbox:checked + label {
    background-color: rgb(75, 114, 94);
    border: 4px solid  rgb(7, 189, 128);
  }

  #toggle_checkbox:checked + label.small {
    background-color: rgb(75, 114, 94);
    border: 2px solid  rgb(7, 189, 128);
  }

  #toggle_checkbox:checked + label .star {
    top: 2px;
    left: 34px;
    transform: scale(0.6);
  }

  #toggle_checkbox:checked + label.small .star {
    left: 30px;
    top: 1px;
    transform: scale(0.6);
  }

  #toggle_checkbox:checked + label .moon {
    bottom: 8px;
  }

  #toggle_checkbox:checked + label.small .moon {
    bottom: 3px;
  }
`;

export default Switch;
