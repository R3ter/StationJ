const express = require("express");
const router = express.Router();

const bl = require("../model/StudentBLL");

router.get("/", async (req, res) => {
  try {
    const Students = await bl.getAllStudent();
    res.status(200).json(Students);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await bl.getStudent(id);
    res.status(200).json(Student);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, age, paymentStatus, residence, cityAccessPermit } = req.body;

    if (!name || !age || !paymentStatus || !residence || !cityAccessPermit) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const status = await bl.addStudent({
      name,
      age,
      paymentStatus,
      residence,
      cityAccessPermit,
    });
    res.status(201).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Student = req.body;
    const status = await bl.updateStudent(id, Student);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const status = await bl.deleteStudent(id);
    res.status(204).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
