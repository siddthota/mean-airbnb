const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
    Rental.find({}, (err, foundRental) => {
        res.json(foundRental);
    })
})

router.get('/:id', (req, res) => {
    debugger;
    const rentalId = req.params.id;
    console.log(rentalId);
    Rental.findById(rentalId, (err, foundRental) => {
        if(err) {
            res.status(422).send({error: [{title: "Rental Error", detail: "This rental with provided id not found"}]})
        }
        res.json(foundRental);
    })
})

module.exports = router;