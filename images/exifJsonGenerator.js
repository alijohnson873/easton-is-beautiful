var ExifImage = require('exif').ExifImage;
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, './');

const returnExifData = (fileName) => {
    try {
        new ExifImage({ image : fileName }, function (error, exifData) {
            if (error)
                console.log('Error: '+ error.message);
            else
                return {name: fileName, latitude : exifData.gps.GPSLatitude, longitude : exifData.gps.GPSLongitude}
                // console.log({name: fileName, latitude : exifData.gps.GPSLatitude, longitude : exifData.gps.GPSLongitude}) 
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}

console.log(returnExifData('IMG_0599.JPG'));

// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     files.forEach(function (file) {
//         if (path.extname(file) === '.JPG'){
//             // exifData.push(returnExifData(file)) 
//             // console.log(returnExifData(file))
//             console.log(returnExifData(file))
//         }
//     });
// })


console.log(returnExifData('IMG_0599.JPG'));






// fs.readFile('/Users/joe/test.txt', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })