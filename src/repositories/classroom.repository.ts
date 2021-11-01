import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DBdatasourceDataSource} from '../datasources';
import {Classroom, ClassroomRelations} from '../models';

export class ClassroomRepository extends DefaultCrudRepository<
  Classroom,
  typeof Classroom.prototype.id,
  ClassroomRelations
> {
  constructor(
    @inject('datasources.DBdatasource') dataSource: DBdatasourceDataSource,
  ) {
    super(Classroom, dataSource);
  }
}
