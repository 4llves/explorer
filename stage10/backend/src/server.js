require("express-async-errors");
require("dotenv/config");

const uploadConfig = require('./configs/upload');

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require('./utils/AppError');

const express = require('express');
const cors = require("cors");
const routes = require('./routes');

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const PORT = process.env.PORT || 3334;
app.listen(PORT, () => console.log(`Server ir running on Port ${PORT} 🚀`));