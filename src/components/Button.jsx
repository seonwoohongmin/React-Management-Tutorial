import styled, {css} from "styled-components"

const StyledButton = styled.button`
  padding: 12px 28px;
  border: 1px solid lightgrey;
  border-radius: 16px;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;

  &:hover{
    background-color : skyblue;
  }

  ${(p) => p.main &&
    css`
    font-family : "굴림";
    font-weight: 900;
  `}
`;

function Button({children, ...props}){
  return <StyledButton{...props}>{children}</StyledButton>
}

export default Button;