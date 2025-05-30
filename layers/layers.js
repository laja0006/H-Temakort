var wms_layers = [];

var format_temkortfilerkommuneplan_0 = new ol.format.GeoJSON();
var features_temkortfilerkommuneplan_0 = format_temkortfilerkommuneplan_0.readFeatures(json_temkortfilerkommuneplan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerkommuneplan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerkommuneplan_0.addFeatures(features_temkortfilerkommuneplan_0);
var lyr_temkortfilerkommuneplan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerkommuneplan_0, 
                style: style_temkortfilerkommuneplan_0,
                popuplayertitle: 'temkortfiler — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerkommuneplan_0.png" /> temkortfiler — kommuneplan'
            });
var format_temkortfilerStrandbeskyttelse_1 = new ol.format.GeoJSON();
var features_temkortfilerStrandbeskyttelse_1 = format_temkortfilerStrandbeskyttelse_1.readFeatures(json_temkortfilerStrandbeskyttelse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerStrandbeskyttelse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerStrandbeskyttelse_1.addFeatures(features_temkortfilerStrandbeskyttelse_1);
var lyr_temkortfilerStrandbeskyttelse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerStrandbeskyttelse_1, 
                style: style_temkortfilerStrandbeskyttelse_1,
                popuplayertitle: 'temkortfiler — Strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerStrandbeskyttelse_1.png" /> temkortfiler — Strandbeskyttelse'
            });
var format_temkortfilerFrededeomrder_2 = new ol.format.GeoJSON();
var features_temkortfilerFrededeomrder_2 = format_temkortfilerFrededeomrder_2.readFeatures(json_temkortfilerFrededeomrder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerFrededeomrder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerFrededeomrder_2.addFeatures(features_temkortfilerFrededeomrder_2);
var lyr_temkortfilerFrededeomrder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerFrededeomrder_2, 
                style: style_temkortfilerFrededeomrder_2,
                popuplayertitle: 'temkortfiler — Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerFrededeomrder_2.png" /> temkortfiler — Fredede områder'
            });
