import { DataTypes, Model } from "sequelize";
import { sequelize } from "..";

export class Student extends Model {
  public name!: string;
}

Student.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "students",
  },
);
