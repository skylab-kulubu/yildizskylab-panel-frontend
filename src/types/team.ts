import { Project } from "./project";
import { User } from "./user";

export interface Team {
    ID: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    name: string;
    description: string;
    users: User[];
    projects: Project[];
    leader: User;
  }

  export interface CreateTeamDto {
    name: string;
    description: string;
  }