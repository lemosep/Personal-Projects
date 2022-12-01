#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#define MAX_LIMIT len
// based on florinpop github repository (1st question), I will make a binary
// to
// decimal calculator in C.

int main(void) {
  int len = 0;
  int ans;

  printf("Type amount of digits of number:\n");
  scanf("%i", &len);

  // with the acquired length, create array

  // get string
  char bin[len];
  scanf("%s", bin);

  for (int i = 0; i < len; i++) {
    if (bin[i] == '1') {
      ans += pow(2,(len-i) - 1);
    } else if (bin[i] != '0' && bin[i] != '1') {
      printf("Error - invalid binary number.\n");
    }
  }

  printf("\n%i \n", ans);
  printf("Made by EduLemos0");
}