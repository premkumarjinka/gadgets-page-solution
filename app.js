const html = require("express");
const app = html();

app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);

module.exports = app;
