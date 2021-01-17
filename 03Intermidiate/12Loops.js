// for(let i=0;i<10;i++){
//     console.log(i);
// }

const myStates=["UP","AP",273408,"Delhi","UK","Bihar","Punjab"];
for(let i=0;i<myStates.length;i++){
    if(typeof myStates[i]!=="string"){
        continue;
    }
    console.log(`${i} --> ${myStates[i]}`);
}

let i=0;
while(i<myStates.length){
    if(typeof myStates[i]!=="string"){
        i++;
        continue;
    }
    console.log(`${i}--> ${myStates[i]}`);
    i++;
}

myStates.forEach((s)=>(console.log(s)));


for(const states of myStates){
    console.log(states);
}

const symbols ={
    yt:"Youtube",
    ig:"Instagram",
    fb:"Facebook"
};
for(const site in symbols){
    console.log(site);
}



