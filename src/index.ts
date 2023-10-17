import { createServer, IncomingMessage, ServerResponse } from "http"
import { hostname} from "os";
import dotenv from 'dotenv';
dotenv.config();

const port: string |undefined = process.env.PING_LISTEN_PORT;

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  try {
    console.log(`Request received from Host: ${hostname}`);
    if (req.method === "GET" && req.url === "/ping") {
      res.setHeader("Content-Type", "application/json")
      res.write(JSON.stringify(req.headers))
      res.end();
    } else {
      res.statusCode = 404
      res.end()
    }
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.end()
  }
}

try {
  const server = createServer(requestListener);
  server.listen(port ?? 8080);
  const serverAddressInfo = server.address()
  if (!serverAddressInfo) {
    throw new Error("No server address info")
  }
  if (typeof serverAddressInfo === 'string') {
    console.log(`Server listening : ${serverAddressInfo}`)
  } else {
    console.log(`Server listening : ${serverAddressInfo.address}:${serverAddressInfo.port}`)
  }
} catch (err) {
  console.error(err)
  process.exit(1)
}
