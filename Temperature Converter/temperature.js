/* TASK!!
● Write the code that will do the following:
1. The user should be allowed to choose which calculation they want to do. The first output that the user sees when the program runs should say:
            In which metric is the temperature you are converting?
            C - Celsius
            F - Fahrenheit
            K - Kelvin
2. The user should then be asked to input the number they want to convert.
3. Next, the user should choose what they want to convert their current temperature to. For example:
            To which metric would you like to convert the temperature?
            C - Celsius
            F - Fahrenheit
            K - Kelvin
4. The program should print out the answer in the following format:
-273°C is 0K.
5. The program should be able to convert from any of the three metrics to any of the three metrics.*/

currentMetric = prompt (" In which metric is the temperature you are converting? \n Celsius (C), \n Fahrenheit (F) \n Kelvin (K)")
tempValue = Number(prompt ("What number do you want to convert"))
newMetric = prompt("To which metric would you like to convert the temperature? \n Celsius (C), \n Fahrenheit (F) \n Kelvin (K)")

/* If currenmetric is celsius and newMetric is Fahrenheit
then (currentMetric x9/5+32) = convertedValue
and make newmetric = F 

if currentmetric is celsius and newMEtric is Kelvin
then (currentmetric + 273.15) = convertedValue
and make newMetric = K

if currentmetric is fahrenheit and new metric is celcius
then ((currentmetric -32) x 5/9) = convertedValue
and make newMetric = C

if currentmetric is fahrenheit and new metric is kelvin
then ((currentmetric + 459.67) x 5/9) = convertedValue
and make newMetric = K

if currentmetric is kelvin and new metric is celcius
then (currentmetric - 273.15) = convertedValue
and make newMetric = C


if currentmetric is kelvin and new metric is fahrenheit
then ((currentmetric x9/5)-459.67 = convertedValue
and make newMetric = F


*/



if (currentMetric == "C" || currentMetric == "Celsius") {
    oldSymbol = "°C"
    if (newMetric == "F" || newMetric == "Fahrenheit") {
        convertedValue = (tempValue*9/5)+32
        newSymbol = "°F"
    }
   else if (newMetric = "K"|| newMetric == "Kelvin") {
        convertedValue = (tempValue+ 273.15)
        var newSymbol = "K"
   }
}

else if (currentMetric == "F" || currentMetric == "Fahrenheit") {
    oldSymbol = "°F"
    if (newMetric == "C" || newMetric == "Celcius") {
        convertedValue = (tempValue-32) * 5/9
        newSymbol = "°C"
    }
   else if (newMetric = "K"|| newMetric == "Kelvin") {
        convertedValue = (tempValue+ 459.67) * 5/9
        var newSymbol = "K"
   }
}

else if (currentMetric == "K" || currentMetric == "Kelvin") {
    oldSymbol = "K"
    if (newMetric == "C" || newMetric == "Celcius") {
        convertedValue = (tempValue- 273.15)
        newSymbol = "°C"
    }
   else if (newMetric = "F"|| newMetric == "Fahrenheit") {
        convertedValue = (tempValue*9/5)- 459.67
        var newSymbol = "°F"
   }
}

else {
    console.log ("Unknown metric detected, please check spelling and try again.")
}
console.log(`${tempValue}${oldSymbol} is ${convertedValue}${newSymbol}.`)