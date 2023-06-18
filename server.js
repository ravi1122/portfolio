var express = require('express');
var app = express();
var path = require('path');
var PORT =  8080

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/skillset', express.static(path.join(__dirname, 'build')));
app.use('/project', express.static(path.join(__dirname, 'build')));
app.use('/resume', express.static(path.join(__dirname, 'build')));


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
