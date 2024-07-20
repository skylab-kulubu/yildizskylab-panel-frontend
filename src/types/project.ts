import { Team } from "./team";
import { User } from "./user";

export interface Project {
  ID: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    name: string;
    description: string;
    team: Team;
    members: User[];
  }

  export interface CreateProjectDto {
    name: string;
    description: string;
    //teamId: bigint;
  }

  export interface UpdateProjectDto {
    name: string;
    description: string;
    teamId: bigint;
  }