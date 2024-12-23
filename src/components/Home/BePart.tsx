import { Button, Flex, Text } from "@chakra-ui/react";

const BePart = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"280px"}
        bgColor={"#E0E0E0"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"30px"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex>
          <Text
            textAlign={"center"}
            fontFamily={"Poppins"}
            fontSize={"24px"}
            fontWeight={600}
          >
            Join Us and Be Part of the Movement
          </Text>
        </Flex>
        <Flex
          width={{ base: "100%", md: "100%", lg: "600px", xl: "600px" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"column"}
          gap={"15px"}
        >
          <Flex>
            <Text
              textAlign={"center"}
              fontFamily={"Poppins"}
              fontSize={"18x"}
              fontWeight={400}
              color={"#515151"}
            >
              Whether you’re interested in cultural events, educational
              programs, or investing in community growth, there’s a place for
              you in our vibrant community.
            </Text>
          </Flex>
          <Flex>
            <Button
              variant={"none"}
              bg={"#FF3D00"}
              borderRadius={"8px"}
              width={""}
              fontFamily={"Poppins"}
              fontSize={"16px"}
              fontWeight={500}
              color={"#FFFFFF"}
            >
              Join Us
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default BePart;
