const mongoose = require('mongoose');

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

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;