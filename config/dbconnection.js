// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv").config()


// // console.log("connection.string", process.env.CONECTION_STRING)

// // const connectDb = async () => {
// //     try{
// //         const connect  = await mongoose.connect(process.env.CONECTION_STRING);
// //         console.log(
// //             "Database connected:",
// //              connect.connection.host,
// //              connect.connection.name)
// //     }catch(err){
// //         console.log(err);
// //         process.exit(1);
// //     } 
// // };

// // module.exports = connectDb;

// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();

// console.log("connection.string", process.env.CONNECTION_STRING);

// const connectDb = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true,
//         });
//         console.log(
//             "Database connected:",
//             connect.connection.host,
//             connect.connection.name
//         );
//     } catch (err) {
//         console.log("Error connecting to the database:", err.message);
//         process.exit(1);
//     } 
// };

// module.exports = connectDb;



