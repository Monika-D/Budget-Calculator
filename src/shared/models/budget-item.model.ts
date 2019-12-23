export class BudgetItem{
    // description:string;
    // amount:number;
// TS provide some features so don't define values up instead set constructor values to public
// & remove this keyword 
    constructor(public description:string, public amount:number){
        // this.description = description;
        // this.amount = amount;
    }
}