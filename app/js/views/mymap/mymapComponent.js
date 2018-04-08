(function(){
'use strict';

angular.module('mappy.mymap', ['mappy.utils'])
    .controller('MymapController', ['MAPBOX_TOKEN',
    function(MAPBOX_TOKEN){
        mapboxgl.accessToken = MAPBOX_TOKEN;
        var map = new mapboxgl.Map({
            container: 'mymap',
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [103.8185, 1.30688],
            zoom: 13
        });
        map.addControl(new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }), 'top-left');
    }])
    .component('ngMapbox', {
        templateUrl : 'js/views/mymap/mymap.html',
        controller  : 'MymapController as mymapCtrl'
    })
})();