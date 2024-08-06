import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./user/user-model";
import { Quest } from "./quest/quest-model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "new_password",
  entities: [Quest, User],
  migrations: [".migrations/*.ts"],
});
