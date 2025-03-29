let restuarant = {
    name: "abc",
    geustCapacity: 100,
    guests: 0,
    checkCapacity: function(guests) {
        return this.geustCapacity >= guests + this.guests;
    },
    addGuests: function(guests){
        if (this.checkCapacity(guests)) {
            this.guests = this.guests + guests;
            return "guests were added"
        } else {
            return "not enought space in the restaurant!"
    } 
    },
    removeGuests: function (guests) {
        this.guests = this.guests - guests;
        return "guests were removed"
    }
}

console.log(restuarant)
console.log(restuarant.addGuests(50))
console.log(restuarant)
console.log(restuarant.removeGuests(20))
console.log(restuarant)

