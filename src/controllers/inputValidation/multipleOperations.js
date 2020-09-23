let multipleOperations = function (operation){
    let findError = null
    if(operation === undefined){
        findError = "El parametro no puede ser undefine"
    }
    if(operation === null){
        findError = "El parametro no puede ser null"
    }
    if(findError != null){
        return findError
    }
    operation = operation.toString()
    return operation
}

module.exports = multipleOperations