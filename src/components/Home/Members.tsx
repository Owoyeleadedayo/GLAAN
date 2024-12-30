import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import MMM from "../../assets/Images/Ellipse.png";
import P1 from "../../assets/Images/people8.jpg";
import P2 from "../../assets/Images/people2.jpg";
import P3 from "../../assets/Images/people6.jpg";
import P4 from "../../assets/Images/people4.jpg";
import P5 from "../../assets/Images/people7.jpg";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const MotionFlex = motion(Flex);

const Members = () => {
  const member = [
    {
      comment:
        "This community has given me the opportunity to reconnect with my roots and discover new cultural ties. The events and programs are life-changing.",
      image: MMM,
      name: "Maria",
      title: "Event Participant",
    },
    {
      comment:
        "I’ve learned so much about financial empowerment through their workshops. I’m now more confident about my future.",
      image: P1,
      name: "Ahmed",
      title: "Financial Workshop Attendee",
    },
    {
      comment:
        "Being part of this network has been a wonderful experience of cultural celebration and collaboration.",
      image: P2,
      name: "Kwame",
      title: "Community Member",
    },
    {
      comment:
        "I’ve learned so much about financial empowerment through their workshops. I’m now more confident about my future.",
      image: P3,
      name: "Ahmed",
      title: "Financial Workshop Attendee",
    },
    {
      comment:
        "Being part of this network has been a wonderful experience of cultural celebration and collaboration.",
      image: P4,
      name: "Kwame",
      title: "Community Member",
    },
    {
      comment:
        "I’ve learned so much about financial empowerment through their workshops. I’m now more confident about my future.",
      image: P5,
      name: "Ahmed",
      title: "Financial Workshop Attendee",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Dynamically set itemsPerPage based on screen size
  const itemsPerPage =
    useBreakpointValue({ base: 1, md: 2, lg: 2, xl: 3 }) || 3;
  const totalPages = Math.ceil(member.length / itemsPerPage);

  const paginatedMembers = member.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      bgColor={"#FFFFFF"}
      p="20px"
      justifyContent="center"
      alignItems="center"
      direction="column"
      my="50px"
    >
      <Flex mb="30px">
        <Text
          fontFamily="Poppins"
          fontSize="28px"
          fontWeight={700}
          color="#515151"
        >
          What Our Members Say
        </Text>
      </Flex>

      <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {paginatedMembers.map((item, index) => {
          const isNextTwo =
            index >= currentPage * itemsPerPage &&
            index < (currentPage + 2) * itemsPerPage;
          const animationOffset = isNextTwo ? 0 : direction === 1 ? 300 : -300;

          return (
            <MotionFlex
              key={index}
              initial={{ x: animationOffset, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: animationOffset * -1, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: isNextTwo ? 120 : 100,
                damping: isNextTwo ? 15 : 20,
              }}
              width={"340px"}
              height={"340px"}
              bgColor={"#F9E6E0"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderRadius={"8px"}
              p={"15px"}
              direction={"column"}
            >
              <Flex width={"100%"} height={"130px"}>
                <Text
                  textAlign={"center"}
                  fontFamily={"Poppins"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  {item.comment}
                </Text>
              </Flex>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                gap={"10px"}
              >
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Box width={"80px"} height={"80px"}>
                    <Image
                      src={item.image}
                      width={"100%"}
                      height={"100%"}
                      alt="members"
                      objectFit={"cover"}
                      borderRadius={"50%"}
                    />
                  </Box>
                </Flex>
                <Flex>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"18px"}
                    fontWeight={500}
                    color={"#515151"}
                  >
                    {item.name}
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"16px"}
                    fontWeight={300}
                    color={"#515151"}
                  >
                    {item.title}
                  </Text>
                </Flex>
              </Flex>
            </MotionFlex>
          );
        })}
      </Flex>

      <Flex mt="60px" gap="30px" justifyContent="center">
        <Button
          onClick={handlePrev}
          isDisabled={currentPage === 0}
          bgColor="#FF3D00"
          variant="none"
          width={"50px"}
          height={"40px"}
          borderRadius={"8px"}
        >
          <FaArrowLeft color="white" />
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages - 1}
          bgColor="#FF3D00"
          variant="none"
          width={"50px"}
          height={"40px"}
          borderRadius={"8px"}
        >
          <FaArrowRight color="white" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Members;
