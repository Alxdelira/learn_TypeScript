import { FslabAccount } from "./FslabAccount"


export class CompanyAccount extends FslabAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Voce pegou um emprestimo')
    }

    deposit = (): void => {
        console.log('A Empresa depositou!')
    };
}
