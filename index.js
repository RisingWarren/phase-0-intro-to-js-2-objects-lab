// Write your solution in this file!

const employee = { 
    name:{},
    StreetAddress:{},

}




function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
     employee[key]=undefined;
     return employee 

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee 

}

function deleteFromEmployeeByKey(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = undefined;
    return updatedEmployee;
}