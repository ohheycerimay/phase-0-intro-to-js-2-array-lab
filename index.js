// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    
    cats.push(name);
}

function destructivelyPrependCat(name) {

    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {

    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {

    cats.shift(name);
}

function appendCat(name) {

    //1) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    
    const copyofCats = cats.slice()
    copyofCats.push(name);
      return copyofCats
    }

    function prependCat(name) {
        
        const copyofCats = cats.slice()
        copyofCats.unshift(name);
          return copyofCats
        }

function removeLastCat(name) {
    const copyofCats = cats.slice()
        copyofCats.pop(name);
          return copyofCats
        }

    function removeFirstCat(name) {
            const copyofCats = cats.slice()
                copyofCats.shift(name);
                  return copyofCats
                }
