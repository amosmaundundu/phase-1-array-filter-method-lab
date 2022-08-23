function findMatching(drivers, string){
    const match= drivers.filter((value)=>{

      return value.toLowerCase()===string.toLowerCase();
    });
    return match;
}
function fuzzyMatch(drivers, string){
 const filter = drivers.filter((value)=>{
    return value.slice(0,2)==string.slice(0,2);
 });
 return filter;
}
function matchName(drivers,string){
let match =drivers.filter((item)=>{
    return item.name ===string
})
return match;
 }
