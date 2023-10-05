// Fast and Light Relative Time Strings in JS
// Cómo crear un TimeAgo sin dependencias

const rtf = new Intl.RelativeTimeFormat('es');

rtf.format(-2, 'day') // "hace 2 días"
rtf.format(-3, 'month') // "hace 3 meses"
rtf.format(1, 'day') // 'tomorrow'
rtf.format(-2, 'year') // '2 years ago'
rtf.format(10, 'minute') // 'in 10 minutes'

console.log(rtf.format(-3, 'month'));