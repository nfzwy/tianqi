//请求吕梁的天气情况
// var weather;
//  $.ajax({
// 	url: "https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
// 	dataType: "jsonp",
// 	type:"get",
// 	success:function(obj){
// 		weather = obj.data.weather;
//         console.log(weather);
// 	}

// })
 //请求各城市的天气情况
 var city;
 $.ajax({
  url: "https://www.toutiao.com/stream/widget/local_weather/city/",
  dataType: "jsonp",
  type:"get",
  success:function(obj){
    city = obj.data;
    renderCity(city);
    //console.log(city);
  }
})

 function renderCity(city){
    //渲染城市
  for(var m in city){
    //console.log(m);
    var h2 = document.createElement("h2");
    h2.innerHTML=m;
    var hotcity_box=document.querySelector(".hotcity_box");
    hotcity_box.appendChild(h2);

    var hotcity_box1 = document.createElement("div");
    hotcity_box1.className= "hotcity_box1";
    hotcity_box.appendChild(hotcity_box1);
     for(var n in city[m]){
      var li = document.createElement("li");
      li.innerHTML=n;
      hotcity_box1.appendChild(li);
    }  
  }  
 }

 function update(weather){
 	var city_name = document.querySelector(".city");
 	city_name.innerHTML=weather.city_name;

 	var current_temperature = document.querySelector(".temperature");
 	current_temperature.innerHTML = weather.current_temperature+"°";
    
    //今天天气情况
    var dat_high_temperature =document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML =weather.dat_high_temperature;

    var dat_low_temperature =document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML= weather.dat_low_temperature+"°";

    var day_condition=document.querySelector("#day_condition");
    day_condition.innerHTML = weather.day_condition;

    var dat_weather_icon_id = document.querySelector("#dat_weather_icon_id");
    dat_weather_icon_id.style= `background-image:url("img/${weather.dat_weather_icon_id}.png")`;

    //明天天气情况
    var high_temperature = document.querySelector("#high_temperature");
    high_temperature.innerHTML =weather.high_temperature;

    var low_temperature = document.querySelector("#low_temperature");
    low_temperature.innerHTML =weather.low_temperature+"°";
    
    //近期天气
    var str =""
    weather.hourly_forecast.forEach((item,index)=>{
      console.log(item,index);
      str = str +`
        <div class="now">
            <h2 class="now_time">${item.hour}:00</h2>
            <div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
            <h2 class="now_tem">${item.temperature}°</h2>
        </div>
      `
      $(".swap").html(str);
    })
   //  //数组类型的对象
   // for( var i in weather.hourly_forecast){
   // 	//创建now对象
   //    //1、创建div 
   // 	var now = document.createElement("div");
  	//   //2、添加类名
   //  now.className = "now";
   // 	   //3、插入到页面中
   //  var swap = document.querySelector(".swap");
   // 	swap.appendChild(now); 
   
   //  //创建时间元素
   //  var h2 = document.createElement("h2");
   //  h2.className = "now_time";
   //  h2.innerHTML=weather.hourly_forecast[i].hour+":00";
   //  //var now = document.querySelector(".now");
   //  now.appendChild(h2); 
     
   //  var div = document.createElement("div");
   //  div.className = "now_icon";
   //  div.style=`background-image:url("img/${weather.hourly_forecast[i].weather_icon_id}.png")`;
   //  now.appendChild(div);

   //  var h2 = document.createElement("h2");
   //  h2.className = "now_tem";
   //  h2.innerHTML=weather.hourly_forecast[i].temperature+"°";
   //  now.appendChild(h2);  
   //  }
 
//未来七天天气情况
var str1="";
weather.forecast_list.forEach((item,index)=>{
  str1=str1+`
     <div class="con">
          <h2>昨天</h2>
          <div class="con_date">
            <span>${item.date.slice(5, 7)}</span>
            <span>/</span>
            <span>${item.date.slice(8)}</span>
          </div>
          <div class="con_weaH">${item.condition}</div>
          <div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
          <div class="con_high">${item.high_temperature}°</div>
          <div class="con_low">${item.low_temperature}°</div>
          <div class="con_picL style="background-image:url(img/${item.weather_icon_id}.png)""></div>
          <div class="con_weaL">${item.condition}</div>
          <div class="con_wind">${item.wind_direction}</div>
          <div class="con_level">${item.wind_level}级</div>
        </div>
  `
  $(".swap_1").html(str1);
})
// for(var i in weather.forecast_list){
    
//     var con =document.createElement("div");
//     con.className="con";
//     var swap_1 =document.querySelector(".swap_1");
//     swap_1.appendChild(con);

//     // 2018-04-01
//     // var a ="2018-04-01";
//     // var b=a.slice(5,7);
//     // console.log(b);
//     // var c =a.slice(8);
//     // console.log(c);
//     // var d = b+"/"+c;
//     // console.log(d);
//     //时间
//     var con_date = document.createElement("div");
//     con_date.className = "con_date";
//     con.appendChild(con_date);
//     con_date.innerHTML= weather.forecast_list[i].date.slice(5, 7)+"/"+weather.forecast_list[i].date.slice(8);
//     con.appendChild(con_date);
    

//     var con_weaH =document.createElement("div");
//     con_weaH.className ="con_weaH";
//     con_weaH.innerHTML=weather.forecast_list[i].condition;
//     con.appendChild(con_weaH);

//     var con_picH = document.createElement("div");
//     con_picH.className="con_picH";
//     con_picH.style=`background-image:url("img/${weather.forecast_list[i].weather_icon_id}.png")`;
//     con.appendChild(con_picH);

//   var con_high = document.createElement("div");
//   con_high.className="con_high";
//   con_high.innerHTML=weather.forecast_list[i].high_temperature;
//   con.appendChild(con_high);

//   var con_low =document.createElement("div");
//   con_low.className="con_low";
//   con_low.innerHTML=weather.forecast_list[i].low_temperature;
//   con.appendChild(con_low);
  
//   var con_picL= document.createElement("div");
//   con_picL.className = "con_picL";
//   con_picL.style=`background-image:url("img/${weather.forecast_list[i].weather_icon_id}.png")`;
//   con.appendChild(con_picL);
 
//   var con_weaL =document.createElement("div");
//   con_weaL.className="con_weaL";
//   con_weaL.innerHTML=weather.forecast_list[i].condition;
//   con.appendChild(con_weaL);

//   var con_wind =document.createElement("div");
//   con_wind.className="con_wind";
//   con_wind.innerHTML=weather.forecast_list[i].wind_direction;
//   con.appendChild(con_wind);

//   var con_level =document.createElement("div");
//   con_level.className="con_level";
//   con_level.innerHTML=weather.forecast_list[i].wind_level+"级";
//   con.appendChild(con_level);

//   }
  // //渲染城市
  // for(var m in city){
  //   //console.log(m);
  //   var h2 = document.createElement("h2");
  //   h2.innerHTML=m;
  //   var hotcity_box=document.querySelector(".hotcity_box");
  //   hotcity_box.appendChild(h2);

  //   var hotcity_box1 = document.createElement("div");
  //   hotcity_box1.className= "hotcity_box1";
  //   hotcity_box.appendChild(hotcity_box1);
  //    for(var n in city[m]){
  //     var li = document.createElement("li");
  //     li.innerHTML=n;
  //     hotcity_box1.appendChild(li);
  //   }  
  // }  
}

function AJAX(str){
  var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
  $.ajax({
  url:url1,
  dataType: "jsonp",
  type:"get",
  success:function(obj){
    ///获取数据
    var weather = obj.data.weather;
    //渲染数据
    update(weather);
    //让盒子消失
    $(".location").css({"display":"none"});
    $(".hide").addClass('block');
  }
})
}

 //页面加载完成以后执行
 window.onload = function(){
 	//update();

  $(".hotcity_box1 li").on("click",function(){
    var cityh=this.innerHTML;
    AJAX(cityh);
  })
  //点击显示与隐藏城市 
// $(function(){
//    $(".city").click(function(){
//       //$(this).text($(".location").is(":hidden")?);
//     $(".location").slideToggle();
//     })
//   })

 // $(function(){
 //   $(".search_box2").click(function(){
 //      // $(this).text($(".location").is(":hidden")? "收起":"展开");
 //     $(".location").slideUp();
 //   })
 // })

$(".city").on("click",function(){
  $(".location").css({"display":"block"});
})

//输入框获取焦点，按钮内容改变 搜索
$("input").on("focus",function(){
  $(".search_box2").html("搜索");
})

//按钮操作
var button = document.querySelector(".search_box2");
button.onclick=function(){
  //获取search_box2的文本内容
  var text = button.innerText;
  console.log(text);
  if(text=="取消"){
    $(".location").css({"display":"none"});
  }
  else{
    //获取input中内容
    var str1=document.querySelector("input").value;
    //console.log(str1);
    for(var i in city){
      for(var j in city[i]){
        //console.log(j);
        if(str1==j||str1==j+"市"){
          AJAX(str1);
          return;
        }
      }
    }
    alert("笨蛋，中国没有该城市!");
  }
}

}
