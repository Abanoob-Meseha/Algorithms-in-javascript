const binary_search = (list, target) => {
  // returns target index if found , else returns null
  let first = 0;
  let last = list.length -1;

  while (first <= last) {
    let midIndex = Math.floor((last + first) / 2);
    if (list[midIndex] == target) {
      return midIndex;
    } else if (target > list[midIndex]) {
      first = midIndex + 1;
    } else {
      last = midIndex - 1;
    }
  }

  return null;
};

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

// found Case --> target = 10
const searchResult = binary_search(list , 10);
verify(searchResult)

// not found Case --> target = 15
const searchResult2 = binary_search(list , 15);
verify(searchResult2)