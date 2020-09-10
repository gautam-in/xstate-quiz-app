import styled from 'styled-components';

const Option = styled.li`
  padding: 0;
  border-top: 1px solid #eee;
`;
const OptionLabel = styled.label`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 1.5rem 2rem 1.5rem 5rem;
  font-size: 1rem;
  line-height: 1.875rem;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  &::before {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    width: 1.75rem;
    height: 1.75rem;
    content: '';
    display: inline-block;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 50%;
    transition: all 0.3s;
  }
  &:hover {
    background: #fff7c3;
  }
`;
const OptionField = styled.input`
  position: absolute;
  width: auto;
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  &:checked ~ ${OptionLabel}::before {
    background: #fe414d;
    border-color: #fe414d;
  }
`;

export { Option, OptionLabel, OptionField };
