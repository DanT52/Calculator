class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes(".")){
            return
        }
        if (this.currentOperand == '0' && number !== '.') {
            this.clear()
            this.updateDisplay()
            
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
        

    }

    chooseOperation(operation) {
        
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '÷':
                computation = prev / curr
                break
            case '×':
                computation = prev * curr
                break
            default:
                return


        }
        this.currentOperand = computation.toString()
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplaynumber(numString){
        const num = parseFloat(numString);
        if (isNaN(num)) {
            return "";
         }
        const numParts = numString.split(".");
         numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return numParts.join(".");
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplaynumber(this.currentOperand)
        if (this.operation != null){

            this.previousOperandTextElement.innerText = `${this.getDisplaynumber(this.previousOperand)} ${this.operation}`

        }else{
        this.previousOperandTextElement.innerText = `${this.getDisplaynumber(this.previousOperand)}`
        }

        
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)



numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})