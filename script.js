

let inputAdt = document.getElementById('adultos')
let inputAdtBB = document.getElementById('adultosbb')
let inputCrian = document.getElementById('criancas')
let h23 = document.getElementById('2/3')
let h56 = document.getElementById('5/6')
let res = document.getElementById('result')



function calc(){
    let adultos = inputAdt.value;
    let adultosBB = inputAdtBB.value;
    let adultosNB = adultos - adultosBB
    let criancas = inputCrian.value;

    let carnes = carnePP() * adultos + (carnePP() / 2 * criancas)
    let cerveja = cervejaPP() * adultosBB
    let refrigerante = refrigerantePP() * adultosNB + (refrigerantePP() / 2 * criancas)

    res.innerHTML = `<p><b>Você irá precisar de: <ol> </b></p>`
    res.innerHTML += `<li> ${carnes / 1000} KG de carne</li>`
    res.innerHTML += `<li> ${Math.ceil(cerveja / 473)} latão de cerveja</li>`
    res.innerHTML += `<li> ${Math.ceil(refrigerante / 2000)} Pet(2L) de refrigerante</li></ol>`


}


function carnePP() {
    if(h23.checked){
        return 400;
    }
    else{
        return 650;
    }
}

function cervejaPP(){
    if(h23.checked){
        return 1200;
    }
    else{
        return 2000;
    }
}

function refrigerantePP(){
    if(h23.checked){
        return 1000;
    }
    else{
        return 1500;
    }
}

















// function calc(){
//     if(h23.checked){
//         let a = (adt.value) * 400
//         let aBB = (adtBB.value) * 1200
//         let aRG = (adt.value - adtBB.value) * 1000
//         let cCR = a / 2
//         let cRG = aRG / 2
//         let crn = a + cCR
//         let rgr = aRG + cRG
        

//         result.innerHTML = `<p><b>Você irá precisar de: <ol> </b></p>`
//         result.innerHTML += `<li> ${(crn / 1000)} KG de carne</li>`
//         result.innerHTML += `<li> ${Math.round(aBB / 473)} latão de cerveja</li>`
//         result.innerHTML += `<li> ${(rgr / 1000)} lts de refrigerante</li></ol>`
        
//     }
//     else{
//         let a = (adt.value) * 650
//         let aBB = (adtBB.value) * 2000
//         let aRG = (adt.value - adtBB.value) * 1500
//         let cCR = a / 2
//         let cRG = aRG / 2
//         let crn = a + cCR
//         let rgr = aRG + cRG
        

//         result.innerHTML = `<p><b>Você irá precisar de: <ol> </b></p>`
//         result.innerHTML += `<li> ${(crn / 1000)} KG de carne</li>`
//         result.innerHTML += `<li> ${Math.round(aBB / 473)} latão de cerveja</li>`
//         result.innerHTML += `<li> ${(rgr / 1000)} lts de refrigerante</li></ol>`
//     }
// }