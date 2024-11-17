/* 
Task -1:
    Find the lowest number in the array below.
    const heights2 = [167, 190, 120, 165, 137];
*/


// step 01.....
// const heights2 = [167, 190, 120, 165, 137];
// const lowestNumber = Math.min(...heights2);
// console.log(lowestNumber);


// step 02
// function getMin(heights2){
//     // console.log(heights2);
//     let min = heights2[0];
//     for(const heights of heights2){
//         // console.log(heights);
//         if(min>heights){
//             min = heights;
//         }
//     }
//     return min; 
// }
// const heights2=[167, 190, 120, 165, 137];
// const lowest=getMin(heights2);
// console.log(lowest);



// step 03
// function getMin(heights2){
//     let lowest = heights2[0];
//     for(let i = 0; i<heights2.length; i++ ){
//         if(heights2[i]<lowest){
//             lowest = heights2[i];
//         }
//     }
//     return lowest;
// }
// const heights2=[167, 190, 120, 165, 137];
// const lowestNumber=getMin(heights2);
// console.log(lowestNumber);


// step 04
function getMin(heights2){
    let min = heights2[0]
    let i = 0;
    while(i<heights2.length){
        if(heights2[i]<min){
            min = heights2[i];
        }
        i++;
    }
    return min;
}
const heights2=[167, 190, 120, 165, 137];
const lowest=getMin(heights2);
console.log(lowest);