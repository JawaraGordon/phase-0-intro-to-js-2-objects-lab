// Write your solution in this file!


const employee = {};


function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      };
  };

 
  updateEmployeeWithKeyAndValue(employee,name,Sam);

//   beforeEach(function ()  {
//     for (const key in employee) {
//       delete employee[key];
//     }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
    };

    destructivelyUpdateEmployeeWithKeyAndValue(employee,name,Sam);

    //   beforeEach(function () {
    // for (const key in employee) {
    //   delete employee[key];
    // }

function deleteFromEmployeeByKey(obj, key, value){
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj
    
};

deleteFromEmployeeByKey(employee, name, Sam);

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete obj[key];
    return obj
  };

  destructivelyDeleteFromEmployeeByKey(employee, key, value)

// function updateEmployeeWithKeyAndValue(employee, key, value){
    
//     const newObj = { ...obj };

//     newObj[key] = value;

//     return newObj;
// };

// updateEmployeeWithKeyAndValue(employee,name,Sam,);

