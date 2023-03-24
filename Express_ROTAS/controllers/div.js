const div = function div(array){
    var resDiv = 1;
    let tempNum = 0;
    var res = Boolean;

    for(let i=0; i <= array.lenght; i+=2){
        res = array[i] / array[(i+1)];
        console.log(res);
    }

    return console.log(resDiv);
}

module.exports = div;