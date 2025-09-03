const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { adminMiddleware } = require("../middleware/admin");
const { CourseModel, purchaseModel } = require("../db");

const courseRouter = Router();

// to fetch all the courses
courseRouter.get("/preview", async function (req, res) {
  try {
    const coursesList = await CourseModel.find({});
    if (coursesList) {
      res.status(200).json({
        message: "All available courses",
        courses: coursesList,
      });
    } else {
      res.status(200).json({
        message: "There is no available course at this moment",
      });
    }
  } catch (e) {
    console.log(e.tostring());
    res.status(500).json({
      error: e,
    });
  }
});

// to purchase the courses
courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.id;
  const courseId = req.query.courseId;

  try {
    const course = await CourseModel.findOne({
      _id: courseId,
    });

    if (course) {
      await purchaseModel.create({
        userId: userId,
        courseId: courseId,
      });

      res.status(200).json({
        message: "The course has been purchased successfully",
      });
    } else {
      res.status(403).json({
        message: "Invalid Course Id, no course is available for that Id",
      });
    }
  } catch (e) {
    console.log(e.tostring());
    res.status(500).json({
      error: e,
    });
  }
});

// to fetch the purchased courses of the user
courseRouter.get("/purchased", userMiddleware, async function (req, res) {
  const userId = req.id;
  try {
    const purchaseList = await purchaseModel.find({
      userId: userId,
    });

    let courses = [];

    for (let i = 0; i < purchaseList.length; i++) {
      const courseId = purchaseList[i].courseId;
      courses.push(courseId);
    }

    const courseData = await CourseModel.find({
      _id: { $in: courses },
    });

    res.status(200).json({
      message: "All purchased courses",
      courses: courseData,
    });
  } catch (e) {
    console.log(e.tostring());
    res.status(500).json({
      error: e,
    });
  }
});

module.exports = {
  courseRouter,
};
