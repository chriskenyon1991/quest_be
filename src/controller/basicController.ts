import { AppDataSource } from "../data-source";
import { Quest } from "../quest/quest-model";
import { Catagory } from "../quest/quest-type";

export const getAll = async (entity: any, req: any, table: string) => {
  let query = AppDataSource.getRepository(entity).createQueryBuilder("user");

  if (Object.keys(req)) {
    const keys = Object.keys(req);
    keys.forEach((key) => {
      query = query.where(`${table}.${key} = :${key}`, {
        [key]: req[key],
      });
    });
  }
  const newUser = await query.execute();
  return newUser;
};

export const get = async (entity: any, id, table: string) => {
  const result = await AppDataSource.getRepository(entity)
    .createQueryBuilder(table)
    .where(`${table}.id = :id`, { id: id })
    .execute();
  return result;
};

export const create = async (entity: any, data: Quest, table: string) => {
  console.log("in create", entity, data, table);

  let questData = data;

  const result = await AppDataSource.getRepository(entity)
    .createQueryBuilder(table)
    .insert()
    .into(entity)
    .values([questData])
    .execute();
  console.log(result);
  return result;
};

export const update = async (entity: any, id, data: any, table: string) => {
  const result = await AppDataSource.getRepository(entity)
    .createQueryBuilder(table)
    .update(entity)
    .set(data)
    .where("id = :id", { id: id })
    .execute();
  return result;
};
