//load the json file from the city of calgary site

//global  variables
var xhr = new XMLHttpRequest;//XMLHTTPRequest object
var parsedrecord;//parsed JSON file
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
  //event listener
  document.getElementById("stopName").addEventListener("keyup", function (){ searchByStopName(this.value);},false);
  document.getElementById("routeName").addEventListener("keyup", function (){ searchByRouteName(this.value);},false);
  document.getElementById("category").addEventListener("keyup", function (){ searchByCategory(this.value);},false);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/pm3p-838w.json", true);
  xhr.send();
	
	
}

function searchByStopName(searchdata)
{
    //set up table
    var output="<tr><th>Transit Stop Name</th><th>Route Name</th><th>Route Category</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var stopname; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            stopname=record.stop_name;//assign
            if(stopname.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.stop_name;
                output+="</td><td>"
                output+=record.route_long_name;
                output+="</td><td>";
                output+=record.route_category;
                output+="</td><td>";
                output+=record.point.coordinates[1];
                //add latitude to postition
                position=record.point.coordinates[1];
                position+=","
                output+="</td><td>";
                output+=record.point.coordinates[0];
                //add longitude to position
                position+=record.point.coordinates[0];
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByRouteName(searchdata)
{
    //set up table
    var output="<tr><th>Transit Stop Name</th><th>Route Name</th><th>Route Category</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var routename; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            routename=record.route_long_name;//assign
            if(routename.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.stop_name;
                output+="</td><td>"
                output+=record.route_long_name;
                output+="</td><td>";
                output+=record.route_category;
                output+="</td><td>";
                output+=record.point.coordinates[1];
                //add latitude to postition
                position=record.point.coordinates[1];
                position+=","
                output+="</td><td>";
                output+=record.point.coordinates[0];
                //add longitude to position
                position+=record.point.coordinates[0];
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByCategory(searchdata)
{
    //set up table
    var output="<tr><th>Transit Stop Name</th><th>Route Name</th><th>Route Category</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var category; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            category=record.route_category;//assign
            if(category.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.stop_name;
                output+="</td><td>"
                output+=record.route_long_name;
                output+="</td><td>";
                output+=record.route_category;
                output+="</td><td>";
                output+=record.point.coordinates[1];
                //add latitude to postition
                position=record.point.coordinates[1];
                position+=","
                output+="</td><td>";
                output+=record.point.coordinates[0];
                //add longitude to position
                position+=record.point.coordinates[0];
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}