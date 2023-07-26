// our function will take two arrays of strings, ios and android.
// android will have all the team members who work on windows, ios will be mac user
// it will randomly create team pairs using the team members in ios and android
// first we will try to ensure every android user is matched with an ios user
// if there arent enough ios users, then make teams with the remaining android users

const android: string[] = ['Ben', 'Anchi', 'Alex']
const ios: string[] = ['Jeremy', 'Avi', 'Sarven', 'Kayisha', 'Anna']
type Pair = [string, string]

const pairTeams = (ios: string[], android: string[]): Pair[] => {
  // lets make a copy of ios to randomize

  let iosCopy = [...ios]
  let j: number = 0
  for (let i = iosCopy.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    ;[iosCopy[i], iosCopy[j]] = [iosCopy[j], iosCopy[i]]
  }

  let pairs: Pair[] = []
  for (let androidDev of android) {
    if (iosCopy.length === 0) {
      break
    }

    let iosDev = iosCopy.pop()!
    pairs.push([androidDev, iosDev])
  }

  for (let i = 0; i < iosCopy.length; i += 2) {
    if (iosCopy[i + 1]) {
      pairs.push([iosCopy[i], iosCopy[i + 1]])
    }
  }

  return pairs
}

console.log(pairTeams(ios, android))
