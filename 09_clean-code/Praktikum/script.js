const productForm = document.getElementById("productForm");
const productNameInput = document.getElementById("productName");
const productCategoryInput = document.getElementById("productCategory");
const productFreshnessInputs = document.getElementsByName("flexRadioDefault");
const additionalDescriptionInput = document.getElementById("additionalDescription");
const productPriceInput = document.getElementById("productPrice");
const nameValidationRegex = /^[a-zA-Z]+$/;
const tableBody = document.getElementById("tableBody");
const products = [];

productForm.addEventListener('submit', event => {
    event.preventDefault();

    const productName = productNameInput.value;
    const productCategory = productCategoryInput.value;
    const productFreshness = getSelectedRadioValue(productFreshnessInputs);
    const additionalDescription = additionalDescriptionInput.value;
    const productPrice = productPriceInput.value;

    if (productName.length > 25 || productName.trim() === "") {
        if (productName.length > 25) {
            alert("Product Name must not exceed 25 characters.");
        } else {
            alert("Please enter a valid product name.");
        }
        return;
    }

    if (!nameValidationRegex.test(productName)) {
        alert("Name must not contain symbols.");
        return;
    }

    if (productPrice.trim() === "") {
        alert("Please enter a valid Product Price.");
        return;
    }

    if (additionalDescription.trim() === "") {
        alert("Additional Description must be filled in.");
        return;
    }

    if (productCategory === "") {
        alert("Product Category must be filled in.");
        return;
    }

    addProductFormToTable(productName, productCategory, productFreshness, additionalDescription,  productPrice);
    productForm.reset()
})

const addProductFormToTable = (name, category, freshness, description, price) => {
    const product = { name, category, freshness, description,  price };
    products.push(product);

    addDataTable();
}

const addDataTable = () => {
    tableBody.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const newRow = tableBody.insertRow(tableBody.rows.length);
        newRow.innerHTML = `
            <td>${i + 1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].category}</td>
            <td>${products[i].freshness}</td>
            <td>${products[i].description}</td>
            <td>${products[i].price}</td>
        `;
    }
}

const getSelectedRadioValue = (radioInputs) => {
    for (const radioInput of radioInputs) {
        if (radioInput.checked) {
            return radioInput.value;
        }
    }
    return null;
}


