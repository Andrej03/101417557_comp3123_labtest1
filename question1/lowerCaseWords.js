// given array example
const mixedArray = ['PIZZA', 10, true, 25, false,'Wings']

// map and filter adapted examples are taken from the provided mdn link
// map takes value from array checks for string, if true then returns lower case
// if not sends null and the filter removes the null values and gives a fixed array

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        const arrayLowerCase = arr
            .map(item => {
                if (typeof item === 'string') {
                    return item.toLowerCase()
                } else {
                    return null
                }})
            .filter(item => item != null)

        setTimeout(() => {
            if (arrayLowerCase.length > 0) {
                resolve(arrayLowerCase)
            } else {
                reject('No strings found it the given array')
            }
            resolve(arrayLowerCase)
        }, 500)
    })}

// adapted from an example for calling from the provided mdn link.
lowerCaseWords(mixedArray)
        .then(finishedArray => console.log(finishedArray))

