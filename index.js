const express = require("express");

const app = express();

let counter = 0;

app.get("/log-ip", (req, res) => {
  counter++;
  const requesterIp =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(`[${counter}] Requester IP:`, requesterIp);

  res.send(`[${counter}] Your IP address is logged: ${requesterIp}`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
