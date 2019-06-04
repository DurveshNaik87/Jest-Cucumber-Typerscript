export class country{
    countryNo:number|null;
    countryName:String|null;
    countrycapital:string|null;
    
    constructor(countryNo:number,countryName:String,countrycapital:string){
        this.countryNo = countryNo;
        this.countryName = countryName;
        this.countrycapital = countrycapital;
    }
}