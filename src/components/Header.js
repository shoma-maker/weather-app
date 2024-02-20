import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Input, Button, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { ImLocation, ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../store/weather";

const Header = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("tokyo"));
  }, []);
  return (
    <Box p={5} maxWidth="550px" marginX="auto" position="relative">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <InputGroup width={`calc(100% - ${90}px)`} bg="white" borderRadius="6px">
          <InputLeftElement pointerEvents="none" children={<Icon as={ImLocation} color="gray.300" />} />
          <Input
            type="text"
            value={city}
            placeholder="例 tokyo"
            onChange={(event) => {
              const inputText = event.target.value;
              if (!/^[0-9a-zA-Z]+$/.test(inputText) && inputText !== "") {
                setError(true);
              } else {
                setError(false);
              }
              setCity(inputText);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                if (city === "") return;
                if (!/^[0-9a-zA-Z]+$/.test(city)) return;
                dispatch(fetchWeather(city));
              }
            }}
          />
        </InputGroup>
        <Button
          size="sm"
          fontSize="sm"
          leftIcon={<Icon as={ImSearch} />}
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            if (city === "") return;
            if (!/^[0-9a-zA-Z]+$/.test(city)) return;
            dispatch(fetchWeather(city));
          }}
        >
          検索
        </Button>
      </Flex>
      {error && (
        <Box
          position="absolute"
          bottom="-15px"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          padding="5px 10px"
          borderRadius="5px"
          display="inline-block"
        >
          <Text fontSize="13px">半角英数字で入力してください</Text>
        </Box>
      )}
    </Box>
  );
};

export default Header;
