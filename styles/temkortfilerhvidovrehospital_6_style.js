var size = 0;
var placement = 'point';

var style_temkortfilerhvidovrehospital_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Hospitalsn") !== null) {
        labelText = String(feature.get("Hospitalsn"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 580.457],
                  scale: 0.02241390903746054,
                  anchor: [289.9985, 290.2285],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=hospital.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
