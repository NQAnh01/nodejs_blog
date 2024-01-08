const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.countDocumentsDeleted({}), Course.find({}).sortable(req)])
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
      .sortable(req)
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
