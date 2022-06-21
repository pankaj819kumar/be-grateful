const Journal = require('../models/journal');
const Contact = require('../models/journal');

// to print month name in date
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

module.exports.home = function (req, res) {
    Contact.find({}).sort({date:-1}).exec(function (err, journals) {
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
            return res.status(400).send(err);
        }
    });
    return res.status(200).end();
} 

module.exports.deleteJournal = function (req, res) {
    let id = req.body.id; 
    Journal.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("error in deleting journal: ", err);
            return res.status(400).send(err);
        }
    })
    return res.status(200).end();
}

module.exports.updateJournal = function (req, res) {
    let id = req.body.id;
    Journal.findByIdAndUpdate(id, {
        journal_data: req.body.new_journal_data
    }, function (err) {
        if (err) {
            console.log('error updating journal in database: ', err);
            return res.status(400).send(err);
        }
        return res.status(200).end();
    })
}