var ExifImage = require('exif').ExifImage;
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, './');

var dataArray = []; 

const returnExifData = (fileName) => {
    try {
        new ExifImage({ image : fileName }, function (error, exifData) {
            if (error)
                console.log('Error: '+ error.message);
            else
               console.log({name: fileName, latitude : exifData.gps.GPSLatitude, longitude : exifData.gps.GPSLongitude})

                dataArray.push({name: fileName, latitude : exifData.gps.GPSLatitude, longitude : exifData.gps.GPSLongitude})
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


const writeJsonFile = () => {
    let jsonData = JSON.stringify(dataArray);
    fs.writeFileSync('image-exif-data.json', jsonData);
}

writeJsonFile()

// setTimeout( function() {
//     let jsonData = JSON.stringify(dataArray);
//     fs.writeFileSync('image-exif-data.json', jsonData);
// }, 3000)

const mockLat = [ 51, 28, 5.04 ]
const mockLng = [ 2, 34, 3.38 ]



const convertDMSFormatToDecimal = (dmsArray) => {
        let dd = dmsArray[0] + dmsArray[1]/60 + dmsArray[2]/(60*60);

        return dd.toFixed(6);
    
    //     if (direction == "S" || direction == "W") {
    //         dd = dd * -1;
    //     } // Don't do anything for N or E
    //     return dd;
    // }
}

console.log('mock lat', convertDMSFormatToDecimal(mockLat))
console.log('mock long', convertDMSFormatToDecimal(mockLng))

// fs.readFile('/Users/joe/test.txt', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })