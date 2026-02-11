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

const text = document.getElementById('text');
const pagination = document.getElementById('pagination');



// On récupère tout le texte initial sans espace
const fullText = text.textContent.trim();

// On découpe en mots pour éviter de couper les mots au milieu
const words = fullText.split(/\s+/);

// Nombre de mots par page
const wordsPerPage = 300;

const totalPages = Math.ceil(words.length / wordsPerPage);
let currentPage = 1;

// fonction qui affiche la page précise du texte
function showPage(page) {
    // if (!text || !pagination) return;

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    
    currentPage = page;

    const start = (currentPage - 1) * wordsPerPage;
    const end = start + wordsPerPage;
    const pageWords = words.slice(start, end);

    text.textContent = pageWords.join(' ');

    renderPagination()
}


function renderPagination() {
    pagination.innerHTML = '';

    // btn précédent
    const prevBtn = document.createElement('button')
    prevBtn.textContent = '← Précédent'
    prevBtn.disabled = currentPage === 1;

    prevBtn.onclick = () => showPage(currentPage - 1)
    pagination.appendChild(prevBtn);

    // Éviter afficher tout les numéros des pages
    const info = document.createElement("span")
    info.textContent = `Page ${currentPage} / ${totalPages}`;
    pagination.appendChild(info);

    // btn page suivante
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Suivant →";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => showPage(currentPage + 1)
    pagination.appendChild(nextBtn);
}

showPage(1);
