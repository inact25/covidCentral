import axios from "axios";
import {baseUrl} from "../config/Base";

export const getSummary = async () => {
    const res = await axios.get(`${baseUrl}totals`)
    return await res.data;
}

export const getStats = async () => {
    const res = await axios.get(`${baseUrl}report/totals?date-format=YYYY-MM-DD`)
    return res;
}

export const getAllData = async () => {
    const res = await axios.get(`${baseUrl}country/all`)
    return await res.data
}