import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/";
import { Helmet, HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>WeatherMapApp | Sato</title>

        <meta property="og:title" content="WeatherMapApp | Sato" />
        <meta property="og:image" content="https://weather-map-app-3ebd4.web.app/weather_map_app.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="【React / chakra UI / Redux】お天気アプリ" />
        <meta property="og:site_name" content="WeatherMapApp | Sato" />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
