// pulls from both nav and home 
const router = require('express').Router();
const homeRoute = require('./homeRoute');
const dashboard = require('./dashboardRoute');
const apiRoute = require('./api');

router.use('/', homeRoute);
router.use('/dashboard', dashboard);
router.use('/api', apiRoute);

module.exports = router;
