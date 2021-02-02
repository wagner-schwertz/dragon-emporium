// src/server.js
import { createServer, Response } from "miragejs";

import users from "users.json";

function authenticate(request) {
  const user = users.find(
    (user) => user.user === request.user && user.password === request.password
  );
  if (user) {
    return user.token;
  } else {
    return null;
  }
}

export default function server() {
  createServer({
    routes() {
      this.post("/api/authenticate", (_, request) => {
        let attrs = JSON.parse(request.requestBody);
        if (authenticate(attrs)) {
          return {
            token: authenticate(attrs),
          };
        } else {
          return new Response(
            401,
            { header: "header" },
            { errors: ["Invalid username or password"] }
          );
        }
      });
      this.passthrough("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/**");
    },
  });
}
