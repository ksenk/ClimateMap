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
              wms_layers.push([lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3, 0]);var lyr_Polluantsrejetesdansleaudesurface_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps-cartes.ec.gc.ca/arcgis/services/NPRI_INRP/NPRI_INRP/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Polluants rejetes dans l'eau de surface",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Polluantsrejetesdansleaudesurface_4, 0]);var lyr_Polluantsrejetesdanslesol_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps-cartes.ec.gc.ca/arcgis/services/NPRI_INRP/NPRI_INRP/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Polluants rejetes dans le sol",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Polluantsrejetesdanslesol_5, 0]);var lyr_PolluantsrejetesdanslairnonCAC_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps-cartes.ec.gc.ca/arcgis/services/NPRI_INRP/NPRI_INRP/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Polluants rejetes dans l'air, non-CAC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PolluantsrejetesdanslairnonCAC_6, 0]);var lyr_PolluantsrejetesdanslairCAC_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps-cartes.ec.gc.ca/arcgis/services/NPRI_INRP/NPRI_INRP/MapServer/WmsServer?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Polluants rejetes dans l'air, CAC",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PolluantsrejetesdanslairCAC_7, 0]);var format_RejetsdepolluantsT_8 = new ol.format.GeoJSON();
var features_RejetsdepolluantsT_8 = format_RejetsdepolluantsT_8.readFeatures(json_RejetsdepolluantsT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RejetsdepolluantsT_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RejetsdepolluantsT_8.addFeatures(features_RejetsdepolluantsT_8);var lyr_RejetsdepolluantsT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RejetsdepolluantsT_8, 
                style: style_RejetsdepolluantsT_8,
    title: 'Rejets de polluants (T)<br />\
    <img src="styles/legend/RejetsdepolluantsT_8_0.png" /> 0.0 - 3.5<br />\
    <img src="styles/legend/RejetsdepolluantsT_8_1.png" /> 3.5 - 28.2<br />\
    <img src="styles/legend/RejetsdepolluantsT_8_2.png" /> 28.2 - 72.8<br />\
    <img src="styles/legend/RejetsdepolluantsT_8_3.png" /> 72.8 - 200.3<br />\
    <img src="styles/legend/RejetsdepolluantsT_8_4.png" /> 200.3 - 117939.2<br />'
        });var format_Qualitedeleau_9 = new ol.format.GeoJSON();
var features_Qualitedeleau_9 = format_Qualitedeleau_9.readFeatures(json_Qualitedeleau_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qualitedeleau_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Qualitedeleau_9.addFeatures(features_Qualitedeleau_9);var lyr_Qualitedeleau_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qualitedeleau_9, 
                style: style_Qualitedeleau_9,
    title: 'Qualite de l'eau<br />\
    <img src="styles/legend/Qualitedeleau_9_0.png" /> Excellent<br />\
    <img src="styles/legend/Qualitedeleau_9_1.png" /> Fair<br />\
    <img src="styles/legend/Qualitedeleau_9_2.png" /> Good<br />\
    <img src="styles/legend/Qualitedeleau_9_3.png" /> Marginal<br />\
    <img src="styles/legend/Qualitedeleau_9_4.png" /> Poor<br />\
    <img src="styles/legend/Qualitedeleau_9_5.png" /> <br />'
        });var format_ConcentrationmaximalededioxydedazotePPB_10 = new ol.format.GeoJSON();
var features_ConcentrationmaximalededioxydedazotePPB_10 = format_ConcentrationmaximalededioxydedazotePPB_10.readFeatures(json_ConcentrationmaximalededioxydedazotePPB_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentrationmaximalededioxydedazotePPB_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ConcentrationmaximalededioxydedazotePPB_10.addFeatures(features_ConcentrationmaximalededioxydedazotePPB_10);var lyr_ConcentrationmaximalededioxydedazotePPB_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConcentrationmaximalededioxydedazotePPB_10, 
                style: style_ConcentrationmaximalededioxydedazotePPB_10,
    title: 'Concentration maximale de dioxyde d'azote (PPB)<br />\
    <img src="styles/legend/ConcentrationmaximalededioxydedazotePPB_10_0.png" /> 3.0 - 15.0<br />\
    <img src="styles/legend/ConcentrationmaximalededioxydedazotePPB_10_1.png" /> 15.0 - 27.0<br />\
    <img src="styles/legend/ConcentrationmaximalededioxydedazotePPB_10_2.png" /> 27.0 - 39.0<br />\
    <img src="styles/legend/ConcentrationmaximalededioxydedazotePPB_10_3.png" /> 39.0 - 51.0<br />\
    <img src="styles/legend/ConcentrationmaximalededioxydedazotePPB_10_4.png" /> 51.0 - 63.0<br />'
        });var format_ConcentrationmoyennededioxydedazotePPB_11 = new ol.format.GeoJSON();
