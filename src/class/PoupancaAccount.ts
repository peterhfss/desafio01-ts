import { DioAccount } from "./DioAccount";

export class PoupancaAccount extends DioAccount{

    constructor(name:string, account_number:number){
        super(name, account_number)
    }

    plusDeposit = (valor:number) : void =>{
        let bonificacao : number = 10
        if(valor > 0){
            this.deposit(valor + bonificacao)
            console.log(`Foi realizado um depósito premium no valor R$ ${bonificacao.toFixed(2)} junto ao seu depósito de R$ ${valor.toFixed(2)} `)
        }else{
            console.log('Erro! Não é possível realizar depósito com valores negativos.')
        }
        
    }
}