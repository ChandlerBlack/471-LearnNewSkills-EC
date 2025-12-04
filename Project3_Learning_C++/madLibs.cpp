#include <iostream>
#include <cmath>

using namespace std;

int main () {


    string color, pluralNoun, celebrity;
    
    cout << "Mad Libs Game!" << endl;
    cout << "" << endl;
    cout << "Enter a color: ";
    cin >> color;
    cout << "Enter a plural noun: ";
    cin >> pluralNoun;
    cout << "Enter a celebrity: ";
    cin >> celebrity;
    cout << "" << endl;

    cout << "Roses are " << color << endl;
    cout << pluralNoun << " are blue" << endl;
    cout << "I love " << celebrity << endl;

    return 0;

}