let outputDelay = function(ms){
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log("Всем спасибо все свободны)")
        resolve();
    },ms);
})
}

//выводим параллельно
Promise.all([outputDelay(1000), outputDelay(2000),  outputDelay(4000),  outputDelay(4600), outputDelay(5000)])

//выводим последовательно
outputDelay(100)
    .then(resolve => outputDelay(1000))
    .then(resolve => outputDelay(500))
    .then(resolve => outputDelay(1000))
    .then(resolve => outputDelay(1000))