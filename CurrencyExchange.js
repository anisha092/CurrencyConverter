let input= document.getElementById("amount");
let FromInput= document.getElementById("FromCurrency");
let ToInput= document.getElementById("ToCurrency");

const convert=()=>{
      let amount= input.value;
      let fromCurrency= FromInput.value;
      let toCurrency= ToInput.value;


      fetch(`https://v6.exchangerate-api.com/v6/14fee86c202aa5aea32dc59b/latest/${fromCurrency}`)
      .then((response)=> response.json())
      .then((data)=>{
        let ans=(data.conversion_rates[toCurrency]* amount);
        document.getElementById("result").innerHTML=`${amount} ${fromCurrency} = ${ans} ${toCurrency}`
      
      });



};


