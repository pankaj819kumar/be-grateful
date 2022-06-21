const Contact = require('../models/journal');

// to print month name in date
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

module.exports.home = function (req, res) {
    Contact.find({}, function (err, journals) {
        if (err) {
            console.log("Error in fetching journal from database:", err);
            return;
        }
        return res.render('home', {
            journal_list: journals,
            monthNames: monthNames
        });
    });
}
module.exports.addJournal = function (req, res) {
    Contact.create({
        journal_data: req.body.journal_data,
        date: new Date()
    }, function (err, newJournal) {
        if (err) {
            console.log("error in adding journal:", err);
            return;
        }
    });
    res.json({
        journal_data: req.body.journal_data
    });
}