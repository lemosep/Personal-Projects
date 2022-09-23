#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// genuinely a project that I enjoyed doing, thanks for taking a look at it!

char SetRandomValue() {
  char randomChar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+"[random() % 65];

  return randomChar;
}

int main(void) {
  printf("Welcome to your password generator experience!\n");
  printf("this proggram was made with love by Eduardo Lemos\n");
  printf("\n");

  int sizeOfStr = 0;
  // picking up password length
  while ((sizeOfStr < 5) || (sizeOfStr > 16)) {
    printf("Please select the number of characters of your password (from 5 to 16):");
    scanf("%d", &sizeOfStr);
  }

  // initialize the string
  char password[sizeOfStr];

  // fill string
  for (int i = 0; i < sizeOfStr; i++) {
    password[i] = SetRandomValue();
  }

  printf("%s", password);
  
}

