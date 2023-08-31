const productForm = document.getElementById('productForm')
const productNameInput = document.getElementById('productName')
const productCategoryInput = document.getElementById('productCategory')
const additionalDescriptionInput = document.getElementById('additionalDescription')
const productPriceInput = document.getElementById('productPrice')
const validateLetter = /^[a-zA-Z]+$/;

productForm.addEventListener('submit', event => {
    if(productNameInput.value.length > 25 ){
        event.preventDefault();
        alert('Product Name must not exceed 25 characters.')
    }

    if(productNameInput.value.trim() === ''){
        event.preventDefault();
        alert('Please enter a valid product name')
    }  

    if(!validateLetter.test(productNameInput.value)){
        event.preventDefault();
        alert('Name must not contain symbols.')
    }

    if(productPriceInput.value.trim() === ''){
        event.preventDefault();
        alert('Please enter a valid Product Price')
    }

    if(additionalDescriptionInput.value.trim() === ''){
        event.preventDefault();
        alert('Additonal Description must be filled in')
    }

    if(productCategoryInput.value === ''){
        event.preventDefault();
        alert('Product Category must be filled in')
    }
});