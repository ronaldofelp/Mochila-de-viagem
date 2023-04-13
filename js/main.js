const form = document.querySelector("#novoItem")

const list = document.querySelector("#lista")

const items = []

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements['nome']

    const amount = event.target.elements['quantidade']

    makeElement(name.value, amount.value)

    name.value = ""
    amount.value = ""
})


function makeElement(name, amount) {


    const newItems = document.createElement('li')
    newItems.classList.add("item")

    const numberItems = document.createElement("strong")
    numberItems.innerHTML = amount

    newItems.appendChild(numberItems)
    newItems.innerHTML += name

    list.appendChild(newItems)

    const currentItem = {
        "name": name,
        "amount": amount
    }

    items.push(currentItem)

    localStorage.setItem("item", JSON.stringify(items))

    

}