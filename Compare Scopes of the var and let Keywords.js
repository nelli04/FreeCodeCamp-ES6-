function checkScope() {
  
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
  
    console.log('Function scope i is: ', i);
    }
    console.log('Block scope i is: ', i);
    return i;
  }
  