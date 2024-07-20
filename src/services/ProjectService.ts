import { CreateProjectDto, Project, UpdateProjectDto } from "@/types/project";
import { Response } from "@/types/response";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL + '/projects',
    // withCredentials: true,
});

export default class ProjectService {
    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}`,
        };
    }

    async createProject(createProjectDto: CreateProjectDto) {
        const response = await axiosInstance.post('/createProject', createProjectDto, { headers: ProjectService.getHeaders() });

        return response.data;
    }

    async getAllProjects() {
        const response = await axiosInstance.get('/getAllProjects', { headers: ProjectService.getHeaders() });

        return response.data;
    }

    async getProjectById(id:bigint): Promise<Response<Project>> {
        const response = await axiosInstance.get(`/getProjectById/${id}`, { headers: ProjectService.getHeaders() });

        return response.data;
    }

    async updateProject(id:bigint, project: UpdateProjectDto) {
        const response = await axiosInstance.put(`/updateProject/${id}`, project, { headers: ProjectService.getHeaders() });

        return response.data;
    }

    async deleteProject(id:bigint) {
        const response = await axiosInstance.delete(`/deleteProject/${id}`, { headers: ProjectService.getHeaders() });

        return response.data;
    }

    


}