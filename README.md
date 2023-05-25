# Calculator Web App

This project is a simple calculator web app developed using HTML, CSS, and JavaScript.

## Preview
![Preview](https://i.imgur.com/xuIxWCI.png)

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division.
- Clear all inputs.
- Delete the most recent input.
- Supports decimal calculations.

## Concenpts Practiced:

- Using ES6 classes to organize code
- Syncing JavaScript code with a UI
- CSS Grid
- Flexbox
- Handle user input
- Debuging edge cases

## Project Structure

### HTML
The calculator's interface is constructed with basic HTML. Each button is represented as a `button` element with a `data-` attribute indicating its purpose.

### CSS
The visual styling of the calculator is specified in the `styles.css` file. This includes the layout of the calculator grid and the appearance of buttons and the display area.

### JavaScript
The calculator's functionality is defined in the `script.js` file, which contains a `Calculator` class. This class manages the calculator's state and defines methods for the various operations and actions that the calculator can perform.

#### Calculator class
- `constructor(previousOperandTextElement, currentOperandTextElement)` - Initializes the calculator.
- `clear()` - Clears all operations and inputs.
- `delete()` - Deletes the most recent input.
- `appendNumber(number)` - Appends a number to the current operand.
- `chooseOperation(operation)` - Chooses the operation to perform.
- `compute()` - Computes the result of the operation.
- `getDisplaynumber(numString)` - Formats a number for display.
- `updateDisplay()` - Updates the display of the calculator.

## Usage

Open `index.html` in your web browser to use the calculator.

Or just open the [github pages link](dant52.github.io/Calculator/)
