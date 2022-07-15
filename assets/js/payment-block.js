"use sting"

let button = document.getElementsByClassName('pay_currency');
let rec = document.getElementsByClassName('recalculations');

for(let key in button){

    button[0].style.backgroundImage = "linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)";
    button[0].style.color = "#fff";

    button[key].onclick = function(){

        for(let i =0;i<button.length;i++){
          
          button[i].style.backgroundImage = "none";
          button[key].style.backgroundImage = "linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%)";

          button[i].style.color = "#49a3f1";
          button[key].style.color = "#fff";

          for(let k=0;k<rec.length;k++){
            rec[k].style.display= 'none';
          }
          
          if(key>0){
            rec[key-1].style.display= 'block';
          }
        }
    }
    

}

// let value = document.getElementById('usd_click');
// value.onchange = function(){
//   let cur = document.getElementsByClassName('currency');
  
//   if (window.getComputedStyle(cur[1]).display == 'block') {
//     document.getElementsByClassName('recalculations')[0].style.display = 'block';
//   } else if(window.getComputedStyle(cur[1]).display == 'none'){
//     document.getElementsByClassName('recalculations')[0].style.display = 'none';
//   }
  
// }


