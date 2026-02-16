// let notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6']

// notes.forEach(function(item, index){
//     if (index % 2 === 0){
//         console.log("*", item)
//     } else {
//         console.log("!", item)
//     }
    
// })

let notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6']
notes.forEach(function(note, index){
const even = (index % 2) === 0 
if (even){
    notes[index] = `*  ${note}`;
} else {
    notes[index] = `!  ${note}`;
}
})

console.log(notes)