let x = -0.14
let y = Math.sqrt((3+Math.sin((0.5*Math.PI)+2*x))/Math.abs(x));
console.log(y)
console.log("\n")

//declare the variables and interval of the curve 
let a=-1.5
let b =2.5
base = 0.25 
n=((b-a)/0.25 )+1  // set the value of n and add 1 to it to cove the whole are 
i =0
let yi
while (i<n){
    let xi = a + base*(i)
    let yi =Math.sin(2*xi) +xi**2
        console.log(xi,``,yi)
      
        i +=1

   }


