console.log("Ejemplo de highlight")

const generateProducts = () => {
    const products = [];
    products.push({name: "Yerba Mañanita", price: 600.0});
    products.push({name: "Pimiento Rojo", price: 499.0});
    products.push({name: "Sandia", price: 169.0});
    products.push({name: "Zanahoria", price: 129.0});
    products.push({name: "TV 8K", price: 350000.0});
    return products;
}

const addProduct = (product, products) => {
    if(!product.name.length) { //product.name == ''
        alert(`El campo esta vacio`);
        return;
    }
    const existingProduct = products.find((item) => item.name == product.name);
    if(existingProduct) {
        alert(`El producto ${product.name} ya existe en la lista`);
        return;
    }
    products.push(product);
}

const generateHtml = (products) => {
    return products.map(product => {
        return `
            <li 
                class="${product.price > 400.0 ? 
                    "highlight__content__item--higher" : 
                    "highlight__content__item"
                }"
            >
            ${product.name} a solo $${product.price}
            </li>
        `;
    })
}

const listOfProduct = generateProducts();
//addProduct({name: "TV 8K", price: 350000.0}, listOfProduct);
addProduct({name: "Cable hdmi", price: 399.0}, listOfProduct);
addProduct({name: "", price: 399.0}, listOfProduct);
const listOfItems = generateHtml(listOfProduct);
const htmlList = `<ul>${listOfItems.join('')}</ul>`;

const highlightList = document.getElementById('highlight__list');
highlightList.innerHTML = htmlList;