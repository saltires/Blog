const  dayjs  =  require('dayjs')

console.log(dayjs('2018-08-08'))
console.log(dayjs().format('YYYY-MM-DD:HH:mm:ss'))
console.log(dayjs().set('month', 3).month())

for (let i = 0; i < 9999999999; i++) {
    if (i === 9999999998) {
        console.log(i)
    }
}

module.exports = {
    
}
