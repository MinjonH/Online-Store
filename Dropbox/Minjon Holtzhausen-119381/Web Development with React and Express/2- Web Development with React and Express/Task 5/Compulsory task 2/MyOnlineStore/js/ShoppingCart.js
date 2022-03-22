const cart = [{
  "id": 1,
  "name": "Resin bookmarks",
  "image": "images/bookmarks.png",
  "price": 150
}, {
  "id": 2,
  "name": "Makeup bags",
  "image": "images/bags.jpg",
  "price": 50
}, {
  "id": 3,
  "name": "Business Cards",
  "image": "images/business-cards.jpg",
  "price": 195
}, {
  "id": 4,
  "name": "Resin keychains",
  "image": "images/keychain1.png",
  "price": 45
}, {
  "id": 5,
  "name": "Coffee Mug",
  "image": "images/mug.jpg",
  "price": 30
}, {
  "id": 6,
  "name": "Brown Cover Notebooks",
  "image": "images/notebook.jpg",
  "price": 105
}, {
  "id": 7,
  "name": "Custom printed shirt",
  "image": "images/custom_shirt.png",
  "price": 135
}, {
  "id": 8,
  "name": "Colourful Water Bottle",
  "image": "images/bottles.jpg",
  "price": 135
}]

const itemsContainer = document.getElementById('items')

let all_items = document.querySelectorAll('button')
Array.from(all_items)

cart_items = all_items.splice(0, 1)

cart_items.array.forEach(element => element.addEventListener('click', () => {
  addItem(element.getAttribute('id'), element.getAttribute('data-price'))
  showItems()
}))

for (let i = 0; i < data.length; i += 1) {
  //CREATE A NEW DIV ELEMENT AND GIVE IT A CLASS NAME
  const newDiv = document.createElement('div');
  newDiv.className = 'item'
  //CREATE AN IMAGE ELEMENT
  const img = document.createElement('img');
  img.src = data[i].image
  img.width = 300
  img.height = 300

  newDiv.appendChild(img)

  itemsContainer.appendChild(newDiv)

  const price = document.createElement('p')
  price.innerText = data[i].price
  newDiv.appendChild(price)
}
