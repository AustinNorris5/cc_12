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