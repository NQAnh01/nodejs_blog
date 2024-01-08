const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.plugin(slug);

const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    _id: false,
    timestamps: true,
  },
);

// Custom sorting helper for the Course model
Course.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);

    // Sorting the query based on the specified column and type
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : 'desc',
    });
  }
  return this;
};

Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });
Course.plugin(AutoIncrement);

module.exports = mongoose.model('Course', Course);
