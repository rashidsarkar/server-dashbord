import { Server } from "http";
import app from "./app";

const port = 4000;
async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

main();
