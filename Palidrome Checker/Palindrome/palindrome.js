/*
Write a program that asks the user to enter a word.
● Using a while loop, the program must determine whether or not the word is a palindrome, 
i.e. whether it reads the same forwards and backwards. 
*/

/*user input
check if pallidrome
    word length check
    if word[0] = word[-1]
    while word [0] < word[length]
    word[0+1]
    word [-1-1]
    until word [wordlength -1 ] 
    break

output "... is/is not a palindrome" 
*/

word = prompt("input word please")
// let word = "aabaa"

//set values up first
length = word.length
char = 0
char2 = word.length -1

//while statement to keep going if characters are the same and to break when they are not
while (char < length) {
    if (word.charAt(char) != word.charAt(char2)) {
        var check = false
        break
    }
    else {
        char += 1
        char2 -=1
        var check = true
    }
}
//output :)
if (check==true) {
    console.log (`${word} is a palindrome`)
}
else {
    console.log (`${word} is not a palindrome`)
}

