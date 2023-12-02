document.body.innerText
  .split('\n')
  .filter(x => x)
  .map(value => { 
    var a = value.match(new RegExp(/(\d)+/g)); 
    return a[0].charAt(0) + a.at(-1).split('').pop() 
  })
  .reduce((a, b) => parseInt(a) + parseInt(b))