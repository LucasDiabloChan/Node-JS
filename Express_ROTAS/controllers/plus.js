const plus = function plus(array){
    var resMais = 0;

    array.forEach(element => {
        resMais += element;
    });

    return console.log(resMais);
}

module.exports = plus;