const router = require('express').Router();
let Contacts = require('../models/contacts.model');

router.route('/').get((req, res) => {
    Contacts.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const contactname = req.body.contactname;
  const phonenumber = req.body.phonenumber;

  const newContact = new Contacts({
    contactname,
    phonenumber,
  });

  newContact.save()
  .then(() => res.json('Contact added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Contacts.findById(req.params.id)
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Contacts.findByIdAndDelete(req.params.id)
    .then(() => res.json('Contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Contacts.findById(req.params.id)
    .then(contacts => {
        contacts.contactname = req.body.contactname;
        contacts.phonenumber = req.body.phonenumber;

      contacts.save()
        .then(() => res.json('Contact updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:contactname').get((req, res) => {
//   // Contacts.findById(req.params.id)
//      Contacts.find(req.params.contactname)
//     .then(contacts => res.json(contacts))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;