import { Application } from "./application";
import { Project } from "./project";
import { Team } from "./team";

export interface User {
    ID: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    name: string;
    email: string;
    password: string;
    telephoneNumber: string;
    university: string;
    department: string;
    dateOfBirth: Date;
    role: string;
    active: boolean;
    applications: Application[];
    teams: Team[];
    projects: Project[];
  }

