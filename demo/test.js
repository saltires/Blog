const retry = useRetrable(test, 3)


const useRetrable = (fn, time) => {
    let result

    return (...args) => {
        fn.apply().then((item) => {
            result = item
        }).catch((err) => {
            if (time === 0) {
                result = err
            } else {
                useRetrable(fn, --time).apply(null, ...args)
            }
        })

        return result && result
    }
}

const test = {
    count: 1,
    do() {
        return new Promise((resolve, reject) => {
            if (this.count++ == 2) {
                resolve(this.count)
            } else {
                reject('次数不对')
            }
        })
    }
}

const it = useRetrable(test.do, 3)()

