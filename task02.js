/**
Task -2:
    Find the friend with the smallest name.
    const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

// step 01
// function getMinName(heights2){
//     let lowest = heights2[0];
//     for(let i = 1; i<heights2.length; i++){
//         if(heights2[i].length < lowest.length){
//             lowest = heights2[i];
//         }
//     }
//     return lowest;
// }
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// const lowestName = getMinName(heights2);
// console.log(lowestName);

// step 02
// function getMinName(heights2){
//     let lowest = heights2[0]
//     for(const name of heights2){
//         if(name.length < lowest.length){
//             lowest = name ;
//         }
//     }
//     return lowest;
// }
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// const lowestName = getMinName(heights2);
// console.log(lowestName);



// step 03
function getMinName(heights2){
    let lowestName = heights2[0];
    let i = 1;
    while(i < heights2.length){
        if(heights2[i].length < lowestName.length){
            lowestName=heights2[i];
        }
        i++;
    }
    return lowestName;
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const lowestName = getMinName(heights2);
console.log(lowestName);