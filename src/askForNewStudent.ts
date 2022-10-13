import { ask } from "./ask";
import { Student } from "./database/models/Student";

export async function askForNewStudent() {
  const newStudentName = await ask("Qual é o nome do aluno? ");

  try {
    await Student.create({
      name: newStudentName,
    });

    console.log(`Aluno(a) ${newStudentName} inserido no banco de dados.`);

    const shouldAskAgain = await ask("Deseja inserir outro aluno? y/n ");

    if (shouldAskAgain.match(/^y$/i)) {
      await askForNewStudent();
    }
  } catch (error: any) {
    if (
      error.name === "SequelizeUniqueConstraintError" &&
      error.original.code === "23505"
    ) {
      console.log(`Aluno(a) ${newStudentName} já está no banco de dados.`);
      await askForNewStudent();
    } else {
      throw error;
    }
  }
}
