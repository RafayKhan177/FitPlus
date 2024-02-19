import { ArrowRightIcon, Card, HStack, Heading, Icon, Image, Link, LinkText } from "@gluestack-ui/themed";
import { View, Text } from "react-native";

export default function App() {
  return (
    <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
      <Image
        mb="$6"
        h={240}
        width="$full"
        borderRadius="$md"
        source={{
          uri: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <Text
        fontSize="$sm"
        fontStyle="normal"
        fontFamily="$heading"
        fontWeight="$normal"
        lineHeight="$sm"
        mb="$2"
        sx={{
          color: "$textLight700",
          _dark: {
            color: "$textDark200",
          },
        }}
      >
        May 15, 2023
      </Text>
      <Heading size="md" fontFamily="$heading" mb="$4">
        The Power of Positive Thinking
      </Heading>
      <Link href="https://gluestack.io/" isExternal>
        <HStack alignItems="center">
          <LinkText
            size="sm"
            fontFamily="$heading"
            fontWeight="$semibold"
            color="$primary600"
            $dark-color="$primary300"
            textDecorationLine="none"
          >
            Read Blog
          </LinkText>
          <Icon
            as={ArrowRightIcon}
            size="sm"
            color="$primary600"
            mt="$0.5"
            ml="$0.5"
            $dark-color="$primary300"
          />
        </HStack>
      </Link>
    </Card>
  );
}
