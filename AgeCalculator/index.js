// Encapsulate the logic related to calculating age in a separate class
class AgeCalculator {
    static calculateAge(day, month, year) {
        const currentDate = new Date();
        const birthDate = new Date(year, month - 1, day);
        const ageDifference = currentDate - birthDate;
        const ageInYears = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25)); // Approximate leap years
        return ageInYears;
    }
}

class ButtonClickHandler {
    constructor() {
        this.calculateButton = document.getElementById('btn');
        this.dateSelector = document.getElementById('birthday');
        this.calculatorContainer = document.querySelector(".calculator");
        this.ageElement = null; // Store a reference to the totalage element
    }

    handleButtonClick() {
        this.calculateButton.addEventListener('click', () => {
            const cdate = this.dateSelector.value;
            const dateObject = new Date(cdate);
            const day = dateObject.getDate();
            const month = dateObject.getMonth() + 1; // Months are zero-based, so we add 1
            const year = dateObject.getFullYear();
            const totalAge = AgeCalculator.calculateAge(day, month, year);
            console.log(totalAge);
            this.displayTotalAge(totalAge);
        });
    }

    displayTotalAge(totalAge) {
        // Remove existing totalage element if it exists
        if (this.ageElement) {
            this.calculatorContainer.removeChild(this.ageElement);
        }

        // Create a new totalage element
        this.ageElement = document.createElement('p');
        this.ageElement.textContent = `Total age: ${totalAge}`;
        this.ageElement.setAttribute('id', 'result');
        
        // Append the new totalage element
        this.calculatorContainer.appendChild(this.ageElement);
    }
}

// Create an instance of the ButtonClickHandler class and handle the button click
const buttonClickHandler = new ButtonClickHandler();
buttonClickHandler.handleButtonClick();

