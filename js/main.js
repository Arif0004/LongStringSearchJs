


//find out longest string and position from array
function longestString(names) {
    var longestWord = '';
    for (var name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }

    }
    return [longestWord, name.indexOf(longestWord)];

}
console.log(longestString(['arif jarif', 'arif hossain', 'akash', 'sad']));

