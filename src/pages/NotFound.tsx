import { Button, Flex, Heading, Paragraph } from "components";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      flexGrow={1}
      rowGap={10}
    >
      <Heading tag="heading1">404 Not Found</Heading>
      <Paragraph>Looks like you've hit a page that doesn't exist.</Paragraph>
      <Button
        backgroundcolor="blue"
        onClick={() => navigate("/")}
        label="Let's go home"
      />
    </Flex>
  );
}
