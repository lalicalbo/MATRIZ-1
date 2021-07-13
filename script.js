
 
 function matriz(v1,v2){
     let dibujar=document.getElementById("container1")
     dibujar.style.width=parseInt(72*v2)+"px"
     dibujar.style.height=parseInt(72*v1)+"px"
     
     let cuadro=""
     for(i=0;i<v1;i++){
         for(p=0;p<v2;p++){
          cuadro= cuadro + `<div></div>`;
         }
     }
     dibujar.innerHTML=cuadro
     return cuadro
 }
 let filas =prompt("Digite la cantidad de filas que quiere dibujar ")
 let columnas=prompt("Digite la cantidad de columnas que quiere dibujar")
 
 matriz(filas,columnas);
 