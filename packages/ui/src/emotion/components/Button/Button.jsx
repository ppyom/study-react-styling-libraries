/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../../color';

const Button = ({ children }) => {
  return (
    <button
      css={css`
        border: 0;
        outline: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: ${colors.secondary};
        color: ${colors.white};
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: ${colors.secondary}aa;
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
