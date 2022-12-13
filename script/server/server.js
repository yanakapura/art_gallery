const cors = require("cors");
const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => console.log("Сервер работает !"));




// app.post("/writeUnsorted", (request, response) => {
//   const data = JSON.stringify(request.body);

//   fs.writeFile("../resourses/unsorted.txt", data, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// });

// app.post("/writeSorted", (request, response) => {
//   const data = JSON.stringify(request.body);

//   fs.writeFile("../resourses/sorted.txt", data, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// });

// app.get("/getUnsortedArr", (request, response) => {
//   fs.readFile("../resourses/unsorted.txt", "utf8", function (error, data) {
//     if (error) throw error; // если возникла ошибка
//     // console.log(data); // выводим считанные данные
//     response.json(data)
//   });
// });
app.get("/getData", (request, response) => {
  fs.readFile("data.json", "utf8", function (error, data) {
    if (error) throw error; // если возникла ошибка
    response.json(data)
  });
});