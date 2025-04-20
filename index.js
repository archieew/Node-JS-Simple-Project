document.addEventListener('DOMContentLoaded', function () {
    const rates = {
        'NCR': {
            'Residential': 10.26,
            'LowCommercial': 10.81,
            'LowIndustrial': 9.69,
            'HighCommercial': 8.37,
            'HighIndustrial': 11.25
        },
        'Luzon': {
            'Residential': 10.13,
            'LowCommercial': 10.52,
            'LowIndustrial': 9.55,
            'HighCommercial': 8.33,
            'HighIndustrial': 11.26
        },
        'Visayas': {
            'Residential': 9.57,
            'LowCommercial': 8.71,
            'LowIndustrial': 8.78,
            'HighCommercial': 8.66,
            'HighIndustrial': 10.65
        },
        'Mindanao': {
            'Residential': 7.04,
            'LowCommercial': 6.59,
            'LowIndustrial': 6.55,
            'HighCommercial': 6.19,
            'HighIndustrial': 7.85
        },
        'Other': {
            'Residential': 9.77,
            'LowCommercial': 10.08,
            'LowIndustrial': 8.93,
            'HighCommercial': 8.08,
            'HighIndustrial': 9.01
        }
    };

    // Auto-fill date fields
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    document.getElementById('fromDate').valueAsDate = firstDay;
    document.getElementById('toDate').valueAsDate = lastDay;

    document.getElementById("calculateBtn").addEventListener("click", function () {
        // Get values from form
        const accountNumber = document.getElementById("accountNumber").value;
        const lastName = document.getElementById("lastName").value;
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const address = document.getElementById("address").value;
        const region = document.getElementById("region").value;
        const classification = document.getElementById("classification").value;
        const previousReading = parseFloat(document.getElementById("previousReading").value);
        const presentReading = parseFloat(document.getElementById("presentReading").value);

        if (!region || !classification || isNaN(previousReading) || isNaN(presentReading) || presentReading < previousReading) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Compute total consumption
        const totalConsumption = presentReading - previousReading;
        const rate = rates[region][classification] || 10.26; // Default to 10.26 if missing
        const consumptionBill = totalConsumption * rate;

        // Calculate breakdown
        const generationCharge = consumptionBill * 0.55;
        const transmissionCharge = consumptionBill * 0.101;
        const distributionCharge = consumptionBill * 0.175;
        const taxes = consumptionBill * 0.117;
        const otherTaxes = consumptionBill * 0.057;
        const totalBill = consumptionBill + generationCharge + transmissionCharge + distributionCharge + taxes + otherTaxes;

        // Format Account Name
        const accountName = `${lastName}, ${firstName} ${middleName ? middleName.charAt(0) + "." : ""}`;

        // Store data in localStorage
        localStorage.setItem("ratePerKwh", rate.toFixed(2));
        localStorage.setItem("accountNumber", accountNumber);
        localStorage.setItem("accountName", accountName);
        localStorage.setItem("address", address);
        localStorage.setItem("region", region);
        localStorage.setItem("classification", classification);
        localStorage.setItem("fromDate", firstDay.toISOString().split('T')[0]);
        localStorage.setItem("toDate", lastDay.toISOString().split('T')[0]);
        localStorage.setItem("previousReading", previousReading);
        localStorage.setItem("presentReading", presentReading);
        localStorage.setItem("totalConsumption", totalConsumption.toFixed(2));
        localStorage.setItem("consumptionBill", consumptionBill.toFixed(2));
        localStorage.setItem("generationCharge", generationCharge.toFixed(2));
        localStorage.setItem("transmissionCharge", transmissionCharge.toFixed(2));
        localStorage.setItem("distributionCharge", distributionCharge.toFixed(2));
        localStorage.setItem("taxes", taxes.toFixed(2));
        localStorage.setItem("otherTaxes", otherTaxes.toFixed(2));
        localStorage.setItem("totalBill", totalBill.toFixed(2));

        // Redirect to the result page
        window.location.href = "result.html";
    });
});
