const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for(let i=0; index< placesToTravel.length; i++){
    const element=placeToTravel[i];
if(element.id===11 || element.id===40){
    placesToTravel.splice(index,1);
}
}
console.log(placeToTravel);
