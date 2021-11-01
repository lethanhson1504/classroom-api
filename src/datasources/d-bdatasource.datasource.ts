import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DBdatasource',
  connector: 'postgresql',
  url: 'postgres://ztybisanhtxeqh:8e512a43c69934ba3e1732a67d1b70136e58fc8218bcb26a4caa92942e339b46@ec2-18-213-179-70.compute-1.amazonaws.com:5432/df10ldbanqt1k1',
  // host: 'localhost',
  // port: 5432,
  // user: 'postgres',
  // password: 'postgres',
  // database: 'btcn_classroom_dev'
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
