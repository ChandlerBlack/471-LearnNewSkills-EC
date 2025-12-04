#include <iostream>
#include <cmath>

using namespace std;

// This is a simple calculator

int main () {
    double num1, num2;
    char op; 
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    cout << "Enter operator (+, -, *, /): ";
    cin >> op;
    if (op == '+') {
        cout << "Sum: " << num1 + num2 << endl;
    }
    else if (op == '-') {
        cout << "Difference: " << num1 - num2 << endl;
    }
    else if (op == '*') {
        cout << "Product: " << num1 * num2 << endl;
    }
    else if (op == '/') {
        if (num2 != 0) {
            cout << "Quotient: " << num1 / num2 << endl;
        } else {
            cout << "Error: Division by zero!" << endl;
        }
    }
    else {
        cout << "Invalid operator!" << endl;
    }
    return 0;
}