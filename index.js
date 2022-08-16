function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!";
  }
  if (distance>2000 && distance<=2500) {
    return "I will gladly take your thirty bucks."
  }
  if (distance>2500){
    return "No can do."
  }
}

function ternaryCheckCity(x){
  // Write your code here!
  switch (x) {
    case 'NYC':
      return 'Ok, sounds good.';
      break;
    case 'Pittsburgh':
      return 'No go.';
      break;
  }

}

function switchOnCharmFromTip(x){
  // Write your code here!
  switch(x){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}