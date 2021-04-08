function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!';
  }
  else if (someNumber > 2000 && someNumber < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(someCity){
  return (someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(someValue){
  let result
  switch (someValue) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    case 'thanks for everything':
      result = 'Bye.'
      break;
  }
  return result;
}