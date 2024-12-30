import { Flex, Input, Text } from "@chakra-ui/react";

const UpcomingEvents = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"280px"}
        bgColor={"#E0E0E0"}
        justifyContent={"center"}
        alignItems={"center"}
        py={{ base: "180px", md: "150px", lg: "150px", xl: "100px" }}
        px={"20px"}
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
            Stay Updated on Upcoming Events
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
              Don’t miss out on the latest news, events, and programs from our
              community. Subscribe to our newsletter for regular updates.
            </Text>
          </Flex>
          <Flex position="relative" width={{ base: "100%", md: "300px" }}>
            <Input
              variant="none"
              placeholder="Enter Email Address"
              width="380px"
              height="40px"
              borderRadius={"8px"}
              px={"10px"}
              fontFamily="Poppins"
              fontSize="14px"
              fontWeight={500}
              color="#000000"
              bgColor="#FFFFFF"
              borderRightRadius={"8px"}
              paddingRight="100px"
            />

            <Flex
              border="1px solid red"
              px="12px"
              py="8px"
              borderRadius="8px"
              position="absolute"
              right="0px"
              top="50%"
              transform="translateY(-50%)"
              bgColor="#FF3D00"
              cursor="pointer"
            >
              <Text
                fontSize="14px"
                fontWeight={500}
                color="#FFFFFF"
                textAlign="center"
              >
                Subscribe
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default UpcomingEvents;
