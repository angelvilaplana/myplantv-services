var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myplantv-services', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    user: 'angel',
    pass: '1234',
    authSource: 'admin'
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error to the database:'));
db.once('open', console.log.bind(console, 'Successfully connected to the database'));

var videoSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 1
    },
    type: {
        type: String,
        enum: [
            'movie',
            'series',
            'mini-series'
        ]
    },
    platform: {
        type: String,
        enum: [
            'Netflix',
            'HBO',
            'Disney+',
            'TV'
        ]
    },
    category: {
        type: String,
        enum: [
            'comedy',
            'thriller',
            'adventures',
            'other'
        ]
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
});

exports.VideoModel = db.model('videos', videoSchema);
