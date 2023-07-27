//load the json file from the city of calgary site

//global variables
var xhr = new XMLHttpRequest;//XMLHTTPRequest object
var parsedrecord;//parsed JSON file
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
  //event listener
  document.getElementById("community").addEventListener("keyup", function (){ searchByCommunity(this.value);},false);
  document.getElementById("category").addEventListener("keyup", function (){ searchByCategory(this.value);},false);
  document.getElementById("sector").addEventListener("keyup", function (){ searchBySector(this.value);},false);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
  xhr.send();
	
	
}

function searchByCommunity(searchdata)
{
    //set up table
    var output="<tr><th>Community Name</th><th>Crime Category</th><th>City Sector</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var community; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            community=record.community_name;//assign
            if(community.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.community_name;
                output+="</td><td>"
                output+=record.category;
                output+="</td><td>";
                output+=record.sector;
                output+="</td><td>";
                output+=record.geocoded_column.latitude;
                //add latitude to postition
                position=record.geocoded_column.latitude;
                position+=","
                output+="</td><td>";
                output+=record.geocoded_column.longitude;
                //add longitude to position
                position+=record.geocoded_column.longitude;
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
    var output="<tr><th>Community Name</th><th>Crime Category</th><th>City Sector</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var category; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            category=record.category;//assign
            if(category.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.community_name;
                output+="</td><td>"
                output+=record.category;
                output+="</td><td>";
                output+=record.sector;
                output+="</td><td>";
                output+=record.geocoded_column.latitude;
                //add latitude to postition
                position=record.geocoded_column.latitude;
                position+=","
                output+="</td><td>";
                output+=record.geocoded_column.longitude;
                //add longitude to position
                position+=record.geocoded_column.longitude;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchBySector(searchdata)
{
    //set up table
    var output="<tr><th>Community Name</th><th>Crime Category</th><th>City Sector</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var sector; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            sector=record.sector;//assign
            if(sector.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.community_name;
                output+="</td><td>"
                output+=record.category;
                output+="</td><td>";
                output+=record.sector;
                output+="</td><td>";
                output+=record.geocoded_column.latitude;
                //add latitude to postition
                position=record.geocoded_column.latitude;
                position+=","
                output+="</td><td>";
                output+=record.geocoded_column.longitude;
                //add longitude to position
                position+=record.geocoded_column.longitude;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}