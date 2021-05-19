var express = require('express');
var controller = require('./controller.js');

var app = express();

app.get('/videos', controller.sendAllVideosJSON);
app.get('/videos/type/:type', controller.sendVideosByTypeJSON);
app.get('/videos/platform/:platform', controller.sendVideosByPlatformJSON);
app.get('/videos/category/:category', controller.sendVideosByCategoryJSON);
app.get('/videos/rating/:rating', controller.sendVideosByRatingJSON);

app.post('/videos', controller.saveVideo);
app.put('/videos/:id', controller.updateVideo);
app.delete('/videos/:id', controller.deleteVideo);

app.listen(8080, () => {
    console.log('myplantv-services listening on port 8080!');
});
