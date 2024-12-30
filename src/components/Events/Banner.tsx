import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Events from "./Events";
import EV from "../../assets/Images/evve.png";
import ARR from "../../assets/Images/arabian.png";
import FIN from "../../assets/Images/finance.png";
import last from "../../assets/Images/last.png";
import Footer from "../Footer";
import UpcomingEvents from "./UpcomingEvents";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Flex width={"100%"} height={"100%"} bg={"#FFFFFF"} direction={"column"}>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={{ base: "20px", md: "30px", lg: "30px", xl: "30px" }}
          direction={"column"}
          gap={"10px"}
        >
          <Flex mb={{ base: "0px", md: "0px" }} px={{ base: "20px" }}>
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={{ base: "24px", md: "35px" }}
              color={"#515151"}
            >
              Upcoming Cultural Events
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Flex
              width={"100%"}
              height={"100%"}
              bgColor={"#FFFFFF"}
              py={{ base: "40px", md: "50px" }}
              px={{ base: "20px", md: "30px", lg: "30px", xl: "100px" }}
              gap={"20px"}
              direction={{ base: "column", md: "row" }}
            >
              <Flex>
                <Box
                  width={{ base: "100%", md: "214px" }}
                  height={"280px"}
                  position="relative"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <Image
                    src={EV}
                    width={"100%"}
                    height={"100%"}
                    alt="events"
                    objectFit={"cover"}
                  />
                  <Button
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    bgColor="#FF3D00"
                    color="white"
                    borderRadius="8px"
                    px="14px"
                    py="6px"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={600}
                    _hover={{ bgColor: "#e63300" }}
                  >
                    Register
                  </Button>
                </Box>
              </Flex>
              <Flex
                width={{ base: "100%", md: "100%", xl: "100%" }}
                direction={"column"}
                gap={"5px"}
              >
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ base: "12px", md: "14px", lg: "15px" }}
                  fontWeight={600}
                  color={"#515151"}
                >
                  Latin-African Cultural Festival
                </Text>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Date/Time:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Saturday, November 4, 2024 | 2:00 PM – 8:00 PM
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Location:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Community Park, Lagos, Nigeria
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Description:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Experience a vibrant celebration of Latin and African music,
                    food, and art. The Latin-African Cultural Festival brings
                    together performers, chefs, and artists from both regions to
                    celebrate their shared heritage. Join us for an
                    unforgettable day of cultural exchange, performances, and
                    networking
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Key Highlights:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Live Performances, Food Stalls, Art Exhibitions, Cultural
                    Exchange
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              width={"100%"}
              height={"100%"}
              bgColor={"#D9D9D9"}
              py={{ base: "40px", md: "50px" }}
              px={{ base: "20px", md: "30px", lg: "30px", xl: "100px" }}
              gap={"20px"}
              direction={{ base: "column", md: "row" }}
            >
              <Flex>
                <Box
                  width={{ base: "100%", md: "214px" }}
                  height={"270px"}
                  position="relative"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <Image
                    src={ARR}
                    width={"100%"}
                    height={"100%"}
                    alt="events"
                    objectFit={"cover"}
                  />
                  <Button
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    bgColor="#FF3D00"
                    color="white"
                    borderRadius="8px"
                    px="14px"
                    py="6px"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={600}
                    _hover={{ bgColor: "#e63300" }}
                  >
                    Register
                  </Button>
                </Box>
              </Flex>

              <Flex
                width={{ base: "100%", md: "100%", xl: "100%" }}
                direction={"column"}
                gap={"5px"}
              >
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ base: "12px", md: "14px", lg: "15px" }}
                  fontWeight={600}
                  color={"#515151"}
                >
                  Arabian Heritage Week
                </Text>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Date/Time:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Monday, November 13 – Sunday, November 19, 2024 | Various
                    Times
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Location:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Multiple Locations, Dubai, UAE
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Description:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Join us for a week-long celebration of Arabian history,
                    culture, and heritage. Featuring traditional performances,
                    heritage tours, and educational workshops, Arabian Heritage
                    Week provides a deep dive into the rich traditions of the
                    Arabian Peninsula.
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Key Highlights:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Heritage Tours, Traditional Dance, Cultural Workshops
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              width={"100%"}
              height={"100%"}
              bgColor={"#FFFFFF"}
              py={{ base: "40px", md: "50px" }}
              px={{ base: "20px", md: "30px", lg: "30px", xl: "100px" }}
              gap={"20px"}
              direction={{ base: "column", md: "row" }}
            >
              <Flex>
                <Box
                  width={{ base: "100%", md: "214px" }}
                  height={"270px"}
                  position="relative"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <Image
                    src={FIN}
                    width={"100%"}
                    height={"100%"}
                    alt="events"
                    objectFit={"cover"}
                  />
                  <Button
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    bgColor="#FF3D00"
                    color="white"
                    borderRadius="8px"
                    px="14px"
                    py="6px"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={600}
                    _hover={{ bgColor: "#e63300" }}
                  >
                    Register
                  </Button>
                </Box>
              </Flex>
              <Flex
                width={{ base: "100%", md: "100%", xl: "100%" }}
                direction={"column"}
                gap={"5px"}
              >
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ base: "12px", md: "14px", lg: "15px" }}
                  fontWeight={600}
                  color={"#515151"}
                >
                  Financial Empowerment Workshop
                </Text>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Date/Time:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Wednesday, November 29, 2024 | 10:00 AM – 2:00 PM
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Location:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Virtual Event (Zoom)
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Description:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    This workshop focuses on providing financial literacy and
                    investment education to our community members. Learn the
                    essentials of managing personal finances, growing your
                    wealth, and making smart investment decisions to empower
                    your financial future.
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Key Highlights:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Investment Strategies, Personal Finance, Q&A Session with
                    Experts
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              width={"100%"}
              height={"100%"}
              bgColor={"#D9D9D9"}
              py={{ base: "40px", md: "50px" }}
              px={{ base: "20px", md: "30px", lg: "30px", xl: "100px" }}
              gap={"20px"}
              direction={{ base: "column", md: "row" }}
            >
              <Flex>
                <Box
                  width={{ base: "100%", md: "214px" }}
                  height={"270px"}
                  position="relative"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <Image
                    src={last}
                    width={"100%"}
                    height={"100%"}
                    alt="events"
                    objectFit={"cover"}
                  />
                  <Button
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    bgColor="#FF3D00"
                    color="white"
                    borderRadius="8px"
                    px="14px"
                    py="6px"
                    fontSize={{ base: "14px", md: "16px" }}
                    fontWeight={600}
                    _hover={{ bgColor: "#e63300" }}
                  >
                    Register
                  </Button>
                </Box>
              </Flex>

              <Flex
                width={{ base: "100%", md: "100%", xl: "100%" }}
                direction={"column"}
                gap={"5px"}
              >
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ base: "12px", md: "14px", lg: "15px" }}
                  fontWeight={600}
                  color={"#515151"}
                >
                  Educational Webinar on Shared Histories
                </Text>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Date/Time:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Thursday, December 7, 2024 | 5:00 PM – 6:30 PM
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Location:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Virtual Event (Zoom)
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Description:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Join our webinar to explore the deep historical connections
                    between Latin, African, and Arabian cultures. Our panel of
                    historians will dive into the shared histories of migration,
                    trade, and cultural exchange that have shaped these regions.
                  </Text>
                </Flex>
                <Flex direction={"column"}>
                  <UnorderedList>
                    <ListItem
                      fontFamily={"Poppins"}
                      fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                      fontWeight={600}
                      color={"#515151"}
                    >
                      Key Highlights:
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                    fontWeight={400}
                    color={"#515151"}
                  >
                    Panel Discussion, Q&A Session, Historical Insights
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Events />
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default Banner;
