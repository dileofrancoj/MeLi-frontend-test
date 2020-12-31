import App from "./app";
import { PORT } from "./utils/constants";
const server = new App();
server.app.listen(PORT || 8080);
console.log(`Corriendo en http://localhost:${PORT || 8080} 🔥`);
