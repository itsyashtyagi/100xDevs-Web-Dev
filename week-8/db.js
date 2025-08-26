const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: Number,
});

const Admin = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: Number,
});

const Course = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: ObjectId, ref: "admin" },
});

const purchase = new Schema({
  userId: { type: ObjectId, ref: "users" },
  courseId: { type: ObjectId, ref: "courses" },
});

const UserModel = mongoose.model("users", User);
const AdminModel = mongoose.model("admin", Admin);
const CourseModel = mongoose.model("courses", Course);
const purchaseModel = mongoose.model("purchase", purchase);

module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  purchaseModel,
};
