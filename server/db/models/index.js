// const { Client } = require('pg') //imports pg module
// const client = new Client(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/databasename'
// )
// // // database name needds to be replaced with the main databases
// // const User = require('./user') //not completely sure how this will be done

// // // USER METHODS & FUNCTIONS//

// async function createUser({
//   //INCOMPLETE could be written in the users index file
//   username,
//   password,
//   email,
//   name,
//   address,
//   creditcard //could change later for stripe/creditcard auth
// }) {
//   try {
//     console.log("Creating user...")
//   } catch (error) {
//     console.log('Error creating users', error)
//   }
// }

// async function updateUser() {}

// async function getAllUsers() {
//   try {
//   } catch (error) {
//     console.log('There was an error getting users', error)
//   }
// }

// async function getUserById() {}

// const getUserByUserName = async username => {}

// // //POST METHODS & FUNCTIONS

// async function createProduct({
//   //add edit or change
//   username, //or user
//   description,
//   price,
//   title,
//   etc
// }) {
//   try {
//     //JUICEBOX REFERENCE BELOW
//     // const { rows: [ post ] } = await client.query(`
//     //   INSERT INTO posts("authorId", title, content)
//     //   VALUES($1, $2, $3)
//     //   RETURNING *;
//     // `, [authorId, title, content]);
//     // const tagList = await createTags(tags);
//     // return await addTagsToPost(post.id, tagList);
//   } catch (error) {
//     console.log('There was an error createing the post', error)
//   }
// }

// const updateProduct = async () => {}

// const getAllProduct = async () => {}

// const getProductByUser = async () => {}

// // //REVIEWS METHODS & FUNCTIONS

// async function createReview() {}

// async function updateReview() {}

// async function getAllReviews() {}

// async function getReviewsByUserId() {}

// // //ORDERS METHODS & FUNCTIONS

// async function createrOrder() {}

// async function updateCart() {}

// /**
//  * If we had any associations to make, this would be a great place to put them!
//  * ex. if we had another model called BlogPost, we might say:
//  *
//  *    BlogPost.belongsTo(User)
//  */

// /**
//  * We'll export all of our models here, so that any time a module needs a model,
//  * we can just require it from 'db/models'
//  * for example, we can say: const {User} = require('../db/models')
//  * instead of: const User = require('../db/models/user')
//  */

// module.exports = {
//   // User, //idk what to do with this either
//   getAllUsers,
//   createUser,
//   updateUser,
//   getUserById,
//   updateProduct,
//   createProduct,
//   getAllProduct,
//   getProductByUser
// }
