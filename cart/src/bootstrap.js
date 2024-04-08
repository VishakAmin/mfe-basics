import faker from 'faker'

const cartValue = `<div>You have ${faker.random.number()} items in your cart</div>`
 
document.querySelector("#dev-cart").innerHTML = cartValue