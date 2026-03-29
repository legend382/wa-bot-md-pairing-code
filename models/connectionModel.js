const mongoose = require('mongoose');
const chalk = require('chalk');

// সরাসরি আপনার ডাটাবেস লিঙ্কটি এখানে বসিয়ে দেওয়া হলো
const uri = "mongodb+srv://clipformoneyapk_db_user:ws1hiZCkrwr5JBoo@cluster0.ia72zn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db = mongoose.connection;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// কানেকশন সাকসেস হলে মেসেজ দেখাবে
db.once('open', () => {
    console.log(chalk.green('Database connected successfully!'));
});

module.exports = db;
