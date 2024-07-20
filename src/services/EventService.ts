import { CreateEventDto, Event } from "@/types/event";
import { Response } from "@/types/response";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL + '/events',
    // withCredentials: true,
});

export default class EventService {
    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}`,
        };
    }

    async createEvent(createEventDto: CreateEventDto) {
        const response = await axiosInstance.post('/createEvent', createEventDto, { headers: EventService.getHeaders() });

        return response.data;
    }

    async getAllEvents():Promise<Response<Event[]>> {
        const response = await axiosInstance.get('/getAllEvents', { headers: EventService.getHeaders() });

        return response.data;
    }

    async getEventById(id:bigint): Promise<Response<Event>> {
        const response = await axiosInstance.get(`/getEventById/${id}`, { headers: EventService.getHeaders() });

        return response.data;
    }

}