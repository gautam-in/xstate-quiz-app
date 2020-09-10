import styled from 'styled-components';

export const StyledAlert = styled.div`
  width: 100%;
  padding: 0.625rem;
  box-sizing: border-box;
  margin: 0.625rem 0;
  background: rgb(251, 238, 242);
  border: 1px solid rgb(219, 112, 147);
  &:empty {
    display: none;
  }
`;
