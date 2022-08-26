// 1 var let const
// break up with var

const numbers = [12,546,45,98];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tax, bonus)
{
   const remaining = salary - salary*tax;
   const total = remaining + bonus;
   return total
}
