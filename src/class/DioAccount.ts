export abstract class DioAccount {

  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  getStatus = (): boolean  =>{
    return this.status
  }

  setStatus = (value: boolean) : void =>{
    if(value === false){
      if(this.balance > 0){
        throw new Error('Realize a retirada de todo o valor da conta para poder desativar!')
      }
    }
    this.status = value
  }

  /* Depósito */
  deposit = (valor : number): void => {
    if(this.validateStatus()){
      if(valor < 0){
        throw new Error('==== Error ===== \n Não é possível realizar depósitos com valores negativos!')
      }
      this.balance += valor
      console.log(`Depósito do valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
    }
  }

  /* Saque  */
  withdraw = (valor : number): void => {
    if(this.validateStatus()){
      if (valor > 0){
        if(valor > this.balance){
            throw new Error('Saldo insuficiente!')
        }
        this.balance -= valor
        console.log(`Saque no valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
      }
      else{
        console.log('Não é possível realizar saque com valores negativos!')
      }
    }
  }

  /* Saldo  */
  getBalance = (): void => {
    console.log(`Saldo: R$ ${this.balance.toFixed(2)}`)
  }

  /* Alteração do status da conta  */
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
