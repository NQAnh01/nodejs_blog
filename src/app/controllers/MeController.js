const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({});
    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([Course.countDocumentsDeleted({}), courseQuery])
      .then(([deleteCount, courses]) => {
        res.render('me/stored-courses', {
          deleteCount,
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // [GET] /trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
