var search = document.getElementById("search");

search.oninput = function (){
    //alert(search.value);
    var templates = document.querySelectorAll(".template");

    for(i = 0; i < templates.length; i++){
        //templates[i].style.display = "none";
        var templateNameObj = templates[i].getElementsByClassName("template-content")[0].getElementsByClassName("template-name")[0];
        var creatorNameObj = templates[i].getElementsByClassName("template-content")[0].getElementsByClassName("user-name")[0];

        var templateName = templateNameObj.innerText.toLowerCase();
        var creatorName = creatorNameObj.innerText.toLowerCase();

        var lowercaseSearch = search.value.toLowerCase();

        if(search.value == ""){
            templates[i].style.display = "inline-block";
            console.log("1");
        }
        else if(templateName.includes(lowercaseSearch) || creatorName.includes(lowercaseSearch)){
            templates[i].style.display = "inline-block";
            console.log("2");
        }
        else if(templates[i].getAttribute("data-tags").includes(lowercaseSearch)){
            templates[i].style.display = "inline-block";
            console.log("3");
        }
        else{
            templates[i].style.display = "none";
            console.log("4");
        }
    }
}