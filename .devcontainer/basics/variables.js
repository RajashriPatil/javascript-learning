/* Variables */

const accountId=111 // non changable
let accountEmail="raj@gmail.com" // Changable | { to solve scope(block) problem}
var accountPassword="1234" // Changable |{non scopable} 
accountCity="Pune" // Chnageble
let accountState; //undefined  

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId=2  TypeError: Assignment to constant variable.
accountEmail="rajashri@gmail.com"
accountPassword="0987"
accountCity="Dhule"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
───────── ┬────────────────────── ┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 111                  │
│ 1       │ 'rajashri@gmail.com' │
│ 2       │ '0987'               │
│ 3       │ 'Dhule'              |
  4       │ undefined            │
└─────────┴──────────────────────┘*/
