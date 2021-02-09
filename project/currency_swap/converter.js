array=[];

$(document).ready(function () {
  
  array.push(JSON.parse(localStorage.getItem('Items')));
  localStorage.setItem('Items', JSON.stringify(array));
  
 
  // some variables


   baseCurrency = 'USD';

  baseNumber = 1;

   targetCurrency ='USD';

   targetNumber=1;
   

  var url;

  //currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)

  // get base currency value

  $("#base").change(function () {
    // base currency

    baseCurrency = $(this).children("option:selected").val();

    // call currencyConverter function

    //currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)


  });

  // get base currency number

  $("#baseNumber").change(function(){

    // base number

    baseNumber = $(this).val()

    // call currencyConverter function

    //currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })

  // get target currency value
  $("#target").change(function () {
    // target currency

    targetCurrency = $(this).children("option:selected").val();

    // call currencyConverter function
    
    document.getElementById("convert").onclick = function() {

    array = JSON.parse(localStorage.getItem('Items')) || [];
    console.log(array.length);
    // Push the new data (whether it be an object or anything else) onto the array
    array.push(baseNumber);
    array.push(baseCurrency);
    array.push(targetCurrency);
    // Alert the array value
    //alert(array);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
      
     localStorage.setItem('Items', JSON.stringify(array));
     
      currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)
      

    
    };
  //console.log("KKK");


  });
 

  $("#targetNumber").change(function(){

    // target number

    targetNumber = $(this).val()

  //   call currencyConverter function

    currencyConverter2(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })


  // function to convert BaseCurrency to TargetCurrency


  function currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {
  
      // api url

      url = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+baseCurrency

      // make a get request to api

    

      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {
            
            var result = value * baseNumber


            $("#targetNumber").val(result);

           

          }
   
          console.log(`data.rates.${targetCurrency}`)
      })
  }

  function currencyConverter2(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {
   
    // api url

      url = "https://api.exchangeratesapi.io/latest?symbols="+baseCurrency+"&base="+targetCurrency

      // make a get request to api

      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {

            console.log(value)
            
            var result = value * targetNumber

           $("#baseNumber").val(result)

          }
          console.log(`data.rates.${targetCurrency}`)
       
      })
  } 
});
