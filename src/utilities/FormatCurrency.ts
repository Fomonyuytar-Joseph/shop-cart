const CURREENCY_FORMATTER= new Intl.NumberFormat(undefined,{
   currency:"USD",style:"currency" 
})


export function FormatCurrency(number:number){

      return CURREENCY_FORMATTER.format(number)
}