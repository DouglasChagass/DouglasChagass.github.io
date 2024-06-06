let cout = 1 ;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
},2000)
function nextImage(){
    cout++;
    if(cout>4){
    cout= 1;
}
document.getElementById("radio1+cout").checked = true;

}
