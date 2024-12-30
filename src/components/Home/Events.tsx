import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Event from "../../assets/Images/evve.png";
import ARR from "../../assets/Images/arabian.png";
import FIN from "../../assets/Images/finance.png";
import last from "../../assets/Images/last.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MotionFlex = motion(Flex);

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
    const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Latin-African Cultural Festival",
      image: Event,
      date: "Mar 20th",
    },
    { id: 2, title: "Arabian Heritage Week", image: ARR, date: "Apr 14th" },
    {
      id: 3,
      title: "Financial Empowerment Workshop",
      image: FIN,
      date: "May 24th",
    },
    {
      id: 4,
      title: "Educational Webinar on Shared Histories",
      image: last,
      date: "Jun 14th",
    },
  ];

  const itemsPerPage = useBreakpointValue({ base: 1, md: 2,  }) || 2;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const paginatedEvents = events.slice(
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
      direction="column"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="#E0E0E0"
      pt="50px"
      pb={'80px'}
      px={'20px'}
    >
      <Flex my="30px">
        <Text
          fontFamily="Poppins"
          fontSize="28px"
          fontWeight={700}
          color="#515151"
        >
          Upcoming Cultural Events
        </Text>
      </Flex>

      <Flex
        width="100%"
        maxWidth="1200px"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="20px"
        overflow="hidden"
        position="relative"
      >
        {paginatedEvents.map((event, index) => {
          const isNextTwo = index >= currentPage && index < currentPage + 2;
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
              width={{ base: "100%", md: "300px", lg: "466px" }}
              height="350px"
              bgColor="#FFFFFF"
              direction="column"
              gap="15px"
              borderRadius="8px"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
              position="relative"
              overflow="hidden"
              cursor={"pointer"}
              onClick={() => navigate("/events")}
            >
              <Text
                position="absolute"
                top="5px"
                right="7px"
                bgColor="#FF3D00"
                color="#FFFFFF"
                px="10px"
                py="5px"
                borderRadius="4px"
                fontWeight="600"
                fontSize="14px"
                zIndex={1}
              >
                {event.date}
              </Text>

              {/* Image */}
              <Box width="100%" height="280px" borderRadius="8px 8px 0 0">
                <Image
                  src={event.image}
                  width="100%"
                  height="100%"
                  alt={event.title}
                  objectFit="cover"
                  borderTopRadius="8px"
                />
              </Box>

              <Text textAlign="center" fontWeight="600">
                {event.title}
              </Text>
            </MotionFlex>
          );
        })}
      </Flex>

      <Flex mt="60px" gap="30px">
        <Button
          onClick={handlePrev}
          isDisabled={currentPage === 0}
          bgColor="#FF3D00"
          variant="none"
        >
          <FaArrowLeft color="white" />
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages - 1}
          bgColor="#FF3D00"
          variant="none"
        >
          <FaArrowRight color="white" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Events;
