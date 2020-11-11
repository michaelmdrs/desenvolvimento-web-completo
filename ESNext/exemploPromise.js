function successCallback(result) {
    console.log(`It succeeded with ${result}`)
}

function failureCallback(error) {
    console.log(`It failed with ${error}`)
}

doSomething(successCallback, failureCallback)

const promise = doSomething()
promise.then(successCallback, failureCallback)

doSomething().then(successCallback, failureCallback)

// Encadeamento
const promise2 = promise.then(successCallback, failureCallback)

// Essa promise representa a conclusão dos parâmetros passados.
const promise2 = doSomething().then(successCallback, failureCallback)