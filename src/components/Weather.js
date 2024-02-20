import React from "react";
import { ImLocation } from "react-icons/im";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Icon } from "./Icon";

const Weather = () => {
  const { weather } = useSelector((state) => state.weather);
  return (
    <Box h={`calc(100vh - ${80}px)`}>
      <Box position="relative" h="100%" p={5} width="100%" maxWidth="1050px" marginX="auto" textAlign="right">
        <Box
          position="absolute"
          bottom="50px"
          right="30px"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          padding="30px"
          borderRadius="5px"
        >
          <Stack spacing={1} marginBottom="50px">
            <Flex justifyContent="flex-end">
              <Icon />
            </Flex>
            <Text as="b" fontSize="60px">
              {weather.weather}
            </Text>
            <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
              <ImLocation size={20} style={{ marginRight: "10px" }} />
              <Text as="b" fontSize="20px">
                {weather.city}
              </Text>
            </Flex>
            <Text as="b"> {weather.temp}℃</Text>
          </Stack>
          <Flex flexDirection="row" justifyContent="space-between" w="170px">
            <Box>
              <Text>最低気温</Text>
              <Text as="b"> {weather.temp_min}℃</Text>
            </Box>
            <Box>
              <Text>最高気温</Text>
              <Text as="b"> {weather.temp_max}℃</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
