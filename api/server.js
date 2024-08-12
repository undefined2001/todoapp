const app = require('./api');
const mongoose = require('mongoose'); // Use mongoose directly here
const PORT = 3000;

mongoose.connect('mongodb+srv://mdasraful2580:mdasraful1@todo.n6eog.mongodb.net/todo?retryWrites=true&w=majority&appName=todo')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, (err) => {
            if (!err) {
                console.log(`Server Running at http://localhost:${PORT}`);
            } else {
                console.log('Server start error:', err);
            }
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
