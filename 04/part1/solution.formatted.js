document.body.innerText
  .split('\n')
  .filter(x => x)
  .map(value => {
    let [winningNumbers, allNumbers] = value.split(':')[1].split('|')
    winningNumbers = [...winningNumbers.trim().matchAll(/(\d+)+/g)]
      .map(v => parseInt(v[1]))

    allNumbers = [...allNumbers.trim().matchAll(/(\d+)+/g)]
      .map(v => parseInt(v[1]))

    let r = 1;
    const matches = allNumbers.filter(num => winningNumbers.includes(num));

    if (matches.length == 0) {
      return 0;
    }

    matches.pop();

    for (let i in matches) {
      r = r * 2;
    }

    return r
  })
  .reduce((a, b) => a + b)