//Objective is to find the length of the last word in a string

let s = 'Hello World'


//O(n) solution where n is the length of the string
//We start at the back of the string and count as long as we don't pass a space

let p1 = s.length - 1
let count = 0

while (p1 >= 0) {
    if (s[p1] != ' ') {
        count++
    } else if (count > 0) {
        return count
    }
    
    p1--
}

return count