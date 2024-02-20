import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
  '/weather/fetchWeather',
  async (cityName) => {
    const API_ENDPOINT =
      'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(API_ENDPOINT, {
      params: {
        q: cityName,
        APPID: apiKey,
        units: 'metric',
        lang: 'ja',
      },
    });
    const weatherJa = {
      Thunderstorm: '雷雨',
      Drizzle: '霧雨',
      Rain: '雨',
      Snow: '雪',
      Atmosphere: '霧',
      Clear: '晴天',
      Clouds: '曇り',
      Mist: '霧',
      Smoke: 'スモッグ',
      Haze: '煙霧',
      Dust: 'ほこり',
      Fog: '濃霧',
      Sand: '砂嵐',
      Ash: '火山灰',
      Squall: '突風',
      Tornado: '竜巻',
    };
    const icon = {
      '01d': 'WiDaySunny',
      '01n': 'WiDaySunny',
      '02d': 'WiDaySunnyOvercast',
      '02n': 'WiDaySunnyOvercast',
      '03d': 'WiCloudy',
      '03n': 'WiCloudy',
      '04d': 'WiDayCloudyHigh',
      '04n': 'WiDayCloudyHigh',
      '09d': 'WiRainMix',
      '09n': 'WiRainMix',
      '10d': 'WiHail',
      '10n': 'WiHail',
      '11d': 'WiStormShowers',
      '11n': 'WiStormShowers',
      '13d': 'WiSnow',
      '13n': 'WiSnow',
      '50d': 'WiDust',
      '50n': 'WiDust',
    };
    return {
      city: response.data.name,
      img_path: response.data.weather[0].main,
      weather: weatherJa[response.data.weather[0].main],
      description: response.data.weather[0].description,
      icon: icon[response.data.weather[0].icon],
      temp: response.data.main.temp, // 現在の温度
      temp_min: response.data.main.temp_min, // 今日の最低気温
      temp_max: response.data.main.temp_max, // 今日の最高気温
    };
  }
);

// Stateの初期状態
const initialState = {
  weather: {},
  status: 'idle',
};

// Sliceを生成する
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(
      fetchWeather.fulfilled,
      (state, action) => {
        state.weather = action.payload;
        state.status = 'succeeded';
      }
    );
    builder.addCase(
      fetchWeather.rejected,
      (state, action) => {
        state.status = 'failed';
      }
    );
  },
});

// Reducerをエクスポートする
export default weatherSlice.reducer;
