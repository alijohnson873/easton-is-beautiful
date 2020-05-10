const ExifImage = require('exif').ExifImage;
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '../images');
let dataArray = {data:[]}; 

const dmsToDD = (dmsArray, direction) => {
    let dd = dmsArray[0] + dmsArray[1]/60 + dmsArray[2]/(60*60);
    if (direction === "S" || direction === "W") {
        dd = dd * -1
    }
    return dd.toFixed(6);
}

const returnExifData = (fileName) => {
    try {
        new ExifImage({ image : fileName }, function (error, exifData) {
            if (error)
                console.log('Error: '+ error.message);
            else
            dataArray.data.push({
                    name: fileName, 
                    latitude : dmsToDD(exifData.gps.GPSLatitude, exifData.gps.GPSLatitudeRef), 
                    longitude : dmsToDD(exifData.gps.GPSLongitude, exifData.gps.GPSLongitudeRef)
                })
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}

const returnExifDataForAllFiles = () => {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            if (path.extname(file) === '.JPG'){
                returnExifData(file)
            }
        });
    })
}

returnExifDataForAllFiles()

setTimeout( function() {
    let jsonData = JSON.stringify(dataArray);
    fs.writeFileSync('./image-exif-data.json', jsonData);
}, 3000)

