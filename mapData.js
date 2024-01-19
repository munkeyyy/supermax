var map;
var targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
AmCharts.ready(function () {
  map = new AmCharts.AmMap();
  map.panEventsEnabled = true;
  map.backgroundColor = "#fff";
  map.backgroundAlpha = 1;

  map.zoomControl.panControlEnabled = true;
  map.zoomControl.zoomControlEnabled = true;

  var dataProvider = {
    map: "indiaLow",
    getAreasFromMap: false,
    images: [
      {
        type: "circle",
        color: "black",
        id: "KANDLA",
        label: "Kandla",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: targetSVG,
        title: "<h1 class='amcharts-map-image-Tours'>Kandla</h1>",
        latitude: 23.030001,
        longitude: 70.220001,
      },
      {
        type: "circle",
        color: "black",
        id: "MUNDRA",
        label: "Mundra",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: targetSVG,
        title: "<h1 class='amcharts-map-image-Tours'>Mundra</h1>",
        latitude: 22.83952,
        longitude: 69.721329,
      },
      {
        type: "circle",
        color: "black",
        id: "SIKKA",
        label: "Sikka",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: targetSVG,
        title: "<h1 class='amcharts-map-image-Tours'>Sikka</h1>",
        latitude: 22.4278,
        longitude: 69.8418,
      },
      {
        type: "circle",
        color: "black",
        id: "BEDI",
        label: "Bedi",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Bedi</h1>",
        latitude: 22.5484,
        longitude: 70.0313,
      },
      {
        type: "circle",
        color: "black",
        id: "HAZIRA",
        label: "Hazira",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Hazira</h1>",
        latitude: 21.1076,
        longitude: 72.65115,
      },
      {
        type: "circle",
        color: "black",
        id: "DAHEJ",
        label: "Dahej",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Dahej</h1>",
        latitude: 21.6835,
        longitude: 72.49651,
      },
      {
        type: "circle",
        color: "black",
        id: "PIPAVAV",
        label: "Pipavav",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Pipavav</h1>",
        latitude: 20.9175,
        longitude: 71.50515,
      },
      {
        type: "circle",
        color: "black",
        id: "MUMBAI",
        label: "Mumbai",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Mumbai</h1>",
        latitude: 18.941,
        longitude: 72.8549957,
      },
      {
        type: "circle",
        color: "black",
        id: "NAHAVA_SHEVA",
        label: "Nahava Sheva",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Nahava Sheva</h1>",
        latitude: 18.9499,
        longitude: 72.9512,
      },
      {
        type: "circle",
        color: "black",
        id: "PIRPAU",
        label: "Pirpau",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Pirpau</h1>",
        latitude: 18.9833,
        longitude: 72.8333,
      },
      {
        type: "circle",
        color: "black",
        id: "MANGLORE",
        label: "Manglore",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Manglore</h1>",
        latitude: 12.9267902,
        longitude: 74.8061676,
      },
      {
        type: "circle",
        color: "black",
        id: "MORMUGAO",
        label: "Mormugao",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Mormugao</h1>",
        latitude: 15.414,
        longitude: 73.81,
      },
      {
        type: "circle",
        color: "black",
        id: "COCHIN",
        label: "Cochin",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Cochin</h1>",
        latitude: 9.957533,
        longitude: 76.27016,
      },
      {
        type: "circle",
        color: "black",
        id: "TUTICORIN",
        label: "Tuticorin",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Tuticorin</h1>",
        latitude: 8.781893,
        longitude: 78.19487,
      },
      {
        type: "circle",
        color: "black",
        id: "CHENNAI",
        label: "Chennai",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Chennai</h1>",
        latitude: 13.107,
        longitude: 80.3,
      },
      {
        type: "circle",
        color: "black",
        id: "PARADIP",
        label: "Paradip",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Paradip</h1>",
        latitude: 20.2776871,
        longitude: 86.6927719,
      },
      {
        type: "circle",
        color: "black",
        id: "VISHAKHAPATNAM",
        label: "Vishakhapatnam",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Vishakhapatnam</h1>",
        latitude: 17.6959515,
        longitude: 83.2873001,
      },
      {
        type: "circle",
        color: "black",
        id: "KAKINADA",
        label: "Kakinada",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Kakinada</h1>",
        latitude: 16.9313393,
        longitude: 82.3057938,
      },
      {
        type: "circle",
        color: "black",
        id: "GANGAVARAM",
        label: "Gangavaram",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Gangavaram</h1>",
        latitude: 17.6246376,
        longitude: 83.240448,
      },
      {
        type: "circle",
        color: "black",
        id: "KRISHNAPATNAM",
        label: "Krishnapatnam",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Krishnapatnam</h1>",
        latitude: 14.249,
        longitude: 80.13,
      },
      {
        type: "circle",
        color: "black",
        id: "ENNORE",
        label: "Ennore",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Ennore</h1>",
        latitude: 13.263,
        longitude: 80.344,
      },
      {
        type: "circle",
        color: "black",
        id: "HALDIA",
        label: "Haldia",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Haldia</h1>",
        latitude: 22.0183392,
        longitude: 88.0656281,
      },
      {
        type: "circle",
        color: "black",
        id: "KOLKATA",
        label: "Kolkata",
        labelColor: "black",
        labelFontWeight: "bold",
        labelFontSize: 14,
        labelPosition: "bottom",
        labelShiftX: 6,
        svgPath: "targetSVG",
        title: "<h1 class='amcharts-map-image-Tours'>Kolkata</h1>",
        latitude: 22.5562782,
        longitude: 88.3049774,
      },
    ],
  };

  map.dataProvider = dataProvider;

  map.areasSettings = {
    autoZoom: false,
    color: "#CDCDCD",
    colorSolid: "#5EB7DE",
    selectedColor: "#5EB7DE",
    outlineColor: "#666666",
    rollOverColor: "#88CAE7",
    rollOverOutlineColor: "#FFFFFF",
    selectable: false,
    balloonText: "[[title]]",
  };

  map.addListener("clickMapObject", function (event) {
    // deselect the area by assigning all of the dataProvider as selected object
    map.selectedObject = map.dataProvider;

    // toggle showAsSelected
    event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

    // bring it to an appropriate color
    map.returnInitialColor(event.mapObject);

    // let's build a list of currently selected states
    var states = [];
    for (var i in map.dataProvider.areas) {
      var area = map.dataProvider.areas[i];
      if (area.showAsSelected) {
        states.push(area.title);
      }
    }
  });
  map.export = {
    enabled: true,
  };

  map.write("chartdiv");
});