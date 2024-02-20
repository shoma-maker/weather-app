import React from "react";
import { useSelector } from "react-redux";

import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloudy,
  WiDayCloudyHigh,
  WiRainMix,
  WiHail,
  WiStormShowers,
  WiSnow,
  WiDust,
} from "react-icons/wi";
export const Icon = () => {
  const { weather } = useSelector((state) => state.weather);
  switch (weather.icon) {
    case "WiDaySunny":
      return <WiDaySunny size={60} />;
    case "WiDaySunnyOvercast":
      return <WiDaySunnyOvercast size={60} />;
    case "WiCloudy":
      return <WiCloudy size={60} />;
    case "WiDayCloudyHigh":
      return <WiDayCloudyHigh size={60} />;
    case "WiRainMix":
      return <WiRainMix size={60} />;
    case "WiHail":
      return <WiHail size={60} />;
    case "WiStormShowers":
      return <WiStormShowers size={60} />;
    case "WiSnow":
      return <WiSnow size={60} />;
    case "WiDust":
      return <WiDust size={60} />;
    default:
      return "";
  }
};
