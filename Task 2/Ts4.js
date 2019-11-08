let x=0.25
let i=0
let sum =0
while(i<=20){
 let y =2*Math.cos(x*i*0.5)+(x*i)
   sum +=y
i  +=1
}
let finite = sum
console.log(finite)