const calculateBtn = document.querySelectorAll("button")[1];

calculateBtn.addEventListener("click", () => {

    const values = document.querySelectorAll(".expense-box input");

    const salary = Number(values[0].value);
    const family = Number(values[1].value);
    const shopping = Number(values[2].value);
    const food = Number(values[3].value);
    const bike = Number(values[4].value);
    const current = Number(values[5].value);
    const hospital = Number(values[6].value);
    const other = Number(values[7].value);

    const totalExpenses =
        family + shopping + food + bike +
        current + hospital + other;

    const savings = salary - totalExpenses;

    document.querySelector(".result-box").innerHTML = `
        <h2>Expense Report</h2>
        <p>Total Expenses: ₹${totalExpenses}</p>
        <p>Savings: ₹${savings}</p>
    `;
});

