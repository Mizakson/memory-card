export default function arrShuffle(array) {
    const newArr = array.slice()
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [newArr[currentIndex], newArr[randomIndex]] = [
        newArr[randomIndex], newArr[currentIndex]];
    }

    return newArr
  }