const express = require('express');
const courseController = require('../app/controllers/CourseController');
const router = express.Router();

router.get('/create', courseController.create);
router.post('/handle-form-actions', courseController.handleFormActions);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.delete('/:id/destroy', courseController.destroy);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
