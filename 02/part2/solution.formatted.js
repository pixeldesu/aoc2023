document.body.innerText
  .split('\n')
  .filter(x => x)
  .map((value) => {
    var s = {red: 0, blue: 0, green: 0}, 
        p = value.split(':')[1].split(';');
        
    p.forEach((pull) => { 
      const r = [...(pull.trim().matchAll(new RegExp(/(?:(?:(?<red>\d+) red)|(?:(?<green>\d+) green)|(?:(?<blue>\d+) blue)){1,3}?/g)))]
        .map(v => v.groups)
        .reduce((a, b) => ({ ...(JSON.parse(JSON.stringify(b))), ...(JSON.parse(JSON.stringify(a))) }));

      Object.entries(r).forEach(pv => {
        if (parseInt(pv[1]) > s[pv[0]]) {
          s[pv[0]] = parseInt(pv[1])
        }
      });
    });
    return Object.values(s).reduce((a, b) => a * b);
  })
  .reduce((a, b) => parseInt(a) + parseInt(b));