export interface Event {
  ID: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    title: string;
    description: string;
    date: Date;
    time: Date;
    place: string;
  }

export interface CreateEventDto {
    title: string;
    description: string;
    date: Date;
    time: string;
    place: string;
  }