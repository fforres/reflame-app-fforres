import React from "react";
import {
  useMatch,
  useResolvedPath,
  Link as RouterLink,
} from "react-router-dom";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled } from "../../theme/index.js";
import { violet, mauve, indigo, purple, blackA } from "@radix-ui/colors";
import { motion } from "framer-motion";

const animation = {
  transitionDuration: "150ms",
  transitionProperty: "background-color",
  transitionTimingFunction: "ease-in",
};
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
  padding: 6,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px black`,
  gap: 4,
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

const StyledMenuItem = styled(NavigationMenuPrimitive.Item, {
  position: "relative",
});

const StyledTrigger = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  ...animation,
  "&:hover+div": {
    backgroundColor: violet.violet4,
  },
});

const StyledMenuItemBackground = styled(motion.div, {
  ...itemStyles,
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 0,
  backgroundColor: violet.violet3,
  cursor: "pointer",
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
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const isActive = React.useMemo(() => Boolean(match), []);
  return (
    <StyledMenuItem id={to}>
      <StyledTrigger active={isActive} asChild>
        <RouterLink to={to}>{children}</RouterLink>
      </StyledTrigger>
      {match && <StyledMenuItemBackground layoutId="navigation-background" />}
    </StyledMenuItem>
  );
};

export const NavBar = React.memo(() => {
  return (
    <StyledRoot>
      <StyledList>
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/talks"}>Talks</CustomLink>
        <CustomLink to={"/projects"}>Projects</CustomLink>
        <NavigationMenuPrimitive.Indicator />
      </StyledList>

      {/* <NavigationMenuPrimitive.Viewport /> */}
    </StyledRoot>
  );
});
