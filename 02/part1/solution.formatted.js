document.body.innerText
  .split('\n')
  .filter(x => x)
  .filter((value) => {
    var m = {red: 12, green: 13, blue: 14},
        s = {red: 0, blue: 0, green: 0}, 
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
    return Object.entries(s).every(sv => m[sv[0]] >= sv[1]);
  })
  .map((value) => value.match(new RegExp(/^Game (\d+)/))[1])
  .reduce((a, b) => parseInt(a) + parseInt(b));