const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://pankaj-be-grateful-journal:huFSHA5O2f5IgSCx@be-grateful-database.y7kqc.mongodb.net/be_grateful_db?retryWrites=true&w=majority');
}

main().then(function () {
    console.log("connected to database successfully");
}).catch(function (err) {
    console.error('error connecting to database', err);
});