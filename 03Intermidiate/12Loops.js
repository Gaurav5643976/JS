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

