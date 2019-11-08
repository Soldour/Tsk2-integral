let a =-0.5
let b=2.5
n=199
base =(b-a)/n
let i=0
let sum=0
while(i<n){
let xi= a+ base*(i)
let yi= Math.sin(xi)+xi
sum +=yi
i++
}
let area= base * sum
console.log(area)