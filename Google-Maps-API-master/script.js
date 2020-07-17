function iniciarMap(){
    var coord = {lat:-2.4192842 ,lng: -79.8602925 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
     
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}