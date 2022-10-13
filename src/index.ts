/**
 * Required External Modules
 */

import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { askForNewStudent } from "./askForNewStudent";
import { setupDatabase } from "./database/setupDatabase";

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  try {
    await setupDatabase();
    await askForNewStudent();
  } catch (error) {
    console.log("Houston, we have a problem: ", error);
  }
});
