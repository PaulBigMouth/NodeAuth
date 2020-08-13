import * as express from "express";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();
export const app = express();

app.use("/", routes);

createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
})
  .then((connection) => {
    app.listen(+process.env.PORT, () => {
      console.log(`Server is running in http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