var format_temkortfilerLokalplaner_3 = new ol.format.GeoJSON();
var features_temkortfilerLokalplaner_3 = format_temkortfilerLokalplaner_3.readFeatures(json_temkortfilerLokalplaner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerLokalplaner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerLokalplaner_3.addFeatures(features_temkortfilerLokalplaner_3);
var lyr_temkortfilerLokalplaner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerLokalplaner_3, 
                style: style_temkortfilerLokalplaner_3,
                popuplayertitle: 'temkortfiler — Lokalplaner',
                interactive: true,
    title: 'temkortfiler — Lokalplaner<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_0.png" /> 1024399<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_1.png" /> 1053515<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_2.png" /> 1061002<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_3.png" /> 1061022<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_4.png" /> 1061038<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_5.png" /> 1061103<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_6.png" /> 1061140<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_7.png" /> 1061206<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_8.png" /> 1061209<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_9.png" /> 1061210<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_10.png" /> 1061715<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_11.png" /> 1061734<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_12.png" /> 1061739<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_13.png" /> 1061746<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_14.png" /> 1061756<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_15.png" /> 1061757<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_16.png" /> 1061824<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_17.png" /> 1061829<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_18.png" /> 1062026<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_19.png" /> 1062121<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_20.png" /> 1070479<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_21.png" /> 1071381<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_22.png" /> 1074662<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_23.png" /> 1074664<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_24.png" /> 1074675<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_25.png" /> 1075214<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_26.png" /> 1075219<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_27.png" /> 1075387<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_28.png" /> 1075393<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_29.png" /> 1075552<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_30.png" /> 1075553<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_31.png" /> 1075577<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_32.png" /> 1075593<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_33.png" /> 1075598<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_34.png" /> 1075609<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_35.png" /> 1075669<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_36.png" /> 1075682<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_37.png" /> 1075695<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_38.png" /> 1075708<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_39.png" /> 1075710<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_40.png" /> 1075718<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_41.png" /> 1075751<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_42.png" /> 1075752<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_43.png" /> 1075779<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_44.png" /> 1075795<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_45.png" /> 1075800<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_46.png" /> 1075801<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_47.png" /> 1075815<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_48.png" /> 1075877<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_49.png" /> 1075893<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_50.png" /> 1075897<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_51.png" /> 1075900<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_52.png" /> 1075902<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_53.png" /> 1075905<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_54.png" /> 1075907<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_55.png" /> 1075908<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_56.png" /> 1076004<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_57.png" /> 1076010<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_58.png" /> 1076019<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_59.png" /> 1076041<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_60.png" /> 1076064<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_61.png" /> 1076086<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_62.png" /> 1076094<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_63.png" /> 1076107<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_64.png" /> 1076114<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_65.png" /> 1076115<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_66.png" /> 1076126<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_67.png" /> 1076129<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_68.png" /> 1076287<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_69.png" /> 1076379<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_70.png" /> 1076865<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_71.png" /> 1076868<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_72.png" /> 1076874<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_73.png" /> 1076892<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_74.png" /> 1076902<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_75.png" /> 1076939<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_76.png" /> 1076961<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_77.png" /> 1076968<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_78.png" /> 1077070<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_79.png" /> 1077082<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_80.png" /> 1077085<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_81.png" /> 1077086<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_82.png" /> 1077558<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_83.png" /> 1077565<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_84.png" /> 1078074<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_85.png" /> 1078075<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_86.png" /> 1078077<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_87.png" /> 1078184<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_88.png" /> 1078227<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_89.png" /> 1078229<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_90.png" /> 1078231<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_91.png" /> 1078248<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_92.png" /> 1078275<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_93.png" /> 1078279<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_94.png" /> 1078289<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_95.png" /> 1078346<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_96.png" /> 1078464<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_97.png" /> 1078465<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_98.png" /> 1078468<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_99.png" /> 1079122<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_100.png" /> 1079123<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_101.png" /> 1079666<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_102.png" /> 1079671<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_103.png" /> 1081381<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_104.png" /> 1084485<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_105.png" /> 1084491<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_106.png" /> 1084492<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_107.png" /> 1103890<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_108.png" /> 1109560<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_109.png" /> 1328884<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_110.png" /> 1359145<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_111.png" /> 1369547<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_112.png" /> 1374739<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_113.png" /> 1792902<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_114.png" /> 1869505<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_115.png" /> 2136388<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_116.png" /> 2186492<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_117.png" /> 2269185<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_118.png" /> 2641209<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_119.png" /> 2702963<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_120.png" /> 2702964<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_121.png" /> 2702965<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_122.png" /> 2702968<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_123.png" /> 2702969<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_124.png" /> 2702993<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_125.png" /> 2978253<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_126.png" /> 3016098<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_127.png" /> 3016099<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_128.png" /> 3016105<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_129.png" /> 3186913<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_130.png" /> 3188617<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_131.png" /> 3188619<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_132.png" /> 3812280<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_133.png" /> 3964626<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_134.png" /> 3964627<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_135.png" /> 3964812<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_136.png" /> 9419556<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_137.png" /> 9431987<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_138.png" /> 9431989<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_139.png" /> 9431990<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_140.png" /> 9431991<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_141.png" /> 9431992<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_142.png" /> 9431993<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_143.png" /> 9431994<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_144.png" /> 9690454<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_145.png" /> 9717080<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_146.png" /> 9731022<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_147.png" /> 9732835<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_148.png" /> 9732862<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_149.png" /> 9753254<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_150.png" /> 10353005<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_151.png" /> 10456675<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_152.png" /> 10478656<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_153.png" /> 10840028<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_154.png" /> 10900534<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_155.png" /> 10906517<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_156.png" /> 10985743<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_157.png" /> 11021467<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_158.png" /> 11126774<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_159.png" /> 11159816<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_160.png" /> 11176926<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_161.png" /> 11185105<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_162.png" /> 11198619<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_163.png" /> 11228193<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_164.png" /> 11240317<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_165.png" /> 11252419<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_166.png" /> 11307736<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_167.png" /> 11307768<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_168.png" /> 11317442<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_169.png" /> 11347122<br />\
    <img src="styles/legend/temkortfilerLokalplaner_3_170.png" /> <br />' });
var format_temkortfilerApotekhvidore_4 = new ol.format.GeoJSON();
var features_temkortfilerApotekhvidore_4 = format_temkortfilerApotekhvidore_4.readFeatures(json_temkortfilerApotekhvidore_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerApotekhvidore_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerApotekhvidore_4.addFeatures(features_temkortfilerApotekhvidore_4);
var lyr_temkortfilerApotekhvidore_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerApotekhvidore_4, 
                style: style_temkortfilerApotekhvidore_4,
                popuplayertitle: 'temkortfiler — Apotek hvidore',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerApotekhvidore_4.png" /> temkortfiler — Apotek hvidore'
            });
