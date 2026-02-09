const products = [
    {name: "Pomme", category: "fruits", color: "red"},
    {name: "Banane", category: "fruits", color: "yellow"},
    {name: "Carotte", category: "vegetables", color: "orange"},
    {name: "Brocoli", category: "vegetables", color: "green"},
    {name: "Kiwi", category: "fruits", color: "green"},
    {name: "Tomate", category: "vegetables", color: "red"},
    {name: "Prune", category: "fruits", color: "purple"},
    {name: "Aubergine", category: "vegetables", color: "purple"}
]

const searchInput = document.getElementById("search");
const productList = document.getElementById("product-list");


const categoryFilter = document.getElementById("category-filter");
const colorFilter = document.getElementById("color-filter");
const buttonApply = document.getElementById("apply");

// affichage des produits
function displayProducts(products) {
    productList.innerHTML = "";
    if (products.length === 0) {
        productList.innerHTML = "<li>Aucune Produit trouvé</li>"
        return;
    }
    products.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} - ${p.category} - ${p.color}`;
        productList.appendChild(li);
    });
}

// recherche + tri

function searchAndSortProducts() {
    const searchInputValue = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const color = colorFilter.value;
    let result = products;

    if (category !== "all") {
        result = result.filter(p => p.category === category);
    }

    if (color !== "all") {
        result = result.filter(p => p.color === color);
    }

    if (searchInputValue) {
        result = result.filter(p => p.name.toLowerCase().includes(searchInputValue));
    }


    displayProducts(result);
}


searchInput.addEventListener("input", searchAndSortProducts)

buttonApply.addEventListener("click", searchAndSortProducts)

displayProducts(products);

