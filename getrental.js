//load the json file from the city of calgary site

//global variables
var xhr = new XMLHttpRequest;//XMLHTTPRequest object
var parsedrecord;//parsed JSON file
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
  //event listener
  document.getElementById("licence").addEventListener("keyup", function (){ searchByLicence(this.value);},false);
  document.getElementById("address").addEventListener("keyup", function (){ searchByAddress(this.value);},false);
  document.getElementById("typeResidence").addEventListener("keyup", function (){ searchByType(this.value);},false);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/gzkz-5k9a.json", true);
  xhr.send();
	
	
}

function searchByLicence(searchdata)
{
    //set up table
    var output="<tr><th>Business Licence Number</th><th>Address</th><th>Type of Residence</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var permitnum; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            permitnum=record.business_licence_number;//assign
            if(permitnum.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.business_licence_number;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>";
                output+=record.type_of_residence;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByAddress(searchdata)
{
    //set up table
    var output="<tr><th>Business Licence Number</th><th>Address</th><th>Type of Residence</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var address; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            address=record.address;//assign
            if(address.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.business_licence_number;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>";
                output+=record.type_of_residence;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByType(searchdata)
{
    //set up table
    var output="<tr><th>Business Licence Number</th><th>Address</th><th>Type of Residence</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr>";
    var residence; 
    var gmap;//creates hyperlink
    //modify searchdata to include
    var position="";//Use this to enter latitude and longitude and add this as a value to the Select radio button
    //begin search
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            residence=record.type_of_residence;//assign
            if(residence.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.business_licence_number;
                output+="</td><td>"
                output+=record.address;
                output+="</td><td>";
                output+=record.type_of_residence;
                output+="</td><td>";
                output+=record.latitude;
                //add latitude to postition
                position=record.latitude;
                position+=","
                output+="</td><td>";
                output+=record.longitude;
                //add longitude to position
                position+=record.longitude;
                output+="</td><td>";

                //create hyperlink gmap
                gmap ="<a href=https://www.google.com/maps/search/?api=1&query="+position+" target=_blank>Click here to see map</a> ";              
                output+=gmap;
                output+="</td></tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}