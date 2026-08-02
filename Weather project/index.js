const button=document.getElementById('btn');

button.addEventListener('click',(event)=>
{
    
    const place=document.getElementById('city').value ;

    function updateTemp(data)
    {
        const element=document.getElementById('weatherInfo');
        element.innerHTML=`Today's Temperature is : ${data.current.temp_c}`
    }
    const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=ca2433e0ec6345fbb3f75734260803&q=${place}&aqi=yes`);
    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data));
})