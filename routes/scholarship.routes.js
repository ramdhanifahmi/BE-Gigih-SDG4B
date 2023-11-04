// scholarshipRouter.js

const express = require('express');
const scholarshipController = require('../controllers/scholarship.controller');

const router = require("express").Router();

// Define routes
router.get('', scholarshipController.getAllScholarships);
router.get('/:slug', scholarshipController.getScholarshipBySlug);
router.post('', scholarshipController.createScholarship);
router.put('/:id', scholarshipController.updateScholarship);
router.delete('/:id', scholarshipController.deleteScholarship);

module.exports = router;
