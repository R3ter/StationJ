const StudentModel = require("./StudentModel");

const getAllStudent = async () => {
  const Student = await StudentModel.find({});
  return Student;
};

const getStudent = async (id) => {
  const Student = await StudentModel.findById(id);
  return Student;
};

const addStudent = async ({
  name,
  age,
  paymentStatus,
  residence,
  cityAccessPermit,
}) => {
  const Student = new StudentModel({
    name,
    age,
    paymentStatus,
    residence,
    cityAccessPermit,
    courseRegistration: true,
  });

  await Student.save();
  return { message: "Student registered successfully." };
};

const updateStudent = async (id, obj) => {
  await StudentModel.findByIdAndUpdate(id, obj);
  return "Updated";
};

const deleteStudent = async (id) => {
  await StudentModel.findByIdAndDelete(id);
  return "Deleted";
};

module.exports = {
  getAllStudent,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
