const _ = {
  clamp: function (number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange: function (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = Boolean(start <= number && number < end)
    return isInRange
  },
  words: function (string) {
    let words = string.split(' ')
    return words
  },
  pad: function(string, length) {
    if (length <= string.length) {
      return string
    } else {
      let startPaddingLength = Math.floor((string.length-length)/2)
      let endPaddingLength = Math.floor(length-string.length-startPaddingLength)
      let paddedString = (' '.repeat(startPaddingLength) + string + ' '.repeat(3))
      return paddedString
    }
  },
  has: function(object, key) {
    return object[key] !== undefined;
  },
  invert: function(object) {
    const invertedObject = {}
    for (let key in object) {
      const originalValue = object[key]
      invertedObject[originalValue] = key
    }
    return invertedObject
  },
  findKey: function(object, predicate) {
    for (let key in object) {
      const value = object[key]
      const predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      } 
    }
    return undefined
  },

  // Ugly brute force solution
  // drop: function(arr, num) {
  //   const newArr = []
  //   if (num) {
  //     arr.forEach((elem, i) => {
  //       if (i >= num) {
  //         newArr.push(elem)
  //       }
  //     })
  //   } else {
  //     arr.forEach((elem, i) => {
  //       if (i >= 1) {
  //         newArr.push(elem)
  //       }
  //     })
  //   }
  //   return newArr
  // },
  // Pretty and sexy solution
  drop: (arr, num = 1) => arr.slice(num),
  drop: (arr, num = 1) => arr.slice(num),
  // DropWhile method (brute force)
  // dropWhile: (array, predicate) => {
  //   const dropNumber = array.findIndex((element, index) => {return !predicate(element, index,array)})
  //   const droppedArray = _.drop(array, dropNumber)
  //   return droppedArray
  // }
  // DropWhile method
  dropWhile: (array, predicate) => {
    const dropNumber = array.findIndex((element, index) => !predicate(element, index, array))
    
    return _.drop(array, dropNumber)
  },
  // Chunk method - returns an array broken down by even chunks
  chunk: (array, size = 1) => {
    const arrayChunks = []
    for (let i = 0; i < array.length; i += size) {
      const arrayChunk = array.slice(i, i + size)
      arrayChunks.push(arrayChunk)
    }
    
    return arrayChunks
  },
}