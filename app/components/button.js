import { styled } from '../theme/index.js'

const StyledButton = styled("button", {
  color: "green",
  padding: '1rem',
  border: 'solid',
  borderColor: "black",
  borderWidth: 1,
  borderRadius: 4
})

export const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}