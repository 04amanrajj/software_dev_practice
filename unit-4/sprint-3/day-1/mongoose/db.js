const mongoose = require("mongoose");

// server connection
const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/school"
    );
    console.log("connected");

    //add many
    // await Studentmodel.insertMany([{name:"aman",age:19,city:"UDI"}])

    // add one
    // const student = new Studentmodel({
    //   name: "CJ",
    //   age: "29",
    //   city: "san andres",
    // });
    // student.save();

    // show output in terminal
    const student = await Studentmodel.find();
    console.log(student);
  } catch (error) {
    console.log({ error: error.message });
  }
};
main();
// create schema
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
});

// create model
const Studentmodel = mongoose.model("student", studentSchema);
