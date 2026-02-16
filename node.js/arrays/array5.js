const info = [
    {
    name: 'Ashkan',
    lastName: 'Amirkabirian',
    age: 23
    },
    {
        name: 'Ahmad',
    lastName: 'Khomeini',
    age: 60
    },
    {
        name: 'Mamad',
    lastName: 'Ahmadinejad',
    age: 28
    },
    {
    name: 'MaBenjamin',
    lastName: 'Netanyahoo',
    age: 72
    }
]

const sortByAge = function (array){
    array.sort(function(a,b)
    {
        if (a.age > b.age) {
             return -1
        } else {
            return 1
        }
    })
}

sortByAge(info)
console.log(info)