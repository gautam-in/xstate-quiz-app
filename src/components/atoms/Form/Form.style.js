import styled from 'styled-components';

export const Form = styled.form``;

export const StyledForm = styled.form`
  margin-top: 3.125rem;
  background: #fff;
  border-radius: 0.3125rem;
  box-shadow: 0 2px 5px #ccc;
  padding: 2.5rem;
`;

export const FieldGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  float: left;
  width: 75%;
  box-sizing: border-box;
  height: 3.125rem;
  padding: 0.75rem;
  background: #eee;
  border: 0 none;
  border-radius: 0 none;
  @media screen and (max-width: 40.625rem) {
    width: 100%;
  }
`;
export const Label = styled.label`
  float: left;
  width: 25%;
  box-sizing: border-box;
  font-size: 0.8rem;
  line-height: 3.125rem;
  @media screen and (max-width: 40.625rem) {
    width: 100%;
    line-height: 2rem;
  }
`;
