let productsData = [
    {
        id: 0,
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
    {
        name: "მედიკამენტი",
        image: "assets/images/meds.png",
        price: 400,
    },
]

console.log('იხმარეთ ცვლადი "money=(თანხის რაოდენობა)" რათა გაზარდოთ თანხა. Default 100$ ')

let money = 100 // for testing delete later 

const productContainer = document.querySelector('.products-container')

productsData.forEach((e, index) => {

    // filter product names. 
    const splitName = e.name.split('')
    if(splitName.length > 12) {
        console.error("პროდუქტის სახელი არ შეიძლება იყოს 12 ასოზე მეტი")
        return
    }
    e.id = index
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
            <div class="add-product" onclick="test(event)" data-id="${e.id}">
                <img src="assets/images/add.png" alt="Add">
            </div>
        </div>
    `;
    productContainer.appendChild(productDiv)
});

function test(e) {
    const id = parseInt(e.currentTarget.getAttribute("data-id"))
    const product = productsData.find(e => e.id == id)
    console.log(product)
    Swal.fire({
        title: "დასტური",
        text: `ნამდვილად გსურთ შეიძინოთ ${product.name}, ${product.price}$-ად?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "დიახ",
        scrollbarPadding: false,
      }).then((result) => {
        if (result.isConfirmed && money >= product.price) {
          Swal.fire({
            title: "Done",
            text: `თქვენ შეიძინეთ ${product.name}, ${product.price}$-ად`,
            icon: "success",
            scrollbarPadding: false,
          });
        }
        else if(result.isConfirmed && money < product.price) {
            Swal.fire({
                icon: "error",
                title: "შეცდომა",
                text: "თქვენ არ გაქვთ საკმარისი თანხა",
                scrollbarPadding: false,
              });
        }
      });
}