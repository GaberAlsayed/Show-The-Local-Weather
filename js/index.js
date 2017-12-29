$(document).ready(function(){
 var lat;
  var long;
  $.getJSON("https://freegeoip.net/json/",function(data2){
    lat=data2.latitude;
    long=data2.longitude; 
    console.log(lat);
    console.log(long);
    //creating an api with the user's geolocation
    var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=b86d21440d8c9a110912a2eb0845abb4";
    
    
    //json call for the api
  $.getJSON(api, function(data) {
     var fTemp;
  var cTemp;
    var tempSwap = true;
   
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    $("#city").html(city);
    fTemp = (kTemp*(9/5)-459.67).toFixed(2);
    cTemp = (kTemp-273).toFixed(1);
   $("#api").html(api);
    $("#weatherType").html(weatherType);
    
    $("#fTemp").html(fTemp + "&#8457;");
    $("#fTemp").click(function(){
      if(tempSwap===false) {
        $("#fTemp").html(fTemp + "&#8457;");
        tempSwap=true;
      }
      else{
        $("#fTemp").html(cTemp + "&#8451;");
        tempSwap=false;
      }
  });
    
    
    $("#windSpeed").html(windSpeed + "m/sec");
  })
   
    if (fTemp>80) {
    $('body').css('background-image','url(https://tiresandparts.net/wp-content/uploads/stay-cool-article-1-1-2.jpg)');
    
  }
  else if (fTemp>70) {
    $('body').css('http://az616578.vo.msecnd.net/files/2016/02/22/635917212236923915842672207_warmweatherlead.jpg)');
  }
  else if (fTemp>60) {
    $('body').css('background-image','url(https://filmmakingunedited.files.wordpress.com/2013/09/clouds-clear.jpg)');
  }
    else if (fTemp>50) {
    $('body').css('background-image','url(https://az616578.vo.msecnd.net/files/2016/09/10/636090695124499947223829352_fall-012.jpg)');
  }
 
});
  
  });