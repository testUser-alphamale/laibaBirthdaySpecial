var parent=document.getElementById("parent");
function ShowLove(){

   
    let count=0;
 setInterval(()=>{
    parent.innerHTML=`<h1 class="count">${count}%</h1>`
    if(count>=3){
        parent.innerHTML=`<h1 class="count">${count}%</h1><br><p class="txtp">Never Stopping!</p>`
    }
   count++; 
},10)



}
