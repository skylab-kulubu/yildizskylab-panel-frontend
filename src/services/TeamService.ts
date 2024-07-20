import { Response } from '@/types/response';
import { CreateTeamDto, Team } from '@/types/team';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL + '/teams',
    // withCredentials: true,
});

export default class TeamService {

    static getHeaders() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
        return {
            Authorization: `Bearer ${token}`,
        };
    }

    async createTeam(createTeamDto: CreateTeamDto) {
        const response = await axiosInstance.post('/createTeam', createTeamDto, { headers: TeamService.getHeaders() });

        return response.data;
    }

    async getAllTeams():Promise<Response<Team[]>> {
        const response = await axiosInstance.get('/getAllTeams', { headers: TeamService.getHeaders() });

        return response.data;
    }

    async getTeamById(id: bigint): Promise<Team> {
        const response = await axiosInstance.get(`/getTeamById/${id}`, { headers: TeamService.getHeaders() });

        return response.data.data;
    }

    async updateTeam(id: bigint, team: Team) {
        const response = await axiosInstance.put(`/updateTeam/${id}`, team, { headers: TeamService.getHeaders() });

        return response.data;
    }

    async deleteTeam(id: bigint) {
        const response = await axiosInstance.delete(`/deleteTeam/${id}`, { headers: TeamService.getHeaders() });

        return response.data;
    }

    async applyToTeam(teamId: bigint) {
        const response = await axiosInstance.post(`/applyToTeam/${teamId}`, { headers: TeamService.getHeaders() });

        return response.data;
    }


}


