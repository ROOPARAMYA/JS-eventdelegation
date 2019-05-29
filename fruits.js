var fruits = { 'Apple': 0, 'Orange': 0, 'Bannana': 0, 'Mango': 0 }
var selectedFruits = document.getElementById("selected-fruits");
selectedFruits.innerHTML = JSON.stringify(fruits);
function add(e) {
    if (e.target && e.target.nodeName == "I") {
        if (e.target.id === 'Apple') {
            this.fruits.Apple = this.fruits.Apple + 1;
        } else if (e.target.id === 'Orange') {
            this.fruits.Orange = this.fruits.Orange + 1;
        } else if (e.target.id === 'Bannana') {
            this.fruits.Bannana = this.fruits.Bannana + 1;
        } else if (e.target.id === 'Mango') {
            this.fruits.Mango = this.fruits.Mango + 1;
        }
        console.log(this.fruits);
        selectedFruits.innerHTML = JSON.stringify(this.fruits);;
    }
}