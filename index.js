function getCommonElements(array1, array2) {
    // Change code below this line
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
    
        for (let e = 0; e < array2.length; e++) {
            let arr1 = array1[i];
            let arr2 = array2[e];
            if (array1[i].includes(array2[e])) {
                newArray = array1.push(array2);
            }
        }
        return newArray;
    }
    console.log(array1, array2);
}