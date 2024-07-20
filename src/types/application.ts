import { Team } from "./team";
import { User } from "./user";

export interface Application {
  ID: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    team: Team;
    user: User;
    name: string;
    description: string;
    status: boolean;
  }