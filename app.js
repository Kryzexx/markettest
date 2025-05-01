let productsData = [
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: "400",
    },
]

const productContainer = document.querySelector('.products-container')

productsData.forEach(e => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <div class="product-img">
            <img src="${e.image}" alt="${e.name}">
        </div>
        <div class="product-details">
            <div class="product-name">
                <span>${e.name}</span>
                <div class="product-price">
                    <img src="assets/images/pricetag.png" alt="pricetag">
                    <span>${e.price}</span>
                </div>
            </div>
            <div class="add-product">
                <img src="assets/images/add.png" alt="Add">
            </div>
        </div>
    `;
    productContainer.appendChild(productDiv)
});