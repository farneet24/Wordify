#include <iostream>
#include <cmath>
using namespace std;

int complement(int number) {
        unsigned mask = ~0;
        while (number & mask) mask <<= 1;
        return number ^ ~mask;
}

bool check(int first, int second){
    
    if(first == second){
        return true;
    }
    else{
        return false;
    }
}


int main()
{
    int num1, num2;
    printf("Enter the first number: \n");
    scanf("%d", &num1);
    printf("Enter the second number: \n");
    scanf("%d", &num2);

    if(check(complement(num1), num2)){
        printf("Yes, the numbers are complements of each other\n");
    }
    else{
        printf("No, the numbers are not complements of each other\n");
    }
    
    return 0;
}