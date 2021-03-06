const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { check, validationResult } = require('express-validator/check');
const Dhyanasagar = require('../../models/Dhyanasagar');

//uploads path folders functions and configs
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'adharCard') {
      cb(null, './upload/FAACFC/adharCard/');
    } else if (file.fieldname === 'photo') {
      cb(null, './upload/FAACFC/userPhoto/');
    } else if (file.fieldname === 'puc') {
      cb(null, './upload/FAACFC/PUC/');
    } else if (file.fieldname === 'UG') {
      cb(null, './upload/FAACFC/lastSemUG/');
    } else if (file.fieldname === 'PG') {
      cb(null, './upload/FAACFC/lastSemPG/');
    } else if (file.fieldname === 'collegeID') {
      cb(null, './upload/FAACFC/collegeID/');
    } else if (file.fieldname === 'bankDetails') {
      cb(null, './upload/FAACFC/bankAC/');
    } else if (file.fieldname === 'income') {
      cb(null, './upload/FAACFC/incomeCertificate/');
    } else if (file.fieldname === 'casteCertificate') {
      cb(null, './upload/FAACFC/castCertificate/');
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === 'adharCard') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'photo') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'puc') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'UG') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'PG') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'collegeID') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'bankDetails') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'income') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    } else if (file.fieldname === 'casteCertificate') {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    }
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.fieldname === 'adharCard') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'photo') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'puc') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'UG') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'PG') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'collegeID') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'bankDetails') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'income') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  } else if (file.fieldname === 'casteCertificate') {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png'
    ) {
      cb(null, true);
    } else {
      !file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/);
      req.fileValidationError = 'Only image files jpg,jpeg,png are allowed!';
      return cb(new Error('Only image files jpg,jpeg,png are allowed!'), false);
    }
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post(
  '/',
  upload.fields([
    { name: 'adharCard', maxCount: 1 },
    { name: 'photo', maxCount: 1 },
    { name: 'puc', maxCount: 1 },
    { name: 'UG', maxCount: 1 },
    { name: 'PG', maxCount: 1 },
    { name: 'collegeID', maxCount: 1 },
    { name: 'bankDetails', maxCount: 1 },
    { name: 'income', maxCount: 1 },
    { name: 'casteCertificate', maxCount: 1 },
  ]),
  [
    check('fullname', 'fullname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('caste', 'caste is required').not().isEmpty(),
    check('phone', 'Phine number is required').not().isEmpty(),
    check('permanentaddress', 'permanentaddress is required').not().isEmpty(),
    check('district', 'district is required').not().isEmpty(),
    check('city', 'city is required').not().isEmpty(),
    check('zipcode', 'zipcode is required').not().isEmpty(),
    check('course', 'course is required').not().isEmpty(),
    check('collegename', 'collegename is required').not().isEmpty(),
    check('university', 'university is required').not().isEmpty(),
    check('collegeaddress', 'collegeaddress is required').not().isEmpty(),
    check('percentage', 'percentage is required').not().isEmpty(),
    check('bookname', 'bookname is required').not().isEmpty(),
    check('bookauthor', 'bookauthor is required').not().isEmpty(),
    check('bookedition', 'bookedition is required').not().isEmpty(),
  ],
  async (req, res, next) => {
    console.log(req.file);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const books = new Dhyanasagar({
      _id: new mongoose.Types.ObjectId(),
      fullname: req.body.fullname,
      email: req.body.email,
      gender: req.body.gender,
      caste: req.body.caste,
      phone: req.body.phone,

      permanentaddress: req.body.permanentaddress,
      district: req.body.district,
      city: req.body.city,
      zipcode: req.body.zipcode,
      course: req.body.course,
      collegename: req.body.collegename,

      university: req.body.university,
      collegeaddress: req.body.collegeaddress,
      percentage: req.body.percentage,
      stream: req.body.stream,
      bookname: req.body.bookname,

      bookauthor: req.body.bookauthor,
      bookedition: req.body.bookedition,

      adharCard: req.files['adharCard'][0].path,
      photo: req.files['photo'][0].path,
      puc: req.files['puc'][0].path,
      UG: req.files['UG'][0].path,
      PG: req.files['PG'][0].path,
      collegeID: req.files['collegeID'][0].path,
      bankDetails: req.files['bankDetails'][0].path,
      incomeCertificate: req.files['income'][0].path,
      casteCertificate: req.files['casteCertificate'][0].path,
    });
    await books
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: 'Created data book successfully',
          sampurnavidya: {
            fullname: result.fullname,
            email: result.email,
            gender: result.gender,
            caste: result.caste,
            phone: result.phone,

            permanentaddress: result.permanentaddress,
            district: result.district,
            city: result.city,
            zipcode: result.zipcode,
            course: result.course,

            collegename: result.collegename,
            university: result.university,
            collegeaddress: result.collegeaddress,
            percentage: result.percentage,
            bookname: result.bookname,
            bookauthor: result.bookauthor,
            bookedition: result.bookedition,

            adharCard: result.adharCard,
            photo: result.photo,
            puc: result.puc,
            UG: result.UG,
            PG: result.PG,
            collegeID: result.collegeID,
            bankDetails: result.bankDetails,
            incomeCertificate: result.incomeCertificate,
            casteCertificate: result.casteCertificate,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }
);

module.exports = router;
