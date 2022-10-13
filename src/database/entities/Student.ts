import crypto from "node:crypto";
import { client } from "..";

export class Student {
  public static tableName = "students";

  public id!: string;
  public name!: string;

  static async create(student: Omit<Student, "id">): Promise<Student> {
    const newStudent = new Student();
    Object.assign(newStudent, {
      ...student,
      id: crypto.randomUUID(),
    });

    await client.query(
      `INSERT INTO ${Student.tableName} (id, name) VALUES ($1, $2);`,
      [newStudent.id, newStudent.name],
    );

    return newStudent;
  }
}
