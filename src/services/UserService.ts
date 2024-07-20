import { User } from "@/types/user";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL+"/users",
   // withCredentials: true,
    });

    export default class UserService {

        static getHeaders() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
            return {
                Authorization: `Bearer ${token}`,
            };
        }


        async getAllUsers(): Promise<User[]>{
            const response = await axiosInstance.get("/getAllUsers", { headers: UserService.getHeaders() });

            return response.data.data;
        }

        async getUserById(id: bigint): Promise<User> {
            const response = await axiosInstance.get(`/getUserById/${id}`, { headers: UserService.getHeaders() });

            return response.data;
        }

        async updateUser(id:bigint, user: User) {
            const response = await axiosInstance.put(`/updateUser/${id}`, user, { headers: UserService.getHeaders() });

            return response.data;
        }

        async deleteUser(id: bigint) {
            const response = await axiosInstance.delete(`/deleteUser/${id}`, { headers: UserService.getHeaders() });

            return response.data;
        }



    }