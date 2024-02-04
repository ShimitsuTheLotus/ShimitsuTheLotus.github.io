var GetRepoLanguageInfo = new XMLHttpRequest();
GetRepoLanguageInfo.open('GET',"https://api.github.com/repos/ShimitsuTheLotus/Tamge_/languages");
GetRepoLanguageInfo.onload = function(){
    
}
GetRepoLanguageInfo.send();
var LanguageBoard = document.getElementById("LanguageBoard");
LanguageBoard.innerHTML = "text";