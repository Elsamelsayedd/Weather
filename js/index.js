let homeInput= document.getElementById('homeInput');
let homeData=document.getElementById('homeData');




async function gitCities (url) {
    let response= await fetch(url)
    let finalData=await response.json();
    console.log(finalData);
    displayData(finalData);

    
}


function displayData(list) {
  const currentDay = new Date(list.forecast.forecastday[0].date);
  const day = currentDay.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday "];

  const secDay = new Date(list.forecast.forecastday[1].date);
  const dayTwo = secDay.getDay();

  const thrDay = new Date(list.forecast.forecastday[2].date);
  const dayThree = thrDay.getDay();





  let dateStr = list.forecast.forecastday[0].date;


let date = new Date(dateStr);


let dayone = date.getDate();
let month = date.toLocaleString('en-US', { month: 'short' });


let formattedDate = dayone + month;


    let container=``;
    // for (let i = 0; i < list.length; i++) {
        container=`<div class="col-lg-4 px-0 ">
                <div class="home-category-head ">
                  <div class="home-category-head-text d-flex justify-content-between px-2 align-items-baseline py-1">
                    <p class="m-0">${dayNames[day]}</p>
                    <p class="m-0 ">${formattedDate}</p>
                  </div>
                  
                  <div class="home-category-body px-3">
                    <p>${list.location.name}</p>
                    <h2 class="text-white " id="dayOneTemp">${list.location.lat}<sup>o</sup>C</h2>
                    <div class="home-category-body-img px-4 py-3">
                      <img src="${list.current.condition.icon}" alt="moon">
                    </div>
                    <p class="clear text-primary">${list.current.condition.text}</p>
  
                    <span class="pe-2">
                      <img src="images/icon-umberella.png" alt="umberella">
                      <span>20%</span>
                    </span>
  
                    <span class="pe-2">
                      <img src="images/icon-wind.png" alt="wind">
                      <span>18km/h</span>
                    </span>
  
                    <span class="pe-2">
                      <img src="images/icon-compass.png" alt="compass">
                      <span>East</span>
                    </span>
                  </div>
                </div>

                
              </div>

              


              <div class="col-lg-4 px-0">
                <div class="next-day text-center">
                  <div class="next-day-head  py-1">
                    <p class="m-0">${dayNames[dayTwo]}</p>

                  </div>
                 <div class="next-day-body">
                  <div class="next-day-body-img">
                    <img src="${list.forecast.forecastday[1].day.condition.icon}" alt="">
                  </div>
                  <p class="next-day-body-degree text-white m-0">${list.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                  <p class="m-0">${list.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
                  <div class="next-day-body-info">
                    <p class="text-primary">${list.forecast.forecastday[1].day.condition.text}</p>
                  </div>
                 </div>
                </div>
              </div>




              <div class="col-lg-4 px-0">
                <div class="third-day text-center">
                  <div class="third-day-head  py-1">
                    <p class="m-0">${dayNames[dayThree]}</p>

                  </div>
                 <div class="third-day-body">
                  <div class="third-day-body-img">
                    <img  src="${list.forecast.forecastday[2].day.condition.icon}" alt="">
                  </div>
                  <p class="third-day-body-degree text-white m-0">${list.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                  <p class="m-0">${list.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
                  <div class="third-day-body-info">
                    <p class="text-primary">${list.forecast.forecastday[1].day.condition.text}</p>
                  </div>
                 </div>
                </div>
              </div>`
              homeData.innerHTML=container
  //  }

    

 }

 (function(){

  gitCities (`https://api.weatherapi.com/v1/forecast.json?key=016d429ac0c44bccaf1153017242306&q=cairo&days=3`);

  })()


homeInput.addEventListener('input',function () {
    console.log('heloo');
    gitCities (`https://api.weatherapi.com/v1/forecast.json?key=016d429ac0c44bccaf1153017242306&q=${homeInput.value}&days=3`);
})




