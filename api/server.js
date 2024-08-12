const app = require('./api');
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb://mdasraful2580:mdasraful1@todo/?ssl=true&replicaSet=atlas-s4qr9y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=todo').then(
    app.listen(PORT, (err) => {
        if (!err) {
            console.log(`Server Running at http://localhost:${PORT}`);
        }
        else {
            console.log(err);
        }
    })
)
    .catch(err => console.log(err));



