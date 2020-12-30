import app from "./app";
import { PORT } from "./utils/constants";
const port = PORT || 8080;

app.listen(port);
console.log(`Corriendo en http://localhost:${port} 🔥`);
