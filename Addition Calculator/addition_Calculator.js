const button=document.querySelector('button');
button.addEventListener('click',()=>
{
    // Read the data 
    const first_number=document.getElementById('first');
    const num1=Number(first_number.value);
    const second_number=document.getElementById('second');
    const num2=Number(second_number.value);

    if(isNaN(num1)|| isNaN(num2))
    {
        return ; 
    }
    //Output the result
    const result=document.getElementById('result');
    result.textContent=num1+num2;

})