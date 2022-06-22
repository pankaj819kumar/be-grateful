const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
async function main() {
    await mongoose.connect(dbUrl);
}

main().then(function () {
    console.log("connected to database successfully");
}).catch(function (err) {
    console.error('error connecting to database', err);
});