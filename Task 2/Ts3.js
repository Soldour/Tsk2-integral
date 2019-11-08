let x,y;
let a= -3
let b =3
let n =((b-a)/0.5 )+1
let base =0.5
let j =0;
let i=0


while(j<18){

while(i<n){
if (x>=-1 && x<=1){
    xi= a +base*i
    y=Math.sin(2*xi)
            
} else{
    xi= a +base*i

 y = 1/xi;
   
}
console.log(`x:${xi}`," ",`y:${y}`);
i+=1
}

j+=1

}
