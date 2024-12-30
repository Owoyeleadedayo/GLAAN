import Slider from "react-slick";
import { Box, Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import Story1 from "../../assets/Images/events1.png";
import Story2 from "../../assets/Images/events2.png";
import Story3 from "../../assets/Images/events3.png";
import Story5 from "../../assets/Images/events5.png";
import Story4 from "../../assets/Images/events4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const Events = () => {
  const images = [
    { image: Story1 },
    { image: Story2 },
    { image: Story3 },
    { image: Story5 },
    { image: Story4 },
  ];

  const sliderRef = React.useRef<Slider | null>(null);

  const [isMobile] = useMediaQuery("(max-width: 425px)");

  const settings = {
    focusOnSelect: true,
    slidesToShow: 2, 
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true, 
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      mx={"auto"}
      width="70%"
      height={"80%"}
      my={"50px"}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <Flex
            key={index}
            width="100%"
            height={{ base: "100%", md: "100%" }}
            px={{ base: "5px", md: "7px" }}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              width={"100%"}
              height={"100%"}
              objectFit="cover"
              borderRadius={"10px"}
            />
          </Flex>
        ))}
      </Slider>

      {!isMobile && (
        <Flex mt="60px" gap="30px" justifyContent="center">
          <Button onClick={handlePrev} bgColor="#FF3D00" variant="none">
            <FaArrowLeft color="white" />
          </Button>
          <Button onClick={handleNext} bgColor="#FF3D00" variant="none">
            <FaArrowRight color="white" />
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Events;
