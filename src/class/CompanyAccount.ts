import { DioAccount } from "./DioAccount"
import { PeopleAccount } from "./PeopleAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor:number): void => {
    if(this.getStatus() == true){
      if(valor > 0){
        this.deposit(valor)
        console.log(`${this.getName()}, seu empréstimo no valor de R$ ${valor.toFixed(2)} foi realizado com sucesso!`)
      }
    }else{
      console.log('Não é possível realizar empréstimos para contas desativadas!')
    }
    
  }
}
