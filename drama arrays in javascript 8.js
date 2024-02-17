// just trying to learn about arrays and just trying to make an effort to learn arrays
                            // So, here we:

//for collectively arrays:
// let heroes,heroines,dramaNames, ratings ,types;

//forindividuals;
// let heroname,heroineName,dramaName,rating,type



heroes=["Mehmet","Ali","Kemal","Serdar","Emir","Ali Asif"];

heroines = ["Aslihan","Fatima","Nihan","Zehra","Reyhan","Eylul"];

dramaNames = ["Kut-ul-Zafr","Kut-ul-Amara","Kara Sevda","Sen kalp Kapimi","Yemin","Kalp Atisi"];

ratings = [8.9,9.1,6.7,5.7,7.2,6.7];

types=["Historical","Struggle of Freedom Fighters","Love story","love story ofintelligence agents"
        ,"silent love","lovestory of doctors"];

completeInfolist=[];


for(let i=0;i<6;i++)
{
    completeInfolist[i]={};
    completeInfolist[i].heroname = heroes[i];
    completeInfolist[i].heroineName = heroines[i];
    completeInfolist[i].dramaName = dramaNames[i];
    completeInfolist[i].rating = ratings[i];
    completeInfolist[i].type = types[i];
}

console.log(completeInfolist)
console.log("Whats going on");


map_asumptions = completeInfolist.map( (x)=>{

    if (x.heroname == "Ali Asif")
    return x.heroineName;
    
} );
console.log(map_asumptions);

filter_asumptions = completeInfolist.filter( (y)=>
{
    return y.rating<8; 
})

console.log(filter_asumptions);


any_love = completeInfolist.some((x)=> x.type=="lovestory");
console.log(filter_love);

every_rating = completeInfolist.every((x)=>x.rating < 10);
console.log(every_rating);


