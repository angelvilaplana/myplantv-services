var videoModel = require('./database.js').VideoModel;

function getData(error, data) {
    if (error) {
        return {
            ok: false,
            result: error
        };
    }

    return {
        ok: true,
        result: data
    };
}

function sendAllVideosJSON(req, res) {
    videoModel.find({}, (error, data) => {
        res.send(getData(error, data))
    });
}

function sendVideosByTypeJSON(req, res) {
    videoModel.find({ type: req.params.type }, (error, data) => {
        res.send(getData(error, data))
    });
}

function sendVideosByPlatformJSON(req, res) {
    videoModel.find({ platform: req.params.platform }, (error, data) => {
        res.send(getData(error, data))
    });
}

function sendVideosByCategoryJSON(req, res) {
    videoModel.find({ category: req.params.category }, (error, data) => {
        res.send(getData(error, data))
    });
}

function sendVideosByRatingJSON(req, res) {
    videoModel.find({ rating: req.params.rating }, (error, data) => {
        res.send(getData(error, data))
    });
}

function saveVideo(req, res) {
    var model = new videoModel(req.body);
    model.save((error, data) => {
        res.send(getData(error, data))
    });
}

function updateVideo(req, res) {
    videoModel.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.send(getData(error, data))
    });
}

function deleteVideo(req, res) {
    videoModel.findByIdAndDelete(req.params.id, req.body, (error, data) => {
        res.send(getData(error, data))
    });
}

module.exports = {
    sendAllVideosJSON,
    sendVideosByTypeJSON,
    sendVideosByPlatformJSON,
    sendVideosByCategoryJSON,
    sendVideosByRatingJSON,
    saveVideo,
    updateVideo,
    deleteVideo
}
