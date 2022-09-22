let mainBodyDiv = document.getElementById("body");
// movie ads
let movies = document.createElement("div");
movies.setAttribute("id" , "movie-ads");
let moviesClose = document.createElement("div");
moviesClose.setAttribute("class" , "close-div");
let closeFont = document.createElement("span");
closeFont.setAttribute("onClick" , "closeDiv(event)");
closeFont.setAttribute("class" , "close-font");
closeFont.textContent = "X";
moviesClose.appendChild(closeFont);
movies.appendChild(moviesClose);
let moiveAdsBody =  document.createElement("div");
moiveAdsBody.setAttribute("id", "movie-ad-body");
let adsText = document.createElement("p");
adsText.setAttribute("id", "ads-text");
adsText.textContent = "Movie Cinema";
moiveAdsBody.appendChild(adsText);
let cinema_btn = document.createElement("button");
cinema_btn.setAttribute("id", "checkout-cinema");
cinema_btn.setAttribute("onClick", "checkCinema()");
cinema_btn.textContent = "Check out";
moiveAdsBody.appendChild(cinema_btn);

movies.appendChild(moiveAdsBody);

mainBodyDiv.appendChild(movies); 
setTimeout(function (){
    movies.style.display = "flex"
    movies.animate([    //animation
        { transform: 'translateX(1600px)'},
        { transform: 'translateX(0px)'},
        { transition: '2s cubic-bezier(0.165, 0.84, 0.44, 1)'}
        ],{
            duration: 2000
        });
},2000);

function closeDiv(event){
    let div = event.target.parentNode.parentNode;
    div.style.display = "none";
}
function checkCinema(){
    window.location.assign("../../Cinema/index.html");
}

