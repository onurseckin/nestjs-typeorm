import { DataSource } from 'typeorm';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { CoffeeRefactor1703493080752 } from './src/migrations/1703493080752-CoffeeRefactor';
import { SchemaSync1703495019113 } from 'src/migrations/1703495019113-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1703493080752, SchemaSync1703495019113],
});
