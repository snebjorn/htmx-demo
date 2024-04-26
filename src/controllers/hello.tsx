import {Elysia} from "elysia";

export const HelloController = (app: Elysia) => {
    app.get("/", () => (
        <html lang="en">
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <h1>Hello World 1</h1>
          </body>
        </html>
      ))

      return Promise.resolve(app);
}
