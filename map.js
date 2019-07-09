var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          new ol.layer.Tile({
            source: new ol.source.TileWMS({
                format: 'image/png',
                url: 'http://geo.weather.gc.ca/geomet/',
                params: {'LAYERS': 'RADAR_1KM_RDBR', 'TILED': true},
            })
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-97, 44]),
          zoom: 3
        })
      });