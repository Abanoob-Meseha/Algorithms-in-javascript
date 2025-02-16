const linear_search = (list , target)=>{
    // returns the target index if found , else returns null
    for(let i=0; i< list.length ; i++){
        if(list[i] == target){
            return i ;
        }
    }
    return null
}

const verify = (result)=>{
    // prints the index if result is not null , else print not found
    if(result){
        console.log(`The target was Found at Index: ${result}`)
    }
    else{
        console.log("The target was not found in the List")
    }
}

const list = [1,2,3,4,5,6,7,8,9,10];
const searchResult = linear_search(list , 10);
verify(searchResult)