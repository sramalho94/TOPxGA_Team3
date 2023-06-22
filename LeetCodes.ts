// you're given a string 'word'
// return a new string where the characters of word have been replaced in the following ways:
// so the letter appears once, replace the letter with 'x'
// if the letter appears more than once, replace with 'y'
// return the new string

// example 1. word = 'aab'
// expected output = 'yyx'

// example 2. word = 'moo'
// expected output = 'xyy'

const replaceString = (word: string): string => {
  let answer: string = ''
  let letterRecord = {}

  for (let i: number = 0; i < word.length; i++) {
    if (letterRecord[word[i]] === undefined) {
      letterRecord[word[i]] = 1
    } else {
      letterRecord[word[i]]++
    }
  }
  for (let i: number = 0; i < word.length; i++) {
    if (letterRecord[word[i]] === 1) {
      answer += 'x'
    } else if (letterRecord[word[i]] > 1) {
      answer += 'y'
    }
  }

  return answer
}

// uncomment line below to test
// console.log(replaceString('aab'))

// 599. Minimum Index Sum of Two Lists
function findRestaurant(list1: string[], list2: string[]): string[] {
  // yet another record hashtable
  // loop through strings in list1, that's gonna be our key
  //  value is gonna be index at which we find the string
  // repeat for list 2
  // we could go through list 1 or list 2, for each element we're gonna see if it occurs in both lists
  // compare against leastIndexSum, initialize to Inifinty
  let recordList1 = {}
  let lowestIndexSum: number = Infinity
  let answer: string[] = []
  for (let i: number = 0; i < list1.length; i++) {
    recordList1[list1[i]] = i
  }

  for (let i: number = 0; i < list2.length; i++) {
    if (list2[i] in recordList1) {
      let localIndexSum: number = recordList1[list2[i]] + i
      if (localIndexSum === lowestIndexSum) {
        answer.push(list2[i])
      } else if (localIndexSum < lowestIndexSum) {
        lowestIndexSum = localIndexSum
        answer = []
        answer.push(list2[i])
      }
    }
  }

  return answer
}
