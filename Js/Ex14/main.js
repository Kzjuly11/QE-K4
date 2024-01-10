function humanize_format(n) {
    if (n % 100 >= 11 && n % 100 <= 13) {
      return n + "th";
    }
   
    switch (n % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
      default:
        return n + "th";
    }
   }
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));