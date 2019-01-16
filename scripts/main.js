

function updateAlexaCount(){
    
    var currentCount = document.getElementById("alexa_vote_count").value();
    currentCount += 1;
    document.getElementById("alexa_vote_count").value = currentCount;
    alert("Current Alexa count: !" + currentCount);
}


function updateHomeCount(){
    alert("Voted for Google Home!");
    var currentCount = document.getElementById("home_vote_count").value();
    currentCount += 1;
    document.getElementById("home_vote_count").value = currentCount;
    alert("Current Google Home vote count: !" + currentCount);    
}

function updateSiriCount(){
    alert("Voted for Siri");
    var currentCount = document.getElementById("siri_vote_count").value()
    currentCount += 1;
    document.getElementById("siri_vote_count").value = currentCount;
    alert("Current Siri vote count: !" + currentCount);    
    
}
