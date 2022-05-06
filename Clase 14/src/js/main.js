const totalItems = document.getElementById('totalItems')
const totalProducts = document.getElementById('totalProducts')
const cartWrapper = document.getElementById('cartWrapper')

let products = []

const setCount = () => {
    let totalCount = 0

    for(let item in products){
        totalCount += products[item].count
    }

    // totalItems.innerText = `${totalCount}`
    totalItems.innerText = totalCount.toString()
    return totalCount
}

const totalPrice = () => {
    let totalCart = 0

    for(let item in products){
        totalCart += products[item].price * products[item].count
    }

    // totalProducts.innerText = `${totalCart}`
    totalProducts.innerText = totalCart.toString()
    return totalCart
}

const productsList = () => {
    cartWrapper.innerHTML = products.map(product => {
        return `
            <div class="cart-item">
                <div class="cart-item-content">
                    <span>${product.product}</span>
                    <span>Count: ${product.count}</span>
                    </div>
                        <span>$ ${product.price}</span>
                    </div>
                </div>
            </div>        
        `
    })
}

const addProduct = (product, price, count) => {
    for(let item in products) {
        if(products[item].product === product) {
            products[item].count ++
            setCount()
            totalPrice()
            productsList()
            return
        }
    }

    products.push({ product: product, price: price, count: count});
    setCount()
    totalPrice()
    productsList()
}
