// Populate product dropdowns for comparison
function populateProductDropdowns() {
    const selects = ['select1', 'select2', 'select3', 'select4'];
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="0">-- Select Product --</option>';
            for (let i = 0; i < product.length; i++) {
                select.innerHTML += `<option value="${product[i].id}">${product[i].title}</option>`;
            }
        }
    });
}

// Helper to get product by id
function getProductById(id) {
    id = parseInt(id);
    return product.find(p => p.id === id);
}

// Product comparison functions
function item1(id) {
    id = parseInt(id);
    var select2 = parseInt(document.getElementById("select2").value);
    if (id !== select2 && id !== 0) {
        const p = getProductById(id);
        if (!p) return;
        document.getElementById("img1").src = p.image;
        document.getElementById("price1").innerHTML = p.price;
        document.getElementById("desc1").innerHTML = p.description;
        document.getElementById("brand1").innerHTML = p.brand;
        document.getElementById("rating1").innerHTML = generateStars(4.5);
        document.getElementById("cartBtn1").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (id === 0) {
        document.getElementById("img1").src = "";
        document.getElementById("price1").innerHTML = "N/A";
        document.getElementById("desc1").innerHTML = "N/A";
        document.getElementById("brand1").innerHTML = "N/A";
        document.getElementById("rating1").innerHTML = "N/A";
        document.getElementById("cartBtn1").disabled = true;
    } else {
        document.getElementById("select1").selectedIndex = 0;
        item1(0);
    }
}

function item2(id) {
    id = parseInt(id);
    var select1 = parseInt(document.getElementById("select1").value);
    if (id !== select1 && id !== 0) {
        const p = getProductById(id);
        if (!p) return;
        document.getElementById("img2").src = p.image;
        document.getElementById("price2").innerHTML = p.price;
        document.getElementById("desc2").innerHTML = p.description;
        document.getElementById("brand2").innerHTML = p.brand;
        document.getElementById("rating2").innerHTML = generateStars(4.3);
        document.getElementById("cartBtn2").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (id === 0) {
        document.getElementById("img2").src = "";
        document.getElementById("price2").innerHTML = "N/A";
        document.getElementById("desc2").innerHTML = "N/A";
        document.getElementById("brand2").innerHTML = "N/A";
        document.getElementById("rating2").innerHTML = "N/A";
        document.getElementById("cartBtn2").disabled = true;
    } else {
        document.getElementById("select2").selectedIndex = 0;
        item2(0);
    }
}

function item3(id) {
    id = parseInt(id);
    var select1 = parseInt(document.getElementById("select1").value);
    var select2 = parseInt(document.getElementById("select2").value);
    if (id !== select1 && id !== select2 && id !== 0) {
        const p = getProductById(id);
        if (!p) return;
        document.getElementById("img3").src = p.image;
        document.getElementById("price3").innerHTML = p.price;
        document.getElementById("desc3").innerHTML = p.description;
        document.getElementById("brand3").innerHTML = p.brand;
        document.getElementById("rating3").innerHTML = generateStars(4.1);
        document.getElementById("cartBtn3").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (id === 0) {
        document.getElementById("img3").src = "";
        document.getElementById("price3").innerHTML = "N/A";
        document.getElementById("desc3").innerHTML = "N/A";
        document.getElementById("brand3").innerHTML = "N/A";
        document.getElementById("rating3").innerHTML = "N/A";
        document.getElementById("cartBtn3").disabled = true;
    } else {
        document.getElementById("select3").selectedIndex = 0;
        item3(0);
    }
}

function item4(id) {
    id = parseInt(id);
    var select1 = parseInt(document.getElementById("select1").value);
    var select2 = parseInt(document.getElementById("select2").value);
    var select3 = parseInt(document.getElementById("select3").value);
    if (id !== select1 && id !== select2 && id !== select3 && id !== 0) {
        const p = getProductById(id);
        if (!p) return;
        document.getElementById("img4").src = p.image;
        document.getElementById("price4").innerHTML = p.price;
        document.getElementById("desc4").innerHTML = p.description;
        document.getElementById("brand4").innerHTML = p.brand;
        document.getElementById("rating4").innerHTML = generateStars(4.0);
        document.getElementById("cartBtn4").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (id === 0) {
        document.getElementById("img4").src = "";
        document.getElementById("price4").innerHTML = "N/A";
        document.getElementById("desc4").innerHTML = "N/A";
        document.getElementById("brand4").innerHTML = "N/A";
        document.getElementById("rating4").innerHTML = "N/A";
        document.getElementById("cartBtn4").disabled = true;
    } else {
        document.getElementById("select4").selectedIndex = 0;
        item4(0);
    }
}