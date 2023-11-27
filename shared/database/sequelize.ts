import { Options, Sequelize, PoolOptions } from "sequelize";
interface PoolParams extends PoolOptions{
  handleDisconnects:boolean
}

interface PoolParams extends PoolOptions {
  handleDisconnects: boolean
}

const poolOption: PoolParams = {
    max: 40,
    min: 0,
    acquire: 100000,
    idle: 10000,
    evict: 20000,
    handleDisconnects: true

}
// Options for the database connection
const options: Options = {
  database: process.env.DB_DATABASE,
  dialect: "mysql",
  //dialectModule: require("mysql2"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
 // logging: true,
  // dialectOptions: {
  //   options: {
  //     statement_timeout: 30000
  //   },
  // },
 "timezone": "+05:30",
  pool: poolOption,
  //pool:{
  //  max: 0,
  //  min: 0,
  //  acquire: 60000,
  //  idle: 10000,
  //  evict: 20000
  //},

  retry: {
    // match: [/Deadlock/i, Sequelize.ConnectionError], // Retry on connection errors
    max: 3, // Maximum retry 3 times
  },
};

//import fs = require('fs');

//const logStream = fs.createWriteStream('./sql.log', {'flags': 'a'});

/**
 * Add password to the options if it is provided
 * This is to prevent mysql throwing errors "PASSWORD=YES" when
 * running on environments which does not have password like localhost
 */

// Export a singleton connection instance
export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, options );

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');

}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
// if (process.env.SYNC === "true") {
//   sequelize.sync({ force: true }).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.error(err);
//   });
// }