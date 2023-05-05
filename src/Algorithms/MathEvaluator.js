class MathEvaluator { 

    constructor(expression) {
        this.operandStack = [];
        this.operatorStack = [];
        this.token = expression.match(/\d+|[+\-*/()]/g);
        this.precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };
    }

    doOperation() {
        let rightOperand = this.operandStack.pop();
        let leftOperand = this.operandStack.pop();
        let operator = this.operatorStack.pop();
        switch (operator) {
            case '+':
                this.operandStack.push(leftOperand + rightOperand);
                break;
            case '-':
                this.operandStack.push(leftOperand - rightOperand);
                break;   
            case '*':
                this.operandStack.push(leftOperand * rightOperand);
                break;
            case '/':
                this.operandStack.push(leftOperand / rightOperand);
                break;
         
        }
    }

    evaluate() {
        this.token.forEach(currToken => {
            const currNumber = parseFloat(currToken);
            const currTokenIsNumber = !isNaN(parseFloat(currNumber)) && isFinite(currNumber);
            if (currTokenIsNumber) {
                this.operandStack.push(currNumber);
            } else if (currToken === '(') {
                this.operatorStack.push(currToken);
            } else if (currToken === ')') {
                while (this.operatorStack[this.operatorStack.length - 1] !== '(') {
                    this.doOperation();
                }
                this.operatorStack.pop();
            } else {
                while ( this.operatorStack.length > 0 &&
                        this.precedence[this.operatorStack[this.operatorStack.length - 1]] >= this.precedence[currToken]
                      ) {
                    this.doOperation();
                }
                this.operatorStack.push(currToken);
            }
        });
        while (this.operatorStack.length > 0) {
            this.doOperation();
        }
        
        if (this.operatorStack.length !== 0) {
            return "Invalid Math Expression";
        }
        return this.operandStack.pop();
    }
}

module.exports = MathEvaluator;
