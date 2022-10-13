import { client } from ".";
import { Student } from "./entities/Student";

export async function setupDatabase() {
  await client.connect();

  await client.query(`CREATE TABLE IF NOT EXISTS ${Student.tableName} (
    id varchar(36) PRIMARY KEY,
    name varchar(255) UNIQUE NOT NULL
  );`);
}
