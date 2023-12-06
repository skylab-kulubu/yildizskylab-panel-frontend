export interface Team {
  _id: string;
  name: string;
  description: string;
  members: TeamMember[];
  projects: Project[];
  photoUrl: string;
  requests: boolean;
  hidden: boolean;
  numberOfMembers: number;
}

export interface TeamMember {
  role: string;
  ref: Member;
}

export type Member = {
  _id: string;
  name: string;
  lastName: string;
  role: string;
  teams?: Team[];
  applications?: string[];
  email: string;
  projects?: string[];
  telephoneNumber: boolean;
  department: string;
  university: string;
  active: boolean;
};

export interface Project {
  _id: string;
  projectName: string;
  description: string;
  teams?: Team[];
  date?: string;
  participants?: Member[];
  status?: string;
  issuedAt?: string;
  resolvedAt?: string;
  project?: Project;
}

export interface Event {
  _id: string;
  team?: string;
  date?: string;
  description: string;
  eventName: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
