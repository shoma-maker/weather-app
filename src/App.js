import {
  ChakraProvider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/weather";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { weather, status } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(fetchWeather("tokyo"));
  }, []);
  useEffect(() => {
    status === "failed" && setShowModal(true);
  }, [status]);

  return (
    <ChakraProvider>
      <Box backgroundImage={`url('/images/${weather.img_path}.jpg')`} backgroundSize="cover">
        <Header />
        <Weather />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalOverlay />
          <ModalContent className="custom-modal">
            <ModalHeader>エラー</ModalHeader>
            <ModalBody>入力した都市のお天気情報を取得できませんでした。</ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowModal(false)}>閉じる</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default App;