var format_temkortfilercaferhvidovre_5 = new ol.format.GeoJSON();
var features_temkortfilercaferhvidovre_5 = format_temkortfilercaferhvidovre_5.readFeatures(json_temkortfilercaferhvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilercaferhvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilercaferhvidovre_5.addFeatures(features_temkortfilercaferhvidovre_5);
var lyr_temkortfilercaferhvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilercaferhvidovre_5, 
                style: style_temkortfilercaferhvidovre_5,
                popuplayertitle: 'temkortfiler — cafer.hvidovre',
                interactive: true,
                title: '<img src="styles/legend/temkortfilercaferhvidovre_5.png" /> temkortfiler — cafer.hvidovre'
            });
var format_temkortfilerhvidovrehospital_6 = new ol.format.GeoJSON();
var features_temkortfilerhvidovrehospital_6 = format_temkortfilerhvidovrehospital_6.readFeatures(json_temkortfilerhvidovrehospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerhvidovrehospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerhvidovrehospital_6.addFeatures(features_temkortfilerhvidovrehospital_6);
var lyr_temkortfilerhvidovrehospital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerhvidovrehospital_6, 
                style: style_temkortfilerhvidovrehospital_6,
                popuplayertitle: 'temkortfiler — hvidovrehospital',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerhvidovrehospital_6.png" /> temkortfiler — hvidovrehospital'
            });
var format_temkortfilerskoler3_7 = new ol.format.GeoJSON();
var features_temkortfilerskoler3_7 = format_temkortfilerskoler3_7.readFeatures(json_temkortfilerskoler3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilerskoler3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilerskoler3_7.addFeatures(features_temkortfilerskoler3_7);
var lyr_temkortfilerskoler3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilerskoler3_7, 
                style: style_temkortfilerskoler3_7,
                popuplayertitle: 'temkortfiler — skoler3',
                interactive: true,
                title: '<img src="styles/legend/temkortfilerskoler3_7.png" /> temkortfiler — skoler3'
            });
var format_temkortfilersupermarkeder2_8 = new ol.format.GeoJSON();
var features_temkortfilersupermarkeder2_8 = format_temkortfilersupermarkeder2_8.readFeatures(json_temkortfilersupermarkeder2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilersupermarkeder2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilersupermarkeder2_8.addFeatures(features_temkortfilersupermarkeder2_8);
var lyr_temkortfilersupermarkeder2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilersupermarkeder2_8, 
                style: style_temkortfilersupermarkeder2_8,
                popuplayertitle: 'temkortfiler — supermarkeder2',
                interactive: true,
                title: '<img src="styles/legend/temkortfilersupermarkeder2_8.png" /> temkortfiler — supermarkeder2'
            });
var format_temkortfilersvmmehaller_9 = new ol.format.GeoJSON();
var features_temkortfilersvmmehaller_9 = format_temkortfilersvmmehaller_9.readFeatures(json_temkortfilersvmmehaller_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilersvmmehaller_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilersvmmehaller_9.addFeatures(features_temkortfilersvmmehaller_9);
var lyr_temkortfilersvmmehaller_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilersvmmehaller_9, 
                style: style_temkortfilersvmmehaller_9,
                popuplayertitle: 'temkortfiler — svømmehaller',
                interactive: true,
                title: '<img src="styles/legend/temkortfilersvmmehaller_9.png" /> temkortfiler — svømmehaller'
            });
var format_temkortfilertogstationer_10 = new ol.format.GeoJSON();
var features_temkortfilertogstationer_10 = format_temkortfilertogstationer_10.readFeatures(json_temkortfilertogstationer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temkortfilertogstationer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temkortfilertogstationer_10.addFeatures(features_temkortfilertogstationer_10);
var lyr_temkortfilertogstationer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temkortfilertogstationer_10, 
                style: style_temkortfilertogstationer_10,
                popuplayertitle: 'temkortfiler — togstationer',
                interactive: true,
                title: '<img src="styles/legend/temkortfilertogstationer_10.png" /> temkortfiler — togstationer'
            });

