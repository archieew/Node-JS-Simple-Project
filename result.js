document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ratePerKwh").textContent = localStorage.getItem("ratePerKwh") + " Php/kWh";
    document.getElementById("totalConsumption").textContent = localStorage.getItem("totalConsumption") + " kWh";
    document.getElementById("consumptionBill").textContent = "₱" + localStorage.getItem("consumptionBill");
    document.getElementById("generationCharge").textContent = "₱" + localStorage.getItem("generationCharge");
    document.getElementById("transmissionCharge").textContent = "₱" + localStorage.getItem("transmissionCharge");
    document.getElementById("distributionCharge").textContent = "₱" + localStorage.getItem("distributionCharge");
    document.getElementById("taxes").textContent = "₱" + localStorage.getItem("taxes");
    document.getElementById("otherTaxes").textContent = "₱" + localStorage.getItem("otherTaxes");
    document.getElementById("totalBill").textContent = "₱" + localStorage.getItem("totalBill");
});
