import { Link } from "@chakra-ui/layout";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface LinkItemProps {
  to: string;
  iconComponent: IconType;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ to, iconComponent: IconComponent, label }) => {
  return (
    <Link _focus={{ border: "none", color: "var(--chakra-colors-twitter-600)" }} _hover={{ backgroundColor: "rgba(26,148,218,0.25)" }} _selected={{ border: "none" }} as={ReactRouterLink} borderRadius="2em" padding="0.40em" to={to}>
      <Stack alignItems="center" direction="row" spacing={4}>
        <Icon as={IconComponent} />
        <Text fontSize="lg" fontWeight="bold">
          {label}
        </Text>
      </Stack>
    </Link>
  );
};

export default LinkItem;
