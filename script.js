var mymap = L.map('mapid').setView([45.5, -120], 10);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

    var marker1 = L.marker([38.6247, -90.1848]).addTo(mymap);
    var marker2 = L.marker([38.6128, -90.2591]).addTo(mymap);
    var marker3 = L.marker([38.6383, -90.2928]).addTo(mymap);
    var marker4 = L.marker([38.6403, -90.2849]).addTo(mymap);
    var marker5 = L.marker([38.6339, -90.2004]).addTo(mymap);
   
marker1.bindPopup("<b>Gateway Arch</b><br>The iconic 630-ft-tall monument.").openPopup();
marker2.bindPopup("<b>Missouri Botanical Garden</b><br>79 acres of horticultural display.").openPopup();
marker3.bindPopup("<b>St. Louis Zoo</b><br>A leading zoo with free admission.").openPopup();
marker4.bindPopup("<b>Forest Park</b><br>One of the largest urban parks in the USA.").openPopup();
marker5.bindPopup("<b>City Museum</b><br>A museum featuring repurposed architectural and industrial objects.").openPopup();
