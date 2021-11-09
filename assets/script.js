// First, tell us your name
let yourName = "Don Waldoch" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//////////////////////////////////////////////////////////////////////////
// These are my event listeners for the 6 buttons

document.getElementById('minus-gb').addEventListener('click', function() {
    gb = (gb > 0) ? --gb : 0
    updateOrderSummary()
})

document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    updateOrderSummary()
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc = (cc > 0) ? --cc : 0
    updateOrderSummary()
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    updateOrderSummary()
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = (sugar > 0) ? --sugar : 0
    updateOrderSummary()
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    updateOrderSummary()
})

//////////////////////////////////////////////////////////////////////////
// This function updates the Order Summary table

function updateOrderSummary() {
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
}

//////////////////////////////////////////////////////////////////////////
