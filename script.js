/* ===============================
   MOBILE MENU
================================ */

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


/* ===============================
   INCOME COUNTER
================================ */

let income = 0;

const incomeCounter =
    document.getElementById("incomeCounter");

function animateIncome() {

    const target = 25000;

    let current = 0;

    const speed = 30;

    const timer = setInterval(() => {

        current += 500;

        if (current >= target) {

            current = target;

            clearInterval(timer);
        }

        incomeCounter.innerText =
            current.toLocaleString("en-IN");

    }, speed);
}

window.addEventListener("load", animateIncome);


/* ===============================
   TOOL MODAL
================================ */

const modal =
    document.getElementById("toolModal");

const modalContent =
    document.getElementById("modalContent");


function openModal(content) {

    modalContent.innerHTML = content;

    modal.style.display = "flex";
}


function closeTool() {

    modal.style.display = "none";

}


window.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeTool();

    }

});


/* ===============================
   INCOME CALCULATOR
================================ */

function openIncomeCalculator() {

    openModal(`

        <h2>💰 Income Calculator</h2>

        <p class="modal-description">
            Estimate your monthly website income.
        </p>

        <label>Monthly Visitors</label>

        <input
            type="number"
            id="visitors"
            placeholder="Example: 10000"
        >

        <label>Estimated Earnings per 1000 Visitors (₹)</label>

        <input
            type="number"
            id="earningRate"
            value="100"
        >

        <button
            class="action"
            onclick="calculateIncome()">

            Calculate Income

        </button>

        <div
            class="result"
            id="incomeResult">

        </div>

    `);
}


function calculateIncome() {

    const visitors =
        Number(
            document.getElementById("visitors").value
        );

    const rate =
        Number(
            document.getElementById("earningRate").value
        );

    if (!visitors || !rate) {

        document.getElementById("incomeResult")
            .innerText =
            "Please enter valid values.";

        return;
    }

    const income =
        (visitors / 1000) * rate;

    document.getElementById("incomeResult")
        .innerHTML = `

            Estimated Monthly Income:

            <strong>
                ₹${income.toLocaleString("en-IN")}
            </strong>

        `;
}


/* ===============================
   PERCENTAGE CALCULATOR
================================ */

function openPercentageCalculator() {

    openModal(`

        <h2>📊 Percentage Calculator</h2>

        <p class="modal-description">
            Find what percentage one number is of another.
        </p>

        <label>Value</label>

        <input
            type="number"
            id="percentageValue"
            placeholder="Example: 25"
        >

        <label>Total</label>

        <input
            type="number"
            id="percentageTotal"
            placeholder="Example: 100"
        >

        <button
            class="action"
            onclick="calculatePercentage()">

            Calculate Percentage

        </button>

        <div
            class="result"
            id="percentageResult">

        </div>

    `);
}


function calculatePercentage() {

    const value =
        Number(
            document.getElementById(
                "percentageValue"
            ).value
        );

    const total =
        Number(
            document.getElementById(
                "percentageTotal"
            ).value
        );

    if (!total) {

        document.getElementById(
            "percentageResult"
        ).innerText =
            "Please enter a valid total.";

        return;
    }

    const result =
        (value / total) * 100;

    document.getElementById(
        "percentageResult"
    ).innerHTML = `

        Result:

        <strong>
            ${result.toFixed(2)}%
        </strong>

    `;
}


/* ===============================
   WORD COUNTER
================================ */

function openWordCounter() {

    openModal(`

        <h2>📝 Word Counter</h2>

        <p class="modal-description">
            Count words and characters instantly.
        </p>

        <textarea
            id="wordText"
            rows="8"
            placeholder="Type or paste your text here..."
            oninput="updateWordCount()">
        </textarea>

        <div
            class="result"
            id="wordResult">

            Words: 0 |
            Characters: 0

        </div>

    `);
}


function updateWordCount() {

    const text =
        document.getElementById(
            "wordText"
        ).value;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    const characters =
        text.length;

    document.getElementById(
        "wordResult"
    ).innerText =

        `Words: ${words} | Characters: ${characters}`;
}


/* ===============================
   EMI CALCULATOR
================================ */

function openEMICalculator() {

    openModal(`

        <h2>💰 EMI Calculator</h2>

        <p class="modal-description">
            Calculate your estimated monthly loan EMI.
        </p>

        <label>Loan Amount (₹)</label>

        <input
            type="number"
            id="loanAmount"
            placeholder="500000"
        >

        <label>Annual Interest Rate (%)</label>

        <input
            type="number"
            id="interestRate"
            placeholder="8.5"
            step="0.01"
        >

        <label>Loan Tenure (Years)</label>

        <input
            type="number"
            id="loanYears"
            placeholder="5"
        >

        <button
            class="action"
            onclick="calculateEMI()">

            Calculate EMI

        </button>

        <div
            class="result"
            id="emiResult">

        </div>

    `);
}


function calculateEMI() {

    const principal =
        Number(
            document.getElementById(
                "loanAmount"
            ).value
        );

    const annualRate =
        Number(
            document.getElementById(
                "interestRate"
            ).value
        );

    const years =
        Number(
            document.getElementById(
                "loanYears"
            ).value
        );

    if (
        !principal ||
        !annualRate ||
        !years
    ) {

        document.getElementById(
            "emiResult"
        ).innerText =
            "Please enter all values.";

        return;
    }

    const monthlyRate =
        annualRate / 12 / 100;

    const months =
        years * 12;

    const emi =
        principal *
        monthlyRate *
        Math.pow(
            1 + monthlyRate,
            months
        ) /
        (
            Math.pow(
                1 + monthlyRate,
                months
            ) - 1
        );

    const totalPayment =
        emi * months;

    const totalInterest =
        totalPayment - principal;

    document.getElementById(
        "emiResult"
    ).innerHTML = `

        <strong>
            Monthly EMI:
            ₹${emi.toLocaleString(
                "en-IN",
                {
                    maximumFractionDigits: 2
                }
            )}
        </strong>

        <br><br>

        Total Interest:
        ₹${totalInterest.toLocaleString(
            "en-IN",
            {
                maximumFractionDigits: 2
            }
        )}

        <br>

        Total Payment:
        ₹${totalPayment.toLocaleString(
            "en-IN",
            {
                maximumFractionDigits: 2
            }
        )}

    `;
}


/* ===============================
   PREMIUM BUTTON
================================ */

function showPremiumMessage() {

    openModal(`

        <h2>⭐ Premium Resources</h2>

        <p>
            Premium templates, guides and
            resources will be available here.
        </p>

        <br>

        <p>
            🚀 Coming Soon
        </p>

    `);
}


/* ===============================
   FAQ
================================ */

function toggleFAQ(button) {

    const faq =
        button.parentElement;

    const isOpen =
        faq.classList.contains("open");

    document
        .querySelectorAll(".faq")
        .forEach(item => {

            item.classList.remove("open");

            const icon =
                item.querySelector(
                    "button span"
                );

            if (icon) {
                icon.innerText = "+";
            }

        });

    if (!isOpen) {

        faq.classList.add("open");

        const icon =
            button.querySelector("span");

        if (icon) {
            icon.innerText = "−";
        }

    }

}


/* ===============================
   CLOSE MENU AFTER CLICK
================================ */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                document
                    .getElementById("navMenu")
                    .classList.remove("active");

            }
        );

    });