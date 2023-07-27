//load the json file from the city of calgary site

//global variables
var xhr = new XMLHttpRequest;//XMLHTTPRequest object
var parsedrecord;//parsed JSON file
//load pageSetup
window.onload=pageSetup;

function pageSetup() {
	
  //event listener
  document.getElementById("program").addEventListener("keyup", function (){ searchByProgram(this.value);},false);
  document.getElementById("address").addEventListener("keyup", function (){ searchByAddress(this.value);},false);
  document.getElementById("typeProgram").addEventListener("keyup", function (){ searchByType(this.value);},false);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     parsedrecord = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/qdxh-qngy.json", true);
  xhr.send();
	
	
}

function searchByProgram(searchdata)
{
    //setup table
    var output="<tr><th>Program Name</th><th>Program Address</th><th>Type of Program</th><th>Phone Number</th><th>Capacity</th></tr>";
    var program; 
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            program=record.program_name;//assign
            if(program.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.program_name;
                output+="</td><td>"
                output+=record.program_address;
                output+="</td><td>";
                output+=record.type_of_program;
                output+="</td><td>";
                output+=record.phone_number;
                output+="</td><td>";
                output+=record.capacity;
                output+="</td><tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByAddress(searchdata)
{
    //set up table
    var output="<tr><th>Program Name</th><th>Program Address</th><th>Type of Program</th><th>Phone Number</th><th>Capacity</th></tr>";
    var address; 
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            address=record.program_address;//assign
            if(address.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.program_name;
                output+="</td><td>"
                output+=record.program_address;
                output+="</td><td>";
                output+=record.type_of_program;
                output+="</td><td>";
                output+=record.phone_number;
                output+="</td><td>";
                output+=record.capacity;
                output+="</td><tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}

function searchByType(searchdata)
{
    //set up table
    var output="<tr><th>Program Name</th><th>Program Address</th><th>Type of Program</th><th>Phone Number</th><th>Capacity</th></tr>";
    var typeprogram; 
    for(var i=0;i<parsedrecord.length;i++)
    {
        var record=parsedrecord[i];
            //check
            typeprogram=record.type_of_program;//assign
            if(typeprogram.startsWith(searchdata))//partial match on string
            {
                output+="<tr><td>";
                output+=record.program_name;
                output+="</td><td>"
                output+=record.program_address;
                output+="</td><td>";
                output+=record.type_of_program;
                output+="</td><td>";
                output+=record.phone_number;
                output+="</td><td>";
                output+=record.capacity;
                output+="</td><tr>";
            }
    }
    document.getElementById("searchresults").innerHTML=output;

}