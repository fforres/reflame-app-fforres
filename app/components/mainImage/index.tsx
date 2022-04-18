import { styled } from "../../theme/index.js";
import jpegImage from "./fforres.jpeg.~r_ref.js";
import webpImage from "./fforres.webp.~r_ref.js";

interface MainImageProps {}

const StyledSection = styled("section", {
  height: "90vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledImage = styled("div", {
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  filter: "blur(2px)",
  position: "absolute",
  zIndex: 10,
});
const Title = styled("h1", {
  color: "white",
  zIndex: 11,
});

export const MainImage = (props: MainImageProps) => {
  return (
    <StyledSection>
      <Title>qweqweqwe</Title>
      <StyledImage
        css={{
          backgroundImage: `url(${webpImage})`,
        }}
      />
    </StyledSection>
  );
};
