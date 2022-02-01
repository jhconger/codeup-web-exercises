mapboxgl.accessToken = token;
var accessToken = token;
mapboxgl.accessToken = token;
mapboxgl.accessToken = token;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4916, 29.4252],
    zoom: 8
});
const nav = new mapboxgl.NavigationControl({
    showZoom: true
});

$(document).ready(function () {
    $('#zoom5').click(function (e) {
        map.flyTo({zoom: 5});
    });
    $(document).ready(function () {
        $('#zoom10').click(function (e) {
            map.flyTo({zoom: 10});
        });
        $(document).ready(function () {
            $('#zoom15').click(function (e) {
                map.flyTo({zoom: 15});
            })
        });
    });
});


$(document).ready(function () {
    $(".removeMarkers").click(function () {
        $('svg').toggle()
    });
});

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weathertoken,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);
})

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }

    const geocoder = new MapboxGeocoder({
        mapboxgl: mapboxgl,
        accessToken: mapboxgl.accessToken,
        marker: false
    })

    geocoder.on('result', e => {
        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(e.result.center)
            .addTo(map)
        marker.on('dragend', function (e) {
            var lngLat = e.target.getLngLat();
            console.log(lngLat['lat'])
            console.log(lngLat['lng'])
        })
    })
    map.addControl(geocoder)

    marker.on('dragend', function () {
        var currentLocation = marker.getLngLat()
        console.log(currentLocation)
        // $('#weather').empty();
        // weather(currentLocation)
    });

//search function
//     $('#button').click(function(e){
//         //the below is the same as console.log(e.target.value);
//         var userInput = $('#userInput').val()
//         console.log(userInput);
//         var searchLocation = geocode(userInput, token);
//         searchLocation.then(function(coordinates){
//             console.log(coordinates)
//             var searchLat = coordinates[0];
//             var searchLng = coordinates[1];
//             var userCoordinates = [searchLat, searchLng];
//             console.log(userCoordinates);
//             $('#weather-info').empty();
//             marker.setLngLat(userCoordinates);
//             weather([searchLng, searchLat]);
//
//             map.flyTo({
//                 center:[coordinates[0], coordinates[1]]
//             })
//
//
//         });
//
//     })


// weather forecast API
//
//
//
    var currentLocation = marker.getLngLat()

    function weather() {
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: weathertoken,
            lat: 'lat',
            lon: 'lon',
            currentLocation,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
        });
    }




//     $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + x[0] +
//         "&lon=" + x[1] + "&exclude=current, hourly, minutely&appID=" + weathertoken).done(function (resp) {
//         console.log(resp);
//     });
// });
//             var weatherDiv = '';
//             for(var i = 0; i <=4; i++) {

//
//                 /* console.log(resp);*/
//                 var todayDate = new Date(resp.daily[i].dt * 1000).toDateString();
//                 /*  console.log(todayDate);*/
//                 var currentTemp = resp.daily[i].temp.day.toFixed(0);
//                 weatherHTML += '<div class="col-2 card-header" style="width: 18em;">' + todayDate
//                 weatherHTML += '<div class="list-group-item"><p>' + "Current Temperature: " + currentTemp + '</p></div>'
//                 weatherHTML += '<div class="list-group-item"><p>' + "Description: " + resp.daily[i].weather[0].description + '</p></div>'
//                 weatherHTML += '<div class="list-group-item"><p>' + '<img src=http://openweathermap.org/img/w/' + resp.daily[0].weather[0].icon + '.png></p></div>'
//                 weatherHTML += '<div class="list-group-item"><p>' + "Humidity %" + resp.daily[i].humidity + '</p></div>'
//                 weatherHTML += '<div class="list-group-item"><p>' + "Wind Speed: " + resp.daily[i].wind_speed + '</p></div>'
//                 weatherHTML += '<div class="list-group-item"><p>' + "Pressure: " + resp.daily[i].pressure + '</p></div>'
//                 weatherHTML += '</div>'
//                 weatherHTML += '</div>'
//
//             }
//             $('#weather-info').append(weatherHTML);
//             /*     console.log(weatherHTML);*/
//         })
//
//     }
//     var saCoordinates = [29.4241, -98.4936];
//     weather(saCoordinates);
//
//     function geocode(search, token) {
//         var baseUrl = 'https://api.mapbox.com';
//         var endPoint = '/geocoding/v5/mapbox.places/';
//         return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//             .then(function (res) {
//                 return res.json();
//                 // to get all the data from the request, comment out the following three lines...
//             }).then(function (data) {
//                 return data.features[0].center;
//             });
//     }
// });