lyr_temkortfilerkommuneplan_0.setVisible(true);lyr_temkortfilerStrandbeskyttelse_1.setVisible(true);lyr_temkortfilerFrededeomrder_2.setVisible(true);lyr_temkortfilerLokalplaner_3.setVisible(true);lyr_temkortfilerApotekhvidore_4.setVisible(true);lyr_temkortfilercaferhvidovre_5.setVisible(true);lyr_temkortfilerhvidovrehospital_6.setVisible(true);lyr_temkortfilerskoler3_7.setVisible(true);lyr_temkortfilersupermarkeder2_8.setVisible(true);lyr_temkortfilersvmmehaller_9.setVisible(true);lyr_temkortfilertogstationer_10.setVisible(true);
var layersList = [lyr_temkortfilerkommuneplan_0,lyr_temkortfilerStrandbeskyttelse_1,lyr_temkortfilerFrededeomrder_2,lyr_temkortfilerLokalplaner_3,lyr_temkortfilerApotekhvidore_4,lyr_temkortfilercaferhvidovre_5,lyr_temkortfilerhvidovrehospital_6,lyr_temkortfilerskoler3_7,lyr_temkortfilersupermarkeder2_8,lyr_temkortfilersvmmehaller_9,lyr_temkortfilertogstationer_10];
lyr_temkortfilerkommuneplan_0.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_temkortfilerStrandbeskyttelse_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_temkortfilerFrededeomrder_2.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_temkortfilerLokalplaner_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_temkortfilerApotekhvidore_4.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'by': 'by', 'website': 'website', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilercaferhvidovre_5.set('fieldAliases', {'fid': 'fid', 'Cafenavn': 'Cafenavn', 'Adresse': 'Adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilerhvidovrehospital_6.set('fieldAliases', {'fid': 'fid', 'Hospitalsn': 'Hospitalsn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilerskoler3_7.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilersupermarkeder2_8.set('fieldAliases', {'fid': 'fid', 'Butiksnavn': 'Butiksnavn', 'Adresse': 'Adresse', 'By': 'By', 'field_4': 'field_4', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilersvmmehaller_9.set('fieldAliases', {'fid': 'fid', 'Svømmehal': 'Svømmehal', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temkortfilertogstationer_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temkortfilerkommuneplan_0.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_temkortfilerStrandbeskyttelse_1.set('fieldImages', {'fid': '', 'oid': '', 'id': '', 'planid': '', 'objektkode': '', 'komnr': '', 'plannavn': '', 'doklink': '', 'datoforsl': '', 'datovedt': '', 'datoaflyst': '', 'datoikraft': '', 'datoslut': '', 'aktuel': '', 'datooprt': '', 'datoopdt': '', 'status': '', 'datostart': '', 'glkomnr': '', 'kommunenavn': '', 'glkomnavn': '', 'glkomnavn_besk': '', });
lyr_temkortfilerFrededeomrder_2.set('fieldImages', {'fid': '', 'Temakode': '', 'Temanavn': '', 'Objekt_id': '', 'Version_id': '', 'Systid_fra': '', 'Systid_til': '', 'Oprettet': '', 'Oprindkode': '', 'Oprindelse': '', 'Statuskode': '', 'Status': '', 'Off_kode': '', 'Offentlig': '', 'CVR_kode': '', 'CVR_navn': '', 'Bruger_id': '', 'Link': '', 'Shape_area': '', 'Shape_leng': '', 'Fred_tkode': '', 'Fred_tnavn': '', 'Reg_nr': '', 'Fred_navn': '', 'Aendr_kode': '', 'Aendrbegr': '', 'Aar_fredn': '', 'Gyldig_fra': '', 'Gyldig_til': '', });
lyr_temkortfilerLokalplaner_3.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_temkortfilerApotekhvidore_4.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'website': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_temkortfilercaferhvidovre_5.set('fieldImages', {'fid': '', 'Cafenavn': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temkortfilerhvidovrehospital_6.set('fieldImages', {'fid': '', 'Hospitalsn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temkortfilerskoler3_7.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_temkortfilersupermarkeder2_8.set('fieldImages', {'fid': '', 'Butiksnavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'field_4': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temkortfilersvmmehaller_9.set('fieldImages', {'fid': '', 'Svømmehal': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temkortfilertogstationer_10.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_temkortfilerkommuneplan_0.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_temkortfilerStrandbeskyttelse_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_temkortfilerFrededeomrder_2.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_temkortfilerLokalplaner_3.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_temkortfilerApotekhvidore_4.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'website': 'no label', });
lyr_temkortfilercaferhvidovre_5.set('fieldLabels', {'fid': 'no label', 'Cafenavn': 'no label', 'Adresse': 'no label', 'by': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_temkortfilerhvidovrehospital_6.set('fieldLabels', {'fid': 'no label', 'Hospitalsn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_temkortfilerskoler3_7.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'hidden field', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_temkortfilersupermarkeder2_8.set('fieldLabels', {'fid': 'no label', 'Butiksnavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'field_4': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_temkortfilersvmmehaller_9.set('fieldLabels', {'fid': 'no label', 'Svømmehal': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_temkortfilertogstationer_10.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', });
lyr_temkortfilertogstationer_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});