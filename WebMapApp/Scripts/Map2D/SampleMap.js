var map = new OpenLayers.Map("map");

var opl_wms = new OpenLayers.Layer.WMS("test"
    ,"http://vmap0.tiles.osgeo.org/wms/vmap0"
    ,{layers: "basic"}
);

map.addLayer(opl_wms);