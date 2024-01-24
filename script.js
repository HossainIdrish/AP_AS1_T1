var map = L.map('map').setView([38.638363, -90.279093], 8);

  // load a tile layer
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var marker1 = L.marker([38.62175, -90.33178]).addTo(map);
var marker2 = L.marker([38.638363, -90.279093]).addTo(map);
var marker3 = L.marker([38.625085, -90.186804]).addTo(map);
var marker4 = L.marker([38.637653, -90.240328]).addTo(map);
var marker5 = L.marker([38.614859, -90.325424]).addTo(map);


marker1.bindPopup("<b>Mapplewood Walmart</b><br>Super Store").openPopup();
marker2.bindPopup("<b>Festival And Parking Plaza</b><br>Parking Lot").openPopup();
marker3.bindPopup("<b>GateWay Arch</b><br>Tourist Place").openPopup();
marker4.bindPopup("<b>Masjid Bilal</b><br>Mosque").openPopup();
marker5.bindPopup("<b>Mapplewood Public Library</b><br>Library").openPopup();


