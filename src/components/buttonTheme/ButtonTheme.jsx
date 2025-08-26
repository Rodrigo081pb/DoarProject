import React, { useEffect, useState, useId } from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';


const Switch = ({ small }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const id = useId();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <ToggleWrapper $small={small}>
      <input
        type="checkbox"
        className="checkbox"
        id={`checkbox-theme-toggle-${id}`}
        checked={dark}
        onChange={() => setDark((v) => !v)}
      />
      <label htmlFor={`checkbox-theme-toggle-${id}`} className="checkbox-label">
        <span className="icon sun">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="10" fill="#FFD93B"/>
            <g stroke="#FFD93B" strokeWidth="2">
              <line x1="19" y1="2" x2="19" y2="8"/>
              <line x1="19" y1="30" x2="19" y2="36"/>
              <line x1="2" y1="19" x2="8" y2="19"/>
              <line x1="30" y1="19" x2="36" y2="19"/>
              <line x1="7.22" y1="7.22" x2="11.66" y2="11.66"/>
              <line x1="26.34" y1="26.34" x2="30.78" y2="30.78"/>
              <line x1="7.22" y1="30.78" x2="11.66" y2="26.34"/>
              <line x1="26.34" y1="11.66" x2="30.78" y2="7.22"/>
            </g>
          </svg>
        </span>
        <span className="icon moon">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="19" r="10" fill="#C7CFE2"/>
            <path d="M25 9a10 10 0 1 0 10 10A10 10 0 0 1 25 9z" fill="#AAB3CF"/>
          </svg>
        </span>
        <span className="ball"></span>
      </label>
    </ToggleWrapper>
  );
};


const ToggleWrapper = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox-label {
    background: #6b8fd6;
    width: ${({ $small }) => ($small ? '60px' : '120px')};
    height: ${({ $small }) => ($small ? '28px' : '56px')};
    border-radius: 999px;
    position: relative;
    padding: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s linear;
    box-shadow: 0 2px 8px rgba(80, 120, 200, 0.10);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $small }) => ($small ? '28px' : '56px')};
    height: ${({ $small }) => ($small ? '28px' : '56px')};
    z-index: 2;
    pointer-events: none;
  }

  .icon.sun {
    margin-left: 2px;
    transition: opacity 0.2s;
  }
  .icon.moon {
    margin-right: 2px;
    transition: opacity 0.2s;
  }

  .ball {
    background: #f4f6fb;
    width: ${({ $small }) => ($small ? '28px' : '56px')};
    height: ${({ $small }) => ($small ? '28px' : '56px')};
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    transition: transform 0.2s linear, background 0.2s;
    z-index: 3;
    box-shadow: 0 2px 8px rgba(80, 120, 200, 0.10);
    pointer-events: none;
  }

  /* Bola cobre o sol quando off, cobre a lua quando on */
  .checkbox:not(:checked) + .checkbox-label .icon.sun {
    z-index: 2;
    opacity: 1;
  }
  .checkbox:checked + .checkbox-label .icon.sun {
    z-index: 1;
    opacity: 0.5;
  }
  .checkbox:not(:checked) + .checkbox-label .icon.moon {
    z-index: 1;
    opacity: 0.5;
  }
  .checkbox:checked + .checkbox-label .icon.moon {
    z-index: 2;
    opacity: 1;
  }

  .checkbox + .checkbox-label .ball {
    /* Estado inicial */
    transform: translateX(0);
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.2s;
  }
  .checkbox:checked + .checkbox-label .ball {
    /* Para small: largura do botão (60px) - largura da bola (28px) = 32px */
    transform: ${({ $small }) => $small ? 'translateX(32px)' : 'translateX(64px)'};
  }
`;

export default Switch;
