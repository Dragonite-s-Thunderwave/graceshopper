// const {client, createUser} = require('./index') //createusers may be moved to users.js

// async function dropTables() {
//   try {
//     console.log('Dropping tables...')
//     //NEED to be dropped in the correct order
//     //NEED to change names of databases
//     //Might be missing some tables
//     await client.query(
//       `DROP TABLE IF EXISTS;
//      DROP TABLE IF EXISTS jackets;
//      DROP TABLE IF EXISTS hats;
//      DROP TABLE IF EXISTS shoes;
//      DROP TABLE IF EXISTS pants;
//      DROP TABLE IF EXISTS shirts;
//      DROP TABLE IF EXISTS reviews;
//      DROP TABLE IF EXISTS order;
//      DROP TABLE IF EXISTS users`
//     )
//     console.log('Finished dropping tables')
//   } catch (error) {
//     console.error('There was an error dropping tables', error)
//   }
// }

// async function createTables() {}

// /// DUMMY DATA BELOW// - Could be moved to seedData.js and then imported for simplicity

// async function createInitialUsers() {
//   try {
//     console.log('Starting to create dummy data')
//     const dummyDataUserInfo = [
//       {
//         username: 'joey435',
//         password: 'joeyinthematrix',
//         email: 'joe374@gmail.com',
//         name: 'jhoesephk antler',
//         address: '123 bardnard st, 76543, Tyler,Tx',
//         creditcard: 'idk what to put in here'
//       },
//       {
//         username: 'beyonce',
//         password: 'blueivy',
//         email: 'yonce@gmail.com',
//         name: 'Beyonce Knowles',
//         address: '42nd street, NY 10036',
//         creditcard: 'idk what to put in here as well'
//       }
//     ]
//     await createUser({
//       //needs to be imported/required
//     })
//   } catch (error) {
//     console.error('Error creating dummy data users', error)
//   }
// }

// module.exports = {
//   dropTables,
//   createTables,
//   createInitialUsers
// }
