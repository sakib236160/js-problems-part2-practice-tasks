/**
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity,mobileQuantity){
    const laptopPrice = 35000 ;
    const tabletPrice = 15000 ;
    const mobilePrice = 20000;

    const laptopTotalPrice = laptopPrice * laptopQuantity;
    const tabletTotalPrice = tabletPrice * tabletQuantity;
    const mobileTotalPrice = mobilePrice * mobileQuantity;

    const totalElectronics = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalElectronics;
}
const electronicsBudget = calculateElectronicsBudget(1,1,0);
console.log(electronicsBudget);