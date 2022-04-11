import React from "react";
import { useMatch, useResolvedPath } from "react-router-dom";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled } from "../../theme/index.js";
import { violet, mauve, indigo, purple, blackA } from "@radix-ui/colors";

const StyledRoot = styled(NavigationMenuPrimitive.Root, {
  position: "fixed",
  justifySelf: "center",
  alignSelf: "center",
  paddingTop: "1rem",
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px black`,
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: violet.violet11,
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: 15,
  lineHeight: 1,
  transitionDuration: "150ms",
  transitionProperty: "background-color",
  transitionTimingFunction: "ease-in",
  "&[data-active]": {
    backgroundColor: violet.violet3,
  },
  "&:hover": {
    backgroundColor: violet.violet4,
  },
});

const CustomLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const isActive = React.useMemo(() => Boolean(match), []);
  return (
    <NavigationMenuPrimitive.Item>
      <StyledTrigger active={isActive} href={to}>
        {children}
      </StyledTrigger>
    </NavigationMenuPrimitive.Item>
  );
};

export const NavBar = React.memo(() => {
  return (
    <StyledRoot>
      <StyledList>
        <CustomLink to={"/home"}>Home</CustomLink>

        <CustomLink to={"/talks"}>Talks</CustomLink>

        <CustomLink to={"/projects"}>Projects</CustomLink>

        <NavigationMenuPrimitive.Indicator />
      </StyledList>

      {/* <NavigationMenuPrimitive.Viewport /> */}
    </StyledRoot>
  );
});
