import { Component } from "@angular/core";
import { IncomeService } from "./../../services/incomeService";

@Component({
    selector:'app-dashboard',
    templateUrl:'app/components/dashboard/dashboard.html',
})

export class DashboardComponent {
    private totalIncome:number = 0 ;
    private incomeCategories;
    constructor(private incomeSvc : IncomeService){
        this.totalIncome = this.incomeSvc.getTotalIncome();
        console.log("totalIncome:" + this.totalIncome);
        this.incomeCategories = this.incomeSvc.getCatData();
        console.log("from Component:" + this.incomeCategories);
    }
        

}