import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DBdatasource',
  connector: 'postgresql',
  url: '',
  host: 'fanny.db.elephantsql.com',
  port: 5432,
  user: 'vkhxqqyk',
  password: 'vMjvcoH0tMURzCaDBh3rOs47uSnP229M',
  database: 'vkhxqqyk'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DBdatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DBdatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DBdatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
