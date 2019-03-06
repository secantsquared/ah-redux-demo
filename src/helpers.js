// helper for auditParam()
const defaultOptions = { requiredLength: 0, operator: '>' }

/**
 * Check the validity of a function paramater before operating on it.
 * Warning: If compareOptions receives undefined or any other falsy value, the audit will not pass unless
 * the length of the specified paramater is greater than zero (i.e. {}, [], 0 all fail).
 * You can avoid this extra test by explicitly passing the compareOptions as null.
 * @summary Check the validity of a function paramater before operating on it.
 * @param {string} param - The param you wish to audit.
 * @param {string} requiredDataType - The data type to match the param against.
 * @param {object} compareOptions - Additonal config options for the audit.
    * @param {number | string} compareOptions.requiredLength - The minimal required length of the paramater. (Ex: param.length > 6, where '6' is the required length.)
    * @param {string} compareOptions.operator - The operator you wish to use to compare against the required length. (Ex: param.length <= 10, where '<=' is the operator.)
    * @returns {boolean} 
 */
export function auditParam(param, requiredDataType='string', compareOptions=defaultOptions) {
   // Extract necessary varialbes from input
   if (compareOptions) {
       var customTest
       switch(typeof(compareOptions)) {
           case 'function':
               customTest = true
               break
           case 'object': 
               var { requiredLength, operator } = compareOptions
               customTest = false
               break
           default: 
               console.log('compare options aren\'t valid')
               compareOptions = false
       }
   }
   // If caller specifies 'array' as required data type, label it as 'object' for typeof check (see this func's return value).
   if (requiredDataType === 'array' && param instanceof Array) {
       requiredDataType = 'object'
   }

   // Return true if the required data type and compareOptions were met (compareOptions test defaults to 'length of param > 0' if not specified gets ignored if explicitly passed null)
   return typeof(param) == requiredDataType ? 
       (compareOptions !== null) ? 
           (customTest) ? 
               compareOptions(param)
           : requiredLengthMet(operator, requiredLength, determineLengthOf(param))
       : true
   : false

   // The two functions below are helpers for determining the return value
   function determineLengthOf(param) {
       switch (typeof(param)) {
            case 'string':
               return param.trim().length
           case 'number' || 'boolean':
               return param
           case 'object':
               return (param instanceof Array) ?
                   param.length
               : Object.keys(param).length
           default: return 0
       }
   }

   function requiredLengthMet(operator, requiredLength, actualLength) {
       switch (operator) {
           case '>': return actualLength > requiredLength
           case '<': return actualLength < requiredLength
           case '<=': return actualLength <= requiredLength
           case '>=': return actualLength >= requiredLength
           case '==': return actualLength == requiredLength
           case '===': return actualLength === requiredLength
           default: return actualLength > requiredLength
       }
   }
}

/**
 * @summary Generate an audit report that you can inspect before operating on a list of function paramaters.
 * @param {array} fields - An array of objects containing the values you would normally pass to auditParam().
 *   @param {object} fields[n] - Any given object within the fields array.
 *     @param {string} fields[n].param - The param you wish to audit.
 *     @param {string} fields[n].requiredDataType - The data type to match the param against.
 *     @param {string} fields[n].compareOptions - Additonal config options for the audit.
 *       @param {number | string} fields[n].compareOptions.requiredLength - The minimal required length of the paramater. 
 *       @param {string} compareOptions.operator - The operator you wish to use to compare against the required length.
 * @param {number | string} minRequiredFields - The minimum number of fields you expect to pass the audit.
 * @returns {object}
 * @see auditParam
 */
export function auditRequiredFields(fields = [], minRequiredFields=2) {
    var passed
    const auditedFields = Array.from(fields)
        .map(field => {
            const { param, requiredDataType, compareOptions } = field
            if (param && requiredDataType && compareOptions) {
                passed = auditParam(param, requiredDataType, compareOptions) 
                return { field, passed }
            } else if (param && requiredDataType && compareOptions === null) {
                passed = auditParam(param, requiredDataType, null)
                return { field, passed }
            } else if (param && requiredDataType && compareOptions === undefined) {
                passed = auditParam(param, requiredDataType)
                return { field, passed }
            } else if (requiredDataType === undefined) {
                passed = auditParam(param)
                return { field, passed }
            } else {
                return { field, passed: false }
            }
        })

    const fieldsThatPassed = auditedFields.filter(({passed}) => passed)
    const minRequiredFieldsMet = fieldsThatPassed.length >= minRequiredFields
    const eachFieldPassedTheAudit = fieldsThatPassed.length === fields.length
    // the minimum required fields were provided and each field passed the audit
    const auditPassed = minRequiredFieldsMet && eachFieldPassedTheAudit
        
    return {
        auditPassed, 
        minRequiredFieldsMet,
        fieldsThatPassed: [fieldsThatPassed.length, ...fieldsThatPassed], 
    }
}
