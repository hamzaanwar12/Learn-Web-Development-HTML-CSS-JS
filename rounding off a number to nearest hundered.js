function round100(number) {

    let remainder,num_to_be_added;
  
     remainder = number % 100;
     num_to_be_added = 100 - remainder;
    if (remainder >= 50) {
        number = number + num_to_be_added;
        return number;
    }

    else if (remainder < 50) {
        number = number - remainder;
        return number;
    }

}