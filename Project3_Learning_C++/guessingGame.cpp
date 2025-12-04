#include <iostream>

using namespace std;

int main() {
    int secretNum = 42;
    int guess;
    int guessCount = 0;

        cout << "Welcome to the Guessing Game!" << endl;
        cout << "You have 5 attempts to guess the secret number between 1 and 100." << endl;
    while (guess != secretNum && guessCount < 5) {
        cout << "Enter your guess: ";
        cin >> guess;
        guessCount++;
        if (guess < secretNum) {
            cout << "Too low!" << endl;
        }
        else if (guess > secretNum) {
            cout << "Too high!" << endl;
        }
        else {
            cout << "Congratulations! You've guessed the secret number!" << endl;
        }
        // Player loses 
        if (guessCount == 5 && guess != secretNum) {
            cout << "Wow you suck! You've used all your attempts. The secret number was " << secretNum << "." << endl;
        }
    }
    


    return 0;
}