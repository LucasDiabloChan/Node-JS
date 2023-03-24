const mult = function yamete(array){
    
    var resMult = 1;

    array.forEach(element => {
        resMult *= element;
    });
    return console.log(resMult);
}

module.exports = mult;