const mongoose = require('mongoose');

// defining schema
const journalSchema = new mongoose.Schema({
    journal_data: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// making collection in database
const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;