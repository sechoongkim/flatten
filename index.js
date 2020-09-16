
function flatten(arr) {    
    if (!Array.isArray(arr)) {
        throw "Input is not valid";
    }    
    let res = [];
    for (let i = 0; i < arr.length; i++) {        
        if (Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

module.exports = {
    flatten: flatten
}