var features_ConcentrationmoyennededioxydedazotePPB_11 = format_ConcentrationmoyennededioxydedazotePPB_11.readFeatures(json_ConcentrationmoyennededioxydedazotePPB_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentrationmoyennededioxydedazotePPB_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ConcentrationmoyennededioxydedazotePPB_11.addFeatures(features_ConcentrationmoyennededioxydedazotePPB_11);var lyr_ConcentrationmoyennededioxydedazotePPB_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConcentrationmoyennededioxydedazotePPB_11, 
                style: style_ConcentrationmoyennededioxydedazotePPB_11,
    title: 'Concentration moyenne de dioxyde d'azote (PPB)<br />\
    <img src="styles/legend/ConcentrationmoyennededioxydedazotePPB_11_0.png" /> 0.2000 - 3.8600<br />\
    <img src="styles/legend/ConcentrationmoyennededioxydedazotePPB_11_1.png" /> 3.8600 - 7.5200<br />\
    <img src="styles/legend/ConcentrationmoyennededioxydedazotePPB_11_2.png" /> 7.5200 - 11.1800<br />\
    <img src="styles/legend/ConcentrationmoyennededioxydedazotePPB_11_3.png" /> 11.1800 - 14.8400<br />\
    <img src="styles/legend/ConcentrationmoyennededioxydedazotePPB_11_4.png" /> 14.8400 - 18.5000<br />'
        });var format_ConcentrationmaximaledozonePPB_12 = new ol.format.GeoJSON();
var features_ConcentrationmaximaledozonePPB_12 = format_ConcentrationmaximaledozonePPB_12.readFeatures(json_ConcentrationmaximaledozonePPB_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentrationmaximaledozonePPB_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ConcentrationmaximaledozonePPB_12.addFeatures(features_ConcentrationmaximaledozonePPB_12);var lyr_ConcentrationmaximaledozonePPB_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConcentrationmaximaledozonePPB_12, 
                style: style_ConcentrationmaximaledozonePPB_12,
    title: 'Concentration maximale d'ozone (PPB)<br />\
    <img src="styles/legend/ConcentrationmaximaledozonePPB_12_0.png" /> 32.5000 - 48.6000<br />\
    <img src="styles/legend/ConcentrationmaximaledozonePPB_12_1.png" /> 48.6000 - 64.7000<br />\
    <img src="styles/legend/ConcentrationmaximaledozonePPB_12_2.png" /> 64.7000 - 80.8000<br />\
    <img src="styles/legend/ConcentrationmaximaledozonePPB_12_3.png" /> 80.8000 - 96.9000<br />\
    <img src="styles/legend/ConcentrationmaximaledozonePPB_12_4.png" /> 96.9000 - 113.0000<br />'
        });var format_ConcentrationmoyennedozonePPB_13 = new ol.format.GeoJSON();
var features_ConcentrationmoyennedozonePPB_13 = format_ConcentrationmoyennedozonePPB_13.readFeatures(json_ConcentrationmoyennedozonePPB_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcentrationmoyennedozonePPB_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ConcentrationmoyennedozonePPB_13.addFeatures(features_ConcentrationmoyennedozonePPB_13);var lyr_ConcentrationmoyennedozonePPB_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConcentrationmoyennedozonePPB_13, 
                style: style_ConcentrationmoyennedozonePPB_13,
    title: 'Concentration moyenne d'ozone (PPB)<br />\
    <img src="styles/legend/ConcentrationmoyennedozonePPB_13_0.png" /> 11.0000 - 17.4000<br />\
    <img src="styles/legend/ConcentrationmoyennedozonePPB_13_1.png" /> 17.4000 - 23.8000<br />\
    <img src="styles/legend/ConcentrationmoyennedozonePPB_13_2.png" /> 23.8000 - 30.2000<br />\
    <img src="styles/legend/ConcentrationmoyennedozonePPB_13_3.png" /> 30.2000 - 36.6000<br />\
    <img src="styles/legend/ConcentrationmoyennedozonePPB_13_4.png" /> 36.6000 - 43.0000<br />'
        });var format_Concentrationmaximaledesparticulesfinesugm3_14 = new ol.format.GeoJSON();
var features_Concentrationmaximaledesparticulesfinesugm3_14 = format_Concentrationmaximaledesparticulesfinesugm3_14.readFeatures(json_Concentrationmaximaledesparticulesfinesugm3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concentrationmaximaledesparticulesfinesugm3_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Concentrationmaximaledesparticulesfinesugm3_14.addFeatures(features_Concentrationmaximaledesparticulesfinesugm3_14);var lyr_Concentrationmaximaledesparticulesfinesugm3_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concentrationmaximaledesparticulesfinesugm3_14, 
                style: style_Concentrationmaximaledesparticulesfinesugm3_14,
    title: 'Concentration maximale des particules fines (ug/m^3)<br />\
    <img src="styles/legend/Concentrationmaximaledesparticulesfinesugm3_14_0.png" /> 1 - 0<br />\
    <img src="styles/legend/Concentrationmaximaledesparticulesfinesugm3_14_1.png" /> 0 - 10<br />\
    <img src="styles/legend/Concentrationmaximaledesparticulesfinesugm3_14_2.png" /> 10 - 14<br />\
    <img src="styles/legend/Concentrationmaximaledesparticulesfinesugm3_14_3.png" /> 14 - 18<br />\
    <img src="styles/legend/Concentrationmaximaledesparticulesfinesugm3_14_4.png" /> 18 - 258<br />'
        });var format_Concentrationmoyennedesparticulesfinesugm3_15 = new ol.format.GeoJSON();
var features_Concentrationmoyennedesparticulesfinesugm3_15 = format_Concentrationmoyennedesparticulesfinesugm3_15.readFeatures(json_Concentrationmoyennedesparticulesfinesugm3_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concentrationmoyennedesparticulesfinesugm3_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Concentrationmoyennedesparticulesfinesugm3_15.addFeatures(features_Concentrationmoyennedesparticulesfinesugm3_15);var lyr_Concentrationmoyennedesparticulesfinesugm3_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concentrationmoyennedesparticulesfinesugm3_15, 
                style: style_Concentrationmoyennedesparticulesfinesugm3_15,
    title: 'Concentration moyenne des particules fines (ug/m^3)<br />\
    <img src="styles/legend/Concentrationmoyennedesparticulesfinesugm3_15_0.png" /> 0.3000 - 4.1400<br />\
    <img src="styles/legend/Concentrationmoyennedesparticulesfinesugm3_15_1.png" /> 4.1400 - 7.9800<br />\
    <img src="styles/legend/Concentrationmoyennedesparticulesfinesugm3_15_2.png" /> 7.9800 - 11.8200<br />\
    <img src="styles/legend/Concentrationmoyennedesparticulesfinesugm3_15_3.png" /> 11.8200 - 15.6600<br />\
    <img src="styles/legend/Concentrationmoyennedesparticulesfinesugm3_15_4.png" /> 15.6600 - 19.5000<br />'
        });var format_GazaeffetdeserrekTCO2eq_16 = new ol.format.GeoJSON();
var features_GazaeffetdeserrekTCO2eq_16 = format_GazaeffetdeserrekTCO2eq_16.readFeatures(json_GazaeffetdeserrekTCO2eq_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GazaeffetdeserrekTCO2eq_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GazaeffetdeserrekTCO2eq_16.addFeatures(features_GazaeffetdeserrekTCO2eq_16);var lyr_GazaeffetdeserrekTCO2eq_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GazaeffetdeserrekTCO2eq_16, 
                style: style_GazaeffetdeserrekTCO2eq_16,
    title: 'Gaz a effet de serre (kT CO2 eq)<br />\
    <img src="styles/legend/GazaeffetdeserrekTCO2eq_16_0.png" /> 0.0 - 12.9<br />\
    <img src="styles/legend/GazaeffetdeserrekTCO2eq_16_1.png" /> 12.9 - 19.9<br />\
    <img src="styles/legend/GazaeffetdeserrekTCO2eq_16_2.png" /> 19.9 - 36.5<br />\
    <img src="styles/legend/GazaeffetdeserrekTCO2eq_16_3.png" /> 36.5 - 96.7<br />\
    <img src="styles/legend/GazaeffetdeserrekTCO2eq_16_4.png" /> 96.7 - 12733.0<br />'
        });var lyr_Climateactionsfinancementgouvernmental_17 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Climateactionsfinancementgouvernmental_17, 0]);

