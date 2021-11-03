import {Entity, model, property} from '@loopback/repository';

@model()
export class Classroom extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  part: string;

  @property({
    type: 'string',
  })
  topic: string;

  @property({
    type: 'string',
  })
  room: string;


  constructor(data?: Partial<Classroom>) {
    super(data);
  }
}

export interface ClassroomRelations {
  // describe navigational properties here
}

export type ClassroomWithRelations = Classroom & ClassroomRelations;
