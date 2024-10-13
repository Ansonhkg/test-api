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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
