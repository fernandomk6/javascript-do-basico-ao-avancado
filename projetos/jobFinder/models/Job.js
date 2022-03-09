const Sequelize = require("sequelize");
const db = require("./bd/connection");
const Job = db.define("job", {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  salary: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  new: {
    type: Sequelize.INTEGER
  }
});

module.exports = Job;