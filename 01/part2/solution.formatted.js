document.body.innerText
  .split('\n')
  .filter(x => x)
  .map(value => 
    value.replaceAll('one', 'o1e')
         .replaceAll('two', 't2o')
         .replaceAll('three', 't3e')
         .replaceAll('four','f4r')
         .replaceAll('five', 'f5e')
         .replaceAll('six', 's6x')
         .replaceAll('seven', 's7n')
         .replaceAll('eight', 'e8t')
         .replaceAll('nine', 'n9e'))
  .map(value => { 
    var a = value.match(new RegExp(/([0-9])+/g));
    return a.at(0).charAt(0) + a.at(-1).split('').pop() 
  })
  .reduce((a, b) => parseInt(a) + parseInt(b))