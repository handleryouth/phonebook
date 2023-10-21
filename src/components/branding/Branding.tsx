import { useTheme } from "@emotion/react";
import { FaAtlas } from "react-icons/fa";
import { Flex } from "../flex";
import { Heading } from "../heading";

export default function Branding() {
  const theme = useTheme();
  return (
    <Flex columnGap={10} color="white" alignItems="center">
      <Heading tag="heading1" color="white">
        Contacts
      </Heading>

      <FaAtlas size={20} color={theme.colors.white} />
    </Flex>
  );
}
