const celciusInput=document.querySelector("#celcius > input"); //input 요소는 이런 식으로 지정해준다.
const fahrenheitInput=document.querySelector("#fahrenheit > input");
const kelvinInput=document.querySelector("#kelvin > input");

function roundNum(num){
    return Math.round(num*100)/100; //소수 둘째 자리까지만 나오게 만드는 법.
}
//num-->3.141687387837
//num*100-->314.1687387837
//Math.round(num*100)-->314.00
//Math.round(num*100)/100-->3.14

function celciusToFahrenheitAndKelvin(){
    const cTemp=parseFloat(celciusInput.value); //그냥 두면 cTemp의 type은 string. 그래서 parseFloat을 통해 실수로 형변환을 시켜주어야 한다.
    const fTemp=(cTemp*(9/5)+32);
    const kTemp=cTemp+273.15;
    fahrenheitInput.value=roundNum(fTemp);
    kelvinInput.value=roundNum(kTemp);
}

function fahrenheitToCelciusANdKelvin(){
    const fTemp=parseFloat(fahrenheitInput.value);
    const cTemp=(fTemp-32)*(5/9);
    const kTemp=(fTemp+459.67)*5/9;
    celciusInput.value=roundNum(cTemp);
    kelvinInput.value=roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit(){
    const kTemp=parseFloat(kelvinInput.value);
    const cTemp=kTemp-273.15;
    const fTemp=9/5*(kTemp-273)+32;
    celciusInput.value=roundNum(cTemp);
    fahrenheitInput.value=roundNum(fTemp);
}

function main(){
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin); /*여기서 input요소를 사용하네*/
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusANdKelvin);    
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();
