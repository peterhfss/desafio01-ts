import { CompanyAccount } from './src/class/CompanyAccount'
import { PeopleAccount } from './src/class/PeopleAccount'
import { PoupancaAccount } from './src/class/PoupancaAccount'


console.log(` ========== PeopleAccount ========== \n`)

// instância da classe PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Dua Lipa', 1)

console.log(`Movimentação bancária de ${peopleAccount.getName()} | Número da Conta : ${peopleAccount.getAccountNumber()}`)
peopleAccount.deposit(500)
peopleAccount.withdraw(240)
peopleAccount.getBalance()
//peopleAccount.setStatus(false)
peopleAccount.deposit(600)
peopleAccount.getBalance()

console.log('\n')

console.log(` ========== CompanyAccount ========== \n`)

// instância da classe CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('Google', 101)

console.log(`Movimentação bancária de ${companyAccount.getName()} | Número da Conta : ${companyAccount.getAccountNumber()}`)
companyAccount.getLoan(5000)
companyAccount.withdraw(1500)
companyAccount.getBalance()

console.log('\n')

console.log(` ========== PoupançaAccount ========== \n`)

// instância da classe PoupancaAccount
const poupancaAccount: PoupancaAccount = new PoupancaAccount('Luke', 42)

console.log(`Movimentação bancária de ${poupancaAccount.getName()} | Número da Conta : ${poupancaAccount.getAccountNumber()}`)
poupancaAccount.plusDeposit(800)
poupancaAccount.getBalance()


