import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Button = styled.button`
  background: #fe414d;
  color: #fff;
  width: 100%;
  height: 3.125rem;
  border: 0 none;
  font-weight: 700;
  cursor: pointer;

  [loading] {
    background: #c0c0c0;
    cursor: default;
    &:before {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      vertical-align: text-bottom;
      border: 0.25em solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      color: #fff;
      animation: ${rotate} 0.75s linear infinite;
      content: '';
    }
  }
`;