lyr_OpenStreetMapWMSparterrestris_0.setVisible(true);lyr_Minoritevisible_1.setVisible(true);lyr_RevenuannueltotalparindividuCAD_2.setVisible(true);lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3.setVisible(true);lyr_Polluantsrejetesdansleaudesurface_4.setVisible(true);lyr_Polluantsrejetesdanslesol_5.setVisible(true);lyr_PolluantsrejetesdanslairnonCAC_6.setVisible(true);lyr_PolluantsrejetesdanslairCAC_7.setVisible(true);lyr_RejetsdepolluantsT_8.setVisible(true);lyr_Qualitedeleau_9.setVisible(true);lyr_ConcentrationmaximalededioxydedazotePPB_10.setVisible(true);lyr_ConcentrationmoyennededioxydedazotePPB_11.setVisible(true);lyr_ConcentrationmaximaledozonePPB_12.setVisible(true);lyr_ConcentrationmoyennedozonePPB_13.setVisible(true);lyr_Concentrationmaximaledesparticulesfinesugm3_14.setVisible(true);lyr_Concentrationmoyennedesparticulesfinesugm3_15.setVisible(true);lyr_GazaeffetdeserrekTCO2eq_16.setVisible(true);lyr_Climateactionsfinancementgouvernmental_17.setVisible(true);
var layersList = [lyr_OpenStreetMapWMSparterrestris_0,lyr_Minoritevisible_1,lyr_RevenuannueltotalparindividuCAD_2,lyr_FrontiereslegislativesdesterritoiresautochtonesauCanada_3,lyr_Polluantsrejetesdansleaudesurface_4,lyr_Polluantsrejetesdanslesol_5,lyr_PolluantsrejetesdanslairnonCAC_6,lyr_PolluantsrejetesdanslairCAC_7,lyr_RejetsdepolluantsT_8,lyr_Qualitedeleau_9,lyr_ConcentrationmaximalededioxydedazotePPB_10,lyr_ConcentrationmoyennededioxydedazotePPB_11,lyr_ConcentrationmaximaledozonePPB_12,lyr_ConcentrationmoyennedozonePPB_13,lyr_Concentrationmaximaledesparticulesfinesugm3_14,lyr_Concentrationmoyennedesparticulesfinesugm3_15,lyr_GazaeffetdeserrekTCO2eq_16,lyr_Climateactionsfinancementgouvernmental_17];
lyr_Minoritevisible_1.set('fieldAliases', {'CDUID': 'CDUID', 'CDNAME': 'CDNAME', 'CDTYPE': 'CDTYPE', 'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'DataMinority_field_1': 'DataMinority_field_1', 'DataMinority_Shape.Area': 'DataMinority_Shape.Area', 'DataMinority_name': 'DataMinority_name', 'DataMinority_Adjusted.Population..previous.Census.': 'DataMinority_Adjusted.Population..previous.Census.', 'DataMinority_PR_UID': 'DataMinority_PR_UID', 'DataMinority_Type': 'DataMinority_Type', 'DataMinority_Region.Name': 'DataMinority_Region.Name', 'DataMinority_Area..sq.km.': 'DataMinority_Area..sq.km.', 'DataMinority_Population': 'DataMinority_Population', 'DataMinority_Dwellings': 'DataMinority_Dwellings', 'DataMinority_Households': 'DataMinority_Households', 'DataMinority_LowIncome': 'DataMinority_LowIncome', 'DataMinority_LowIncPercent': 'DataMinority_LowIncPercent', 'DataMinority_Aboriginal': 'DataMinority_Aboriginal', 'DataMinority_AborigPercent': 'DataMinority_AborigPercent', 'DataMinority_VisMinority': 'DataMinority_VisMinority', 'DataMinority_VisMinorityPercent': 'DataMinority_VisMinorityPercent', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldAliases', {'CDUID': 'CDUID', 'CDNAME': 'CDNAME', 'CDTYPE': 'CDTYPE', 'PRUID': 'PRUID', 'PRNAME': 'PRNAME', 'Tryincome32_field_1': 'Tryincome32_field_1', 'Tryincome32_Shape.Area': 'Tryincome32_Shape.Area', 'Tryincome32_name': 'Tryincome32_name', 'Tryincome32_Adjusted.Population..previous.Census.': 'Tryincome32_Adjusted.Population..previous.Census.', 'Tryincome32_Type': 'Tryincome32_Type', 'Tryincome32_Region.Name': 'Tryincome32_Region.Name', 'Tryincome32_Area..sq.km.': 'Tryincome32_Area..sq.km.', 'Tryincome32_Population': 'Tryincome32_Population', 'Tryincome32_Dwellings': 'Tryincome32_Dwellings', 'Tryincome32_Households': 'Tryincome32_Households', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data', });
lyr_RejetsdepolluantsT_8.set('fieldAliases', {'REP_PERIOD': 'REP_PERIOD', 'NPRI_ID': 'NPRI_ID', 'COMP_NAME': 'COMP_NAME', 'FACI_NAME': 'FACI_NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'PROVINCE': 'PROVINCE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'DATUM': 'DATUM', 'NAICS4': 'NAICS4', 'NAICS4_NAME_EN': 'NAICS4_NAME_EN', 'NAICS4_NAME_FR': 'NAICS4_NAME_FR', 'NAICS6': 'NAICS6', 'NAICS6_NAME_EN': 'NAICS6_NAME_EN', 'NAICS6_NAME_FR': 'NAICS6_NAME_FR', 'INTUITIVE_SECTOR_NAME_E': 'INTUITIVE_SECTOR_NAME_E', 'INTUITIVE_SECTOR_NAME_F': 'INTUITIVE_SECTOR_NAME_F', 'UNITS': 'UNITS', 'TOTAL_ALL_RELEASES': 'TOTAL_ALL_RELEASES', 'SYMBOL': 'SYMBOL', 'URL_EN': 'URL_EN', 'URL_FR': 'URL_FR', });
lyr_Qualitedeleau_9.set('fieldAliases', {'Site number': 'Site number', 'Site name': 'Site name', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Drainage region ID': 'Drainage region ID', 'Land use category': 'Land use category', 'Tested substances': 'Tested substances', 'Core site?': 'Core site?', 'Sampling period': 'Sampling period', 'Category': 'Category', 'Report year': 'Report year', 'Site link': 'Site link', 'Site details': 'Site details', });
lyr_ConcentrationmaximalededioxydedazotePPB_10.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_ConcentrationmoyennededioxydedazotePPB_11.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_ConcentrationmaximaledozonePPB_12.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_ConcentrationmoyennedozonePPB_13.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_Concentrationmaximaledesparticulesfinesugm3_14.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_Concentrationmoyennedesparticulesfinesugm3_15.set('fieldAliases', {'Station number': 'Station number', 'Station name': 'Station name', 'Address': 'Address', 'City': 'City', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Local land use': 'Local land use', 'Station type': 'Station type', 'Concentration': 'Concentration', 'Units': 'Units', 'Station details': 'Station details', 'Report year': 'Report year', });
lyr_GazaeffetdeserrekTCO2eq_16.set('fieldAliases', {'Facility ID': 'Facility ID', 'Facility name': 'Facility name', 'Company name': 'Company name', 'City': 'City', 'Address': 'Address', 'Postal code': 'Postal code', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Total emissions': 'Total emissions', 'Units': 'Units', 'Report year': 'Report year', 'Industry classification': 'Industry classification', 'Industry classification link': 'Industry classification link', 'Facility information': 'Facility information', 'Facility details': 'Facility details', });
lyr_Minoritevisible_1.set('fieldImages', {'CDUID': 'TextEdit', 'CDNAME': 'TextEdit', 'CDTYPE': 'TextEdit', 'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'DataMinority_field_1': 'Range', 'DataMinority_Shape.Area': 'TextEdit', 'DataMinority_name': 'TextEdit', 'DataMinority_Adjusted.Population..previous.Census.': 'Range', 'DataMinority_PR_UID': 'Range', 'DataMinority_Type': 'TextEdit', 'DataMinority_Region.Name': 'TextEdit', 'DataMinority_Area..sq.km.': 'TextEdit', 'DataMinority_Population': 'Range', 'DataMinority_Dwellings': 'Range', 'DataMinority_Households': 'Range', 'DataMinority_LowIncome': 'TextEdit', 'DataMinority_LowIncPercent': 'TextEdit', 'DataMinority_Aboriginal': 'Range', 'DataMinority_AborigPercent': 'TextEdit', 'DataMinority_VisMinority': 'Range', 'DataMinority_VisMinorityPercent': 'TextEdit', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldImages', {'CDUID': 'TextEdit', 'CDNAME': 'TextEdit', 'CDTYPE': 'TextEdit', 'PRUID': 'TextEdit', 'PRNAME': 'TextEdit', 'Tryincome32_field_1': 'TextEdit', 'Tryincome32_Shape.Area': 'TextEdit', 'Tryincome32_name': 'TextEdit', 'Tryincome32_Adjusted.Population..previous.Census.': 'TextEdit', 'Tryincome32_Type': 'TextEdit', 'Tryincome32_Region.Name': 'TextEdit', 'Tryincome32_Area..sq.km.': 'TextEdit', 'Tryincome32_Population': 'TextEdit', 'Tryincome32_Dwellings': 'TextEdit', 'Tryincome32_Households': 'TextEdit', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'TextEdit', });
lyr_RejetsdepolluantsT_8.set('fieldImages', {'REP_PERIOD': 'Range', 'NPRI_ID': 'Range', 'COMP_NAME': 'TextEdit', 'FACI_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'PROVINCE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'DATUM': 'Range', 'NAICS4': 'Range', 'NAICS4_NAME_EN': 'TextEdit', 'NAICS4_NAME_FR': 'TextEdit', 'NAICS6': 'Range', 'NAICS6_NAME_EN': 'TextEdit', 'NAICS6_NAME_FR': 'TextEdit', 'INTUITIVE_SECTOR_NAME_E': 'TextEdit', 'INTUITIVE_SECTOR_NAME_F': 'TextEdit', 'UNITS': 'TextEdit', 'TOTAL_ALL_RELEASES': 'TextEdit', 'SYMBOL': 'Range', 'URL_EN': 'TextEdit', 'URL_FR': 'TextEdit', });
lyr_Qualitedeleau_9.set('fieldImages', {'Site number': 'TextEdit', 'Site name': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Drainage region ID': 'Range', 'Land use category': 'TextEdit', 'Tested substances': 'TextEdit', 'Core site?': 'Range', 'Sampling period': 'TextEdit', 'Category': 'TextEdit', 'Report year': 'Range', 'Site link': 'TextEdit', 'Site details': 'TextEdit', });
lyr_ConcentrationmaximalededioxydedazotePPB_10.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'Range', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_ConcentrationmoyennededioxydedazotePPB_11.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'TextEdit', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_ConcentrationmaximaledozonePPB_12.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'TextEdit', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_ConcentrationmoyennedozonePPB_13.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'TextEdit', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_Concentrationmaximaledesparticulesfinesugm3_14.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'TextEdit', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_Concentrationmoyennedesparticulesfinesugm3_15.set('fieldImages', {'Station number': 'Range', 'Station name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Local land use': 'TextEdit', 'Station type': 'TextEdit', 'Concentration': 'TextEdit', 'Units': 'TextEdit', 'Station details': 'TextEdit', 'Report year': 'Range', });
lyr_GazaeffetdeserrekTCO2eq_16.set('fieldImages', {'Facility ID': 'Range', 'Facility name': 'TextEdit', 'Company name': 'TextEdit', 'City': 'TextEdit', 'Address': 'TextEdit', 'Postal code': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Total emissions': 'TextEdit', 'Units': 'TextEdit', 'Report year': 'Range', 'Industry classification': 'TextEdit', 'Industry classification link': 'TextEdit', 'Facility information': 'TextEdit', 'Facility details': 'TextEdit', });
lyr_Minoritevisible_1.set('fieldLabels', {'CDUID': 'no label', 'CDNAME': 'no label', 'CDTYPE': 'no label', 'PRUID': 'no label', 'PRNAME': 'no label', 'DataMinority_field_1': 'no label', 'DataMinority_Shape.Area': 'no label', 'DataMinority_name': 'no label', 'DataMinority_Adjusted.Population..previous.Census.': 'no label', 'DataMinority_PR_UID': 'no label', 'DataMinority_Type': 'no label', 'DataMinority_Region.Name': 'no label', 'DataMinority_Area..sq.km.': 'no label', 'DataMinority_Population': 'no label', 'DataMinority_Dwellings': 'no label', 'DataMinority_Households': 'no label', 'DataMinority_LowIncome': 'no label', 'DataMinority_LowIncPercent': 'no label', 'DataMinority_Aboriginal': 'no label', 'DataMinority_AborigPercent': 'no label', 'DataMinority_VisMinority': 'no label', 'DataMinority_VisMinorityPercent': 'no label', });
lyr_RevenuannueltotalparindividuCAD_2.set('fieldLabels', {'CDUID': 'no label', 'CDNAME': 'no label', 'CDTYPE': 'no label', 'PRUID': 'no label', 'PRNAME': 'no label', 'Tryincome32_field_1': 'no label', 'Tryincome32_Shape.Area': 'no label', 'Tryincome32_name': 'no label', 'Tryincome32_Adjusted.Population..previous.Census.': 'no label', 'Tryincome32_Type': 'no label', 'Tryincome32_Region.Name': 'no label', 'Tryincome32_Area..sq.km.': 'no label', 'Tryincome32_Population': 'no label', 'Tryincome32_Dwellings': 'no label', 'Tryincome32_Households': 'no label', 'Tryincome32_v_CA16_2201..Total...Income.statistics.in.2015.for.the.population.aged.15.years.and.over.in.private.households...100..data': 'no label', });
lyr_RejetsdepolluantsT_8.set('fieldLabels', {'REP_PERIOD': 'no label', 'NPRI_ID': 'no label', 'COMP_NAME': 'no label', 'FACI_NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'PROVINCE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'DATUM': 'no label', 'NAICS4': 'no label', 'NAICS4_NAME_EN': 'no label', 'NAICS4_NAME_FR': 'no label', 'NAICS6': 'no label', 'NAICS6_NAME_EN': 'no label', 'NAICS6_NAME_FR': 'no label', 'INTUITIVE_SECTOR_NAME_E': 'no label', 'INTUITIVE_SECTOR_NAME_F': 'no label', 'UNITS': 'no label', 'TOTAL_ALL_RELEASES': 'no label', 'SYMBOL': 'no label', 'URL_EN': 'no label', 'URL_FR': 'no label', });
lyr_Qualitedeleau_9.set('fieldLabels', {'Site number': 'no label', 'Site name': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Drainage region ID': 'no label', 'Land use category': 'no label', 'Tested substances': 'no label', 'Core site?': 'no label', 'Sampling period': 'no label', 'Category': 'no label', 'Report year': 'no label', 'Site link': 'no label', 'Site details': 'no label', });
lyr_ConcentrationmaximalededioxydedazotePPB_10.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_ConcentrationmoyennededioxydedazotePPB_11.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_ConcentrationmaximaledozonePPB_12.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_ConcentrationmoyennedozonePPB_13.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_Concentrationmaximaledesparticulesfinesugm3_14.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_Concentrationmoyennedesparticulesfinesugm3_15.set('fieldLabels', {'Station number': 'no label', 'Station name': 'no label', 'Address': 'no label', 'City': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Local land use': 'no label', 'Station type': 'no label', 'Concentration': 'no label', 'Units': 'no label', 'Station details': 'no label', 'Report year': 'no label', });
lyr_GazaeffetdeserrekTCO2eq_16.set('fieldLabels', {'Facility ID': 'no label', 'Facility name': 'no label', 'Company name': 'no label', 'City': 'no label', 'Address': 'no label', 'Postal code': 'no label', 'Province': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Total emissions': 'no label', 'Units': 'no label', 'Report year': 'no label', 'Industry classification': 'no label', 'Industry classification link': 'no label', 'Facility information': 'no label', 'Facility details': 'no label', });
lyr_GazaeffetdeserrekTCO2eq_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});