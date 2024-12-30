import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const Tag = () => {
  return (
    <Flex
      width="100%"
      height="30px"
      bgColor="#d9d9d9"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="sticky"
      top={{ base: "40px", md: "60px", lg: "80px" }}
      zIndex={2}
    >
      <MotionFlex
        display="inline-flex"
        gap="200px"
        whiteSpace="nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        <Flex gap="3px">
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="#FF3D00"
          >
            UPCOMING EVENTS:
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="grey"
          >
            Latin-African Cultural Festival
          </Text>
        </Flex>

        <Flex gap="5px">
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="#FF3D00"
          >
            UPCOMING EVENTS:
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="grey"
          >
            Latin-African Cultural Festival
          </Text>
        </Flex>
        <Flex gap="5px">
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="#FF3D00"
          >
            UPCOMING EVENTS:
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="grey"
          >
            Latin-African Cultural Festival
          </Text>
        </Flex>
        <Flex gap="5px">
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="#FF3D00"
          >
            UPCOMING EVENTS:
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="17px"
            fontWeight={600}
            color="grey"
          >
            Latin-African Cultural Festival
          </Text>
        </Flex>
      </MotionFlex>
    </Flex>
  );
};

export default Tag;
