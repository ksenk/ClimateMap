var wms_layers = [];
var lyr_OpenStreetMapWMSparterrestris_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm-gray/service?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "OpenStreetMap WMS - par terrestris",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMSparterrestris_0, 0]);var format_Minoritevisible_1 = new ol.format.GeoJSON();
var features_Minoritevisible_1 = format_Minoritevisible_1.readFeatures(json_Minoritevisible_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minoritevisible_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Minoritevisible_1.addFeatures(features_Minoritevisible_1);var lyr_Minoritevisible_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Minoritevisible_1, 
                style: style_Minoritevisible_1,
    title: 'Minorite visible (%)<br />\
    <img src="styles/legend/Minoritevisible_1_0.png" /> 0.00000 - 0.01020<br />\
    <img src="styles/legend/Minoritevisible_1_1.png" /> 0.01020 - 0.01926<br />\
    <img src="styles/legend/Minoritevisible_1_2.png" /> 0.01926 - 0.03242<br />\
    <img src="styles/legend/Minoritevisible_1_3.png" /> 0.03242 - 0.06190<br />\
    <img src="styles/legend/Minoritevisible_1_4.png" /> 0.06190 - 0.65898<br />'
        });var format_RevenuannueltotalparindividuCAD_2 = new ol.format.GeoJSON();
var features_RevenuannueltotalparindividuCAD_2 = format_RevenuannueltotalparindividuCAD_2.readFeatures(json_RevenuannueltotalparindividuCAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RevenuannueltotalparindividuCAD_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RevenuannueltotalparindividuCAD_2.addFeatures(features_RevenuannueltotalparindividuCAD_2);var lyr_RevenuannueltotalparindividuCAD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RevenuannueltotalparindividuCAD_2, 
                style: style_RevenuannueltotalparindividuCAD_2,
    title: 'Revenu annuel total par individu (CAD)<br />\
    <img src="styles/legend/RevenuannueltotalparindividuCAD_2_0.png" /> 645.00000 - 14765.00000<br />\
    <img src="styles/legend/RevenuannueltotalparindividuCAD_2_1.png" /> 14765.00000 - 25351.00000<br />\
    <img src="styles/legend/RevenuannueltotalparindividuCAD_2_2.png" /> 25351.00000 - 42040.00000<br />\
    <img src="styles/legend/RevenuannueltotalparindividuCAD_2_3.png" /> 42040.00000 - 84150.00000<br />\
    <img src="styles/legend/RevenuannueltotalparindividuCAD_2_4.png" /> 84150.00000 - 2294790.00000<br />'
        });var lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://proxyinternet.nrcan.gc.ca/arcgis/services/CLSS-SATC/CLSS_Administrative_Boundaries/MapServer/WMSServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Aboriginal_Lands_of_Canada_Legislative_Boundaries",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Frontieres legislatives des territoires autochtones au Canada",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3, 0]);var lyr_Inondation_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webservices.maps.canada.ca/arcgis/services/NRCan/EGS_Flood_Product_CurrentYear_en/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Inondation",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Inondation_4, 0]);var lyr_Secheresse_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www5.agr.gc.ca/atlas/services/imageservices/canadian_drought_monitor/ImageServer/WMSServer",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Secheresse",
                            opacity: 0.547000,
                            
                            
                          });
              wms_layers.push([lyr_Secheresse_5, 0]);var lyr_Tendancerelativedesprecipitationstotales_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.weather.gc.ca/geomet-climate?version%3D1.3.0",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "CANGRD.TREND.PR_ANNUAL",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Tendance relative des precipitations totales",
                            opacity: 0.444000,
                            
                            
                          });
              wms_layers.push([lyr_Tendancerelativedesprecipitationstotales_6, 0]);var lyr_Tendanceabsoluedelatemperaturemoyenne_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geo.weather.gc.ca/geomet-climate?version%3D1.3.0",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "CANGRD.TREND.TM_ANNUAL",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Tendance absolue de la temperature moyenne",
                            opacity: 0.536000,
                            
                            
                          });
              wms_layers.push([lyr_Tendanceabsoluedelatemperaturemoyenne_7, 0]);var format_Zonesbrulees_8 = new ol.format.GeoJSON();
var features_Zonesbrulees_8 = format_Zonesbrulees_8.readFeatures(json_Zonesbrulees_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesbrulees_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Zonesbrulees_8.addFeatures(features_Zonesbrulees_8);var lyr_Zonesbrulees_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonesbrulees_8, 
                style: style_Zonesbrulees_8,
                title: '<img src="styles/legend/Zonesbrulees_8.png" /> Zones brulees'
            });var lyr_Climateactionsfinancementgouvernmental_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps-cartes.ec.gc.ca/arcgis/services/CAM/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Climate actions, financement gouvernmental",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Climateactionsfinancementgouvernmental_9, 0]);

