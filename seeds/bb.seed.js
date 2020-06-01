const mongoose = require("mongoose");
const BBModel = require("../models/bb.model");
const BBQuotesModel = require("../models/bbQuotes.model");

const axios = require("axios");

require("../config/database.config");

axios
  .get("https://www.breakingbadapi.com/api/characters")
  .then((response) => {
    BBModel.create(response.data)
      .then(() => {
        axios.get("https://www.breakingbadapi.com/api/quotes")
          .then((response) => {
            BBQuotesModel.create(response.data)
              .then(() => {
                console.log("Database created and populated");
              })
              .catch(() => {
                console.log("Something went wrong creating the database");
              })
              .finally(() => {
                console.log("closing database...");
                mongoose.connection.close();
              });
          })
          .catch(() => {
            console.log("Something went wrong");
          });

        console.log("Database created and populated");
      })
      .catch(() => {
        console.log("Something went wrong creating the database");
        console.log("closing database...");
        mongoose.connection.close();
      });
  })
  .catch(() => {
    console.log("Something went wrong");
    console.log("closing database...");
    mongoose.connection.close();
  });
