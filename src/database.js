var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myplantv-services', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: 'sergio',
    pass: '1234',
    authSource: 'admin'
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error to the database:'));
db.once('open', console.log.bind(console, 'Successfully connected to the database'));

var videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1
    },
    type: {
        type: String,
        required: true,
        enum: [
            'movie',
            'series',
            'mini-series'
        ]
    },
    platform: {
        type: String,
        required: true,
        enum: [
            'Netflix',
            'HBO',
            'Disney+',
            'TV'
        ]
    },
    category: {
        type: String,
        required: true,
        enum: [
            'comedy',
            'thriller',
            'adventures',
            'other'
        ]
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
});

exports.VideoModel = db.model('videos', videoSchema);
