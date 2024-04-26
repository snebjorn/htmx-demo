import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { HelloController } from "./controllers/hello";

const app = new Elysia().use(html()).use(HelloController).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
