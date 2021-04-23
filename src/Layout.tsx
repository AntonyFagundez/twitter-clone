import { Button, IconButton } from "@chakra-ui/button";
import { Box, Container, Stack } from "@chakra-ui/layout";
import React from "react";
import { FaTwitter, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaPollH } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal, HiOutlineUser } from "react-icons/hi";
import { GiBirdHouse } from "react-icons/gi";
import { Link as ReactRouterLink } from "react-router-dom";

import LinkItem from "./components/LinkItem";

const Layout: React.FC = ({ children }) => {
  return (
    <Container alignSelf="center" height="100%" maxWidth="container.md">
      <Stack direction="row" height="100%">
        <Stack borderRightColor="gray.700" borderRightWidth={1} paddingX={9} paddingY={4} spacing={4}>
          <Stack alignItems="center" direction="row" spacing={4}>
            <IconButton aria-label="Go Home" as={ReactRouterLink} bg="transparent" borderRadius="50%" icon={<FaTwitter />} to="/" />
          </Stack>
          <LinkItem iconComponent={GiBirdHouse} label="Inicio" to="/" />
          <LinkItem iconComponent={FaHashtag} label="Explorar" to="/explore" />
          <LinkItem iconComponent={FaRegBell} label="Notificaciones" to="/notifications" />
          <LinkItem iconComponent={FaRegEnvelope} label="Mensajes" to="/messages" />
          <LinkItem iconComponent={FaRegBookmark} label="Guardados" to="/saved" />
          <LinkItem iconComponent={FaPollH} label="Listas" to="/lists" />
          <LinkItem iconComponent={HiOutlineUser} label="Perfil" to="/profile" />
          <LinkItem iconComponent={HiOutlineDotsCircleHorizontal} label="Más opciones" to="/more" />
          <Button _hover={{ filter: "brightness(90%)" }} bg="twitter.600" borderRadius="2em" color="white">
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;
