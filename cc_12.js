//Task 1: Business Dashboard – DOM Element Selection and Creation

//Use both document.getElementById and document.querySelector to select the dashboard container
const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("dashboard");

//Create a new <div> element using createElement to represent the metric card
const revenueCard = document.createElement("div");

//Use setAttribute to assign a class (e.g., "metric-card") and an id (e.g., "revenueCard") to the new element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

//Populate the card with a title ("Revenue") and a placeholder value (e.g., "$0")
revenueCard.textContent = "Revenue: $0";

//Append the new metric card to the dashboard container using appendChild
dashboard1.appendChild(revenueCard)

//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

//Use document.querySelectorAll to select all elements with the class "metric-card"
const metricCards = Array.from(document.querySelectorAll(".metric-card"));

//Use an array method such as .forEach() to update each card’s inner text
metricCards.forEach(card => {
    card.textContent += " - Updated";
    card.style.backgroundColor = "green";
});

//Task 3: Dynamic Inventory Management – Adding and Removing Items

//Create an empty <ul id="inventoryList"></ul>, create functionality to dynamically add new product items to this list and remove them upon user interaction
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(productName) {
    const item = document.createElement("li"); //Write a function that creates a new <li> element representing a product
    item.textContent = productName;
    item.setAttribute("class", "product-item", "data-product", productName); //Use setAttribute to add a class

//Append the new product item to the inventory list using appendChild
    inventoryList.appendChild(item);

//Write a separate function that removes a specific <li> when it is clicked
    item.addEventListener("click", () => removeInventoryItem(item));
};

function removeInventoryItem(item) {
    inventoryList.removeChild(item); //Use removeChild within the inventory list to remove the clicked item
}

//Task 4: Business Customer Section – Handling Event Bubbling

//Create a nested structure: a parent container with the id "customerSection" and multiple child elements with the class "customer-card"
const customerSection = document.getElementById("customerSection");

function addCustomerCard(customerName) {
    const customerCard = document.createElement("div");
    customerCard.textContent = customerName;
    customerCard.setAttribute("class", "customer-card");

//Attach click event listeners to both the parent container and each customer card
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

customerCard.addEventListener("click", (event) => {
    console.log("Customer card clicked");
    event.stopPropagation(); //In the customer card's click event handler, log a message (e.g., "Customer card clicked") and call stopPropagation()
});

};