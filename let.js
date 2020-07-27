function getPickles(isDelicious = true){
    if(isDelicious){
        var taste = 'delicioso';
    } else {
        taste = 'azedo'
    }

    return `Picles é ${taste}`;
}

console.log(getPickles());