lyr_OpenStreetMapWMSparterrestris_0.setVisible(true);lyr_Minoritevisible_1.setVisible(true);lyr_RevenuannueltotalparindividuCAD_2.setVisible(true);lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3.setVisible(true);lyr_Inondation_4.setVisible(true);lyr_Secheresse_5.setVisible(true);lyr_Tendancerelativedesprecipitationstotales_6.setVisible(true);lyr_Tendanceabsoluedelatemperaturemoyenne_7.setVisible(true);lyr_Zonesbrulees_8.setVisible(true);lyr_Climateactionsfinancementgouvernmental_9.setVisible(true);
var layersList = [lyr_OpenStreetMapWMSparterrestris_0,lyr_Minoritevisible_1,lyr_RevenuannueltotalparindividuCAD_2,lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3,lyr_Inondation_4,lyr_Secheresse_5,lyr_Tendancerelativedesprecipitationstotales_6,lyr_Tendanceabsoluedelatemperaturemoyenne_7,lyr_Zonesbrulees_8,lyr_Climateactionsfinancementgouvernmental_9];
lyr_Minoritevisible_1.set('fieldAliases', {'CDUID': 'CDUID', 'CDNAME': 'CDNAME', 'CDTYPE': 'CDTYPE', 'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'DataMinority_field_1': 'DataMinority_field_1', 'DataMinority_Shape.Area': 'DataMinority_Shape.Area', 'DataMinority_name': 'DataMinority_name', 'DataMinority_Adjusted.Population..previous.Census.': 'DataMinority_Adjusted.Population..previous.Census.', 'DataMinority_PR_UID': 'DataMinority_PR_UID', 'DataMinority_Type': 'DataMinority_Type', 'DataMinority_Region.Name': 'DataMinority_Region.Name', 'DataMinority_Area..sq.km.': 'DataMinority_Area..sq.km.', 'DataMinority_Population': 'DataMinority_Population', 'DataMinority_Dwellings': 'DataMinority_Dwellings', 'DataMinority_Households': 'DataMinority_Households', 'DataMinority_LowIncome': 'DataMinority_LowIncome', 'DataMinority_LowIncPercent': 'DataMinority_LowIncPercent', 'DataMinority_Aboriginal': 'DataMinority_Aboriginal', 'DataMinority_AborigPercent': 'DataMinority_AborigPercent', 'DataMinority_VisMinority': 'DataMinority_VisMinority', 'DataMinority_VisMinorityPercent': 'DataMinority_VisMinorityPercent', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldAliases', {'CDUID': 'CDUID', 'CDNAME': 'CDNAME', 'CDTYPE': 'CDTYPE', 'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'Tryincome32_field_1': 'Tryincome32_field_1', 'Tryincome32_Shape.Area': 'Tryincome32_Shape.Area', 'Tryincome32_name': 'Tryincome32_name', 'Tryincome32_Adjusted.Population..previous.Census.': 'Tryincome32_Adjusted.Population..previous.Census.', 'Tryincome32_Type': 'Tryincome32_Type', 'Tryincome32_Region.Name': 'Tryincome32_Region.Name', 'Tryincome32_Area..sq.km.': 'Tryincome32_Area..sq.km.', 'Tryincome32_Population': 'Tryincome32_Population', 'Tryincome32_Dwellings': 'Tryincome32_Dwellings', 'Tryincome32_Households': 'Tryincome32_Households', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data', });
lyr_Zonesbrulees_8.set('fieldAliases', {'NFIREID': 'NFIREID', 'BASRC': 'BASRC', 'FIREMAPS': 'FIREMAPS', 'FIREMAPM': 'FIREMAPM', 'FIRECAUS': 'FIRECAUS', 'BURNCLAS': 'BURNCLAS', 'COMM': 'COMM', 'CDATE': 'CDATE', 'SDATE': 'SDATE', 'EDATE': 'EDATE', 'AFSDATE': 'AFSDATE', 'AFEDATE': 'AFEDATE', 'CAPDATE': 'CAPDATE', 'BT_GID': 'BT_GID', 'SALVAGE': 'SALVAGE', 'PB_HARV': 'PB_HARV', 'UTOTAREA': 'UTOTAREA', 'NBACVERS': 'NBACVERS', 'TOTAREA': 'TOTAREA', 'AREAMODA': 'AREAMODA', 'AREAMODB': 'AREAMODB', 'AREAMODT': 'AREAMODT', 'AREAMODV': 'AREAMODV', });
lyr_Minoritevisible_1.set('fieldImages', {'CDUID': 'TextEdit', 'CDNAME': 'TextEdit', 'CDTYPE': 'TextEdit', 'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'DataMinority_field_1': 'Range', 'DataMinority_Shape.Area': 'TextEdit', 'DataMinority_name': 'TextEdit', 'DataMinority_Adjusted.Population..previous.Census.': 'Range', 'DataMinority_PR_UID': 'Range', 'DataMinority_Type': 'TextEdit', 'DataMinority_Region.Name': 'TextEdit', 'DataMinority_Area..sq.km.': 'TextEdit', 'DataMinority_Population': 'Range', 'DataMinority_Dwellings': 'Range', 'DataMinority_Households': 'Range', 'DataMinority_LowIncome': 'TextEdit', 'DataMinority_LowIncPercent': 'TextEdit', 'DataMinority_Aboriginal': 'Range', 'DataMinority_AborigPercent': 'TextEdit', 'DataMinority_VisMinority': 'Range', 'DataMinority_VisMinorityPercent': 'TextEdit', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldImages', {'CDUID': 'TextEdit', 'CDNAME': 'TextEdit', 'CDTYPE': 'TextEdit', 'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'Tryincome32_field_1': 'TextEdit', 'Tryincome32_Shape.Area': 'TextEdit', 'Tryincome32_name': 'TextEdit', 'Tryincome32_Adjusted.Population..previous.Census.': 'TextEdit', 'Tryincome32_Type': 'TextEdit', 'Tryincome32_Region.Name': 'TextEdit', 'Tryincome32_Area..sq.km.': 'TextEdit', 'Tryincome32_Population': 'TextEdit', 'Tryincome32_Dwellings': 'TextEdit', 'Tryincome32_Households': 'TextEdit', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'TextEdit', });
lyr_Zonesbrulees_8.set('fieldImages', {'NFIREID': '', 'BASRC': '', 'FIREMAPS': '', 'FIREMAPM': '', 'FIRECAUS': '', 'BURNCLAS': '', 'COMM': '', 'CDATE': '', 'SDATE': '', 'EDATE': '', 'AFSDATE': '', 'AFEDATE': '', 'CAPDATE': '', 'BT_GID': '', 'SALVAGE': '', 'PB_HARV': '', 'UTOTAREA': '', 'NBACVERS': '', 'TOTAREA': '', 'AREAMODA': '', 'AREAMODB': '', 'AREAMODT': '', 'AREAMODV': '', });
lyr_Minoritevisible_1.set('fieldLabels', {'CDUID': 'no label', 'CDNAME': 'no label', 'CDTYPE': 'no label', 'PRUID': 'no label', 'PRNAME': 'no label', 'DataMinority_field_1': 'no label', 'DataMinority_Shape.Area': 'no label', 'DataMinority_name': 'no label', 'DataMinority_Adjusted.Population..previous.Census.': 'no label', 'DataMinority_PR_UID': 'no label', 'DataMinority_Type': 'no label', 'DataMinority_Region.Name': 'no label', 'DataMinority_Area..sq.km.': 'no label', 'DataMinority_Population': 'no label', 'DataMinority_Dwellings': 'no label', 'DataMinority_Households': 'no label', 'DataMinority_LowIncome': 'no label', 'DataMinority_LowIncPercent': 'no label', 'DataMinority_Aboriginal': 'no label', 'DataMinority_AborigPercent': 'no label', 'DataMinority_VisMinority': 'no label', 'DataMinority_VisMinorityPercent': 'no label', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldLabels', {'CDUID': 'no label', 'CDNAME': 'no label', 'CDTYPE': 'no label', 'PRUID': 'no label', 'PRNAME': 'no label', 'Tryincome32_field_1': 'no label', 'Tryincome32_Shape.Area': 'no label', 'Tryincome32_name': 'no label', 'Tryincome32_Adjusted.Population..previous.Census.': 'no label', 'Tryincome32_Type': 'no label', 'Tryincome32_Region.Name': 'no label', 'Tryincome32_Area..sq.km.': 'no label', 'Tryincome32_Population': 'no label', 'Tryincome32_Dwellings': 'no label', 'Tryincome32_Households': 'no label', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'no label', });
lyr_Zonesbrulees_8.set('fieldLabels', {'NFIREID': 'no label', 'BASRC': 'no label', 'FIREMAPS': 'no label', 'FIREMAPM': 'no label', 'FIRECAUS': 'no label', 'BURNCLAS': 'no label', 'COMM': 'no label', 'CDATE': 'no label', 'SDATE': 'no label', 'EDATE': 'no label', 'AFSDATE': 'no label', 'AFEDATE': 'no label', 'CAPDATE': 'no label', 'BT_GID': 'no label', 'SALVAGE': 'no label', 'PB_HARV': 'no label', 'UTOTAREA': 'no label', 'NBACVERS': 'no label', 'TOTAREA': 'no label', 'AREAMODA': 'no label', 'AREAMODB': 'no label', 'AREAMODT': 'no label', 'AREAMODV': 'no label', });
lyr_Zonesbrulees_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});