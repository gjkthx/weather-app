import axios from "axios";

const API_KEY = "e033658b0b56f2de8ce814109a508ef2";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},US`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}