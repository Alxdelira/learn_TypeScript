
import { CompanyAccount } from './POO_TypeScript/class/CompanyAccount'
import { PeopleAccount } from './POO_TypeScript/class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mateus', 755)
const companyAccount: CompanyAccount = new CompanyAccount('EMPRESA', 755)

console.log(peopleAccount)
console.log(companyAccount)

peopleAccount.deposit()

