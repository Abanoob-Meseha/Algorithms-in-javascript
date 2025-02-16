const recursive_binary_search = (list, target) => {
  if (list.length == 0) {
    return false;
  }
  else{
      let midIndex = Math.floor(list.length / 2);
      if (list[midIndex] == target) {
        return true;
      } else {
        if (list[midIndex] < target) {
          return recursive_binary_search(list.slice(midIndex + 1), target);
        } else {
          return recursive_binary_search(list.slice(0, midIndex), target);
        }
      }
  }
};

const verify = (result) => {
  // prints the index if result is not null , else print not found
  if (result) {
    console.log(`The target was Found --> ${result}`);
  } else {
    console.log(`The target was not found in the List --> ${result}`);
  }
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// found Case --> target = 10
const searchResult = recursive_binary_search(list, 10);
verify(searchResult);

// not found Case --> target = 15
const searchResult2 = recursive_binary_search(list, 15);
verify(searchResult2);
