import { styled } from '../theme/index.js'

const StyledButton = styled("button", {
  color: "green",
  // backgroundColor: "teal",
  // padding: "2rem"
})

// const Button = styled("button", {
//     color: "red"
// })
export const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}