import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from "config";

const dbConfig = config.get("db");

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migration/*.migration.ts'],
  cli: {
    migrationsDir: "migration"
  }
}
