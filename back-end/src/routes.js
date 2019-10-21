const express = require('express');
const multer = require('multer');

const sessionController = require('./controllers/sessionController');
const spotController = require('./controllers/spotController');
const dashboardController = require('./controllers/dashboardController');
const bookingController = require('./controllers/bookingController');

const uploadConfig = require('./config/upload');


const uploads = multer(uploadConfig);
const routes = express.Router();

routes.post('/sessions', sessionController.store);
routes.post('/spots', uploads.single("thumbnail"), spotController.store);
routes.get('/spots', spotController.index);
routes.get('/dashboard', dashboardController.show);
routes.post('/spots/:spot_id/bookings', bookingController.store);


module.exports = routes;