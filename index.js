var csv = require('csvtojson');
var fs = require('fs');
var util = require('util');

csv().fromFile('./raw data.csv')
  .on('json', (obj) => {
    handleGeoData(obj.geo);
  }).on('done', (error) => {
    if (error) console.log(error);
  })

function handleGeoData(geo) {

  //strips out the markup tags
  geo = geo.replace('<MultiGeometry><Polygon><outerBoundaryIs><LinearRing><coordinates>', '');
  geo = geo.replace('</coordinates></LinearRing></outerBoundaryIs></Polygon></MultiGeometry>', '');

  var rawArray = geo.match(/-?\d+(\.\d+)?,-?\d+(\.\d+)?/g);

  var output = [];
  for (var i = 0; i < rawArray.length; i++) {
    var coordinates = rawArray[i].split(',');
    output.push({
      lat: coordinates[0],
      lng: coordinates[1]
    })
  }
  fs.writeFileSync('./coordinates.json', JSON.stringify(output));
}
