//Page Reload back to home page
// if(window.performance){
//   console.info("window performance works");
//   if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
//     console.info("this page is reloaded");
//     location.href = "home-page.html";
 


//Cart Order;
var cartitems = [];
var cartitem = {};
var counter = 0;

// Convert array to string
var showCartItems = function(array){
  var item = ``;
  for(let i = 0; i < array.length; i++){
    item += array[i];
  }
  return item;
  }
  


function showCartBadge(){
    //load cart badge
    document.getElementById('carts').innerHTML =  localStorage["cart"];
    


    //show solar rechargeable led bulb to cart
    if (localStorage["solarLedCount"] == 1){
      cartitems.push(solarbulb);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
    } 


    //show qasa 20w solar panel to cart
    if (localStorage['Qasa20WCounter'] == 1){
      cartitems.push(Qasa20WOrder);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
      }


//show solar rechargeable table fan
      if(localStorage['SolarCartCounter']== 1){cartitems.push(solarRechargeableTableFan);
        document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
       }
       


       //show Qasa PowerKit
       if(localStorage['QasaCounter'] == 1){
        cartitems.push(qasapowerkit);
        document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
         }

         //show full Rechargeable Solar Power Kit
         if(localStorage['fullqasacouter'] == 1){
          cartitems.push(fullqasa);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
         }
      
         //Show Rechargeable Solar Lamp
         if(localStorage["solarLampCount"] == 1){
          cartitems.push(solarlamp);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
          }

}
        
//for search page
function showCartBadges(){
  //load cart badge
  document.getElementById('carts').innerHTML =  localStorage["cart"];
  


  //show solar rechargeable led bulb to cart
  if (localStorage["solarLedCount"] == 1){
    var SolarRechargeableBulb = document.getElementById("Solar-Rechargeable-Bulb");
  SolarRechargeableBulb.style.display = 'block';
  document.getElementById('carts').innerHTML =  localStorage["cart"];
  } 


  //show qasa 20w solar panel to cart
  if (localStorage['Qasa20WCounter'] == 1){
      var Qasa20Wsolarpanel = document.getElementById("Qasa-20W-solar-panel");
       Qasa20Wsolarpanel.style.display = 'block';
       document.getElementById('carts').innerHTML =  localStorage["cart"];
    }


//show solar rechargeable table fan
    if(localStorage['SolarCartCounter']== 1){
      var SolarRechargeableFan = document.getElementById("Solar-Rechargeable-table-fan");
      SolarRechargeableFan.style.display ='block';
      document.getElementById('carts').innerHTML =  localStorage["cart"];
     }
     


     //show Qasa PowerKit
     if(localStorage['QasaCounter'] == 1){
      var QasaSolarRechargeablePowerKit = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit");
QasaSolarRechargeablePowerKit.style.display = 'block';
document.getElementById('carts').innerHTML =  localStorage["cart"];
       }

       //show full Rechargeable Solar Power Kit
       if(localStorage['fullqasacouter'] == 1){
        var QasaSolarRechargeablePowerKit = document.getElementById("Full-Qasa-Solar-Rechargeable-Power-Kit");
        QasaSolarRechargeablePowerKit.style.display ='block';
           document.getElementById('carts').innerHTML =  localStorage["cart"];
       }
    
       //Show Rechargeable Solar Lamp
       if(localStorage["solarLampCount"] == 1){
        var SolarRechargeableLamp = document.getElementById("Solar-Rechargeable-Lamp");
        SolarRechargeableLamp.style.display ='block';
          
         document.getElementById('carts').innerHTML =  localStorage["cart"];
        }

//search code
var search = localStorage["search"];
var Search = search.toLowerCase();
var searchword = Search.split(" ");
var searchwords = searchword.join("");
var searchitems = document.getElementsByTagName("section");
document.getElementById("local-storage").innerHTML = Search;
document.getElementById("locals-storage").innerHTML = Search;


        var array = [];
        if((Search !== '')){
        //search for Full words
        if(searchword.length >= 2){
         for(let i = 0; i < searchitems.length; i++){
          var id = searchitems[i].id.split('-',searchword.length).join("").toLowerCase();
          if(id === searchwords){
            localStorage["searchnumber"]++;
            document.getElementById(searchitems[i].id).style.display = "block";
            document.getElementById("searchresult").style.display = "block"; 
            document.getElementById("number").innerHTML = localStorage["searchnumber"];
            
            
          }
          else{
            document.getElementById(searchitems[i].id).style.display = "none";
            document.getElementById("number").innerHTML = 0;  }
        }
        }
        
        //search for keywords
        if(searchword.length === 1){
          for(let i = 0; i < searchitems.length; i++){
            var id = searchitems[i].id.split('-');
            for(let j = 0; j < (id.length) - 1; j++){
              var test = 0;
           var element = (id[j].toLowerCase());
           //Search for  words
           if(element === Search){  
            test = 1; break;
           }
          //  Search for letters
           else{
             var a = "";
             for(let k = 0; k < Search.length; k++){
             a += element[k];
             }
             if(a === Search){
               test = 2; break;
             }
            
           }
          
            }
            if(test === 1){
              document.getElementById(searchitems[i].id).style.display = "block";
              localStorage["searchnumber"]++;
              document.getElementById("number").innerHTML = localStorage["searchnumber"]; 
            }
            else if(test === 2){
              localStorage["searchnumber"]++;
                document.getElementById(searchitems[i].id).style.display = "block";
                document.getElementById("number").innerHTML = localStorage["searchnumber"]; 
            }
            else{
              document.getElementById(searchitems[i].id).style.display = "none"; 
              // document.getElementById("number").innerHTML = 0;
             }
          } 
        }
        document.getElementById("number").innerHTML = localStorage["searchnumber"];
        if(localStorage["searchnumber"] == 0){
          document.getElementById("nosearch").style.display = "block";
        }
        else if(localStorage["searchnumber"] > 0){
          document.getElementById("nosearch").style.display = "none";
        }
        localStorage["searchnumber"] = 0;
        }
        
        
        console.log(Search);
}
  

  

  

 
//Add 20w Qasa Solar Panel
var Qasa20WOrder = `  <!-- Qasa 20w Solar Panel -->
<div class="container-fluid bg-secondary" id="Qasa-20W-solar-panel">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Qasa 20W solar Panel 1.jpg" alt="Qasa-20W-solar-panel"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Qasa 20W Solar Panel</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number"  class="form-control" min="1" step="1" onchange="Qasa20Wsolarpanelquaantitychange(this);" id="Qasa-20W-solar-panel-quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#10,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#2,000</span> <span id="discount" class="badge text-secondary">-17%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="Qasa20Wsolarpanelquaantitychange(this);"  id="Qasa-20W-solar-panel-quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Qasa-20W-solar-panel-Delete"  onclick="QasaDelete();"  role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;


var Qasa20Wsolarpanelquantity;
var Qasa20WsolarpanelDelete = document.getElementById("Qasa-20W-solar-panel-Delete");
var Qasa20Wsolarpanel = document.getElementById("Qasa-20W-solar-panel");
  //var Qasa20Wsolarpanelquantity = document.getElementById("Qasa-20W-solar-panel-quantity").value;
function Qasa20Wsolarpanelquaantitychange(t){
        Qasa20Wsolarpanelquantity = t.value;
        Qasa20Wsolarpanelquantity = Number(Qasa20Wsolarpanelquantity);
         }

function Qasa20WCart(){
     if(localStorage['Qasa20WCounter'] == 0){
      var Qasa20Wsolarpanel = document.getElementById("Qasa-20W-solar-panel");
      cartitems.push(Qasa20WOrder);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
     localStorage["cart"]++; localStorage['Qasa20WCounter'] = 1;
   }
   document.getElementById('carts').innerHTML =  localStorage["cart"];
    }
    function QasaDelete(){
      var deletecart = cartitems.indexOf(Qasa20WOrder);
      cartitems.splice(deletecart,1);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
      Qasa20Wsolarpanelquantity = 0; 
     localStorage["cart"]--;
     document.getElementById('carts').innerHTML =  localStorage["cart"];
     localStorage['Qasa20WCounter'] = 0;
    };
   



//Solar Rechargeable Table Fan

var solarRechargeableTableFan = ` <!-- Solar Rechargeable Table fan Cart -->
<div class="container-fluid bg-secondary" id="Solar-Rechargeable-table-fan">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Solar table Rechargeale fan 2.jpg" alt="Solar-Rechargeable-table-fan"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Solar Rechargeable Table Fan</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number"  class="form-control" min="1" step="1" onchange="SolarRechargeableTableFanchangevalue(this);" id="Solar-Rechargeable-Table-Fan-Quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#20,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#2,000</span> <span id="discount" class="badge text-secondary">-10%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="SolarRechargeableTableFanchangevalue(this);"  id="Solar-Rechargeable-Table-Fan-Quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Solar-Rechargeable-Table-Fan-Delete"  onclick="SolarRechargeableTableFanDelete();"  role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;
 
 var Quantityvalue;
function SolarRechargeableTableFanchangevalue(t){
        Quantityvalue = t.value;
        Quantityvalue = Number(Quantityvalue);
         }
  function Cart(){
    if(localStorage['SolarCartCounter']== 0){  
 cartitems.push(solarRechargeableTableFan);
 document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
  localStorage["cart"]++; localStorage['SolarCartCounter'] = 1;
    }

 document.getElementById('carts').innerHTML =  localStorage["cart"];
}
function SolarRechargeableTableFanDelete(){
  var SolarRechargeableFan = document.getElementById("Solar-Rechargeable-table-fan");
  var deletecart = cartitems.indexOf(solarRechargeableTableFan);
      cartitems.splice(deletecart,1);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
  Quantityvalue = 0; localStorage['SolarCartCounter'] = 0
 SolarRechargeableFan.style.display ='none';
 localStorage["cart"]--;
 document.getElementById('carts').innerHTML =  localStorage["cart"];
}


//Qasa  Power Kit
var qasapowerkit = `<!--  Qasa Rechargeable Solar Kit Cart -->
<div class="container-fluid bg-secondary" id="Qasa-Solar-Rechargeable-Power-Kit">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Qasa Rechargeable solar Kit 1.jpg" alt="Qasa-Solar-Rechargeable-Power-Kit"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Qasa Solar Rechargeable Power Kit</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number" class="form-control"  min="1" step="1"  onchange="QasaSolarRechargeablePowerKitchangevalue(this);" id="Qasa-Solar-Rechargeable-Power-Kit-Quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#20,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#2,000</span> <span id="discount" class="badge text-secondary">-10%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="QasaSolarRechargeablePowerKitchangevalue(this);"  id="Qasa-Solar-Rechargeable-Power-Kit-Quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Qasa-Solar-Rechargeable-Power-Kit-Quantity-Delete" onclick="QasaSolarRechargeableDelete();"   role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;
 
var QasaSolarRechargeablePowerKitQuantityvalue;
function QasaSolarRechargeablePowerKitchangevalue(t){
  QasaSolarRechargeablePowerKitQuantityvalue = t.value;
  QasaSolarRechargeablePowerKitQuantityvalue = Number(QasaSolarRechargeablePowerKitQuantityvalue);
          }
      
  function QasaSolarRechargeablePowerKitCart(){
    if(localStorage['QasaCounter'] == 0){
      cartitems.push(qasapowerkit);
 document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
var QasaSolarRechargeablePowerKit = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit");
var SolarRechargeableTableFanQuantity = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit-Quantity").value;
QasaSolarRechargeablePowerKit.style.display ='block';
 var QasaSolarRechargeablePowerKitQuantityDelete = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit-Quantity-Delete");
    localStorage["cart"]++; localStorage['QasaCounter'] = 1;
    }
   document.getElementById('carts').innerHTML =  localStorage["cart"];
}
function QasaSolarRechargeableDelete(){
  var deletecart = cartitems.indexOf(solarRechargeableTableFan);
  cartitems.splice(deletecart,1);
  document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
  var QasaSolarRechargeablePowerKit = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit");
  QasaSolarRechargeablePowerKitQuantityvalue = 0;
  localStorage["cart"]--; localStorage['QasaCounter'] = 0;
document.getElementById('carts').innerHTML =  localStorage["cart"];
}


//Full Rechargeable Qasa  Power Kit
var fullqasa = `<!-- Full Qasa Rechargeable Solar Power Kit -->
<div class="container-fluid bg-secondary" id="Full-Qasa-Solar-Rechargeable-Power-Kit">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Full Qasa Solar Rechargeable Power Kit.jpg" alt="Full-Qasa-Solar-Rechargeable-Power-Kit"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Full Qasa Solar Rechargeable Power Kit</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number" class="form-control"  min="1" step="1"  onchange="FullQasaSolarRechargeablePowerKitchangevalue(this);" id="Full-Qasa-Solar-Rechargeable-Power-Kit-Quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#30,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#5,000</span> <span id="discount" class="badge text-secondary">-15%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="FullQasaSolarRechargeablePowerKitchangevalue(this);"  id="Full-Qasa-Solar-Rechargeable-Power-Kit-Quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Qasa-Solar-Rechargeable-Power-Kit-Quantity-Delete" onclick="FullQasaSolarRechargeableDelete();"   role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;
 
var FullQasaSolarRechargeablePowerKitQuantityvalue;
function FullQasaSolarRechargeablePowerKitchangevalue(t){
  FullQasaSolarRechargeablePowerKitQuantityvalue = t.value;
  FullQasaSolarRechargeablePowerKitQuantityvalue = Number(FullQasaSolarRechargeablePowerKitQuantityvalue);
          }
      
  function FullQasaSolarRechargeablePowerKitCart(){
    if(localStorage['fullqasacouter'] == 0){
      cartitems.push(fullqasa);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
var QasaSolarRechargeablePowerKit = document.getElementById("Full-Qasa-Solar-Rechargeable-Power-Kit");
var SolarRechargeableTableFanQuantity = document.getElementById("Full-Qasa-Solar-Rechargeable-Power-Kit-Quantity").value;
QasaSolarRechargeablePowerKit.style.display ='block';
 var QasaSolarRechargeablePowerKitQuantityDelete = document.getElementById("Qasa-Solar-Rechargeable-Power-Kit-Quantity-Delete");
  
    localStorage["cart"]++; localStorage['fullqasacouter'] = 1;
    }
  
   document.getElementById('carts').innerHTML =  localStorage["cart"];
}
function FullQasaSolarRechargeableDelete(){
  
var deletecart = cartitems.indexOf(fullqasa);
cartitems.splice(deletecart,1);
document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
  var QasaSolarRechargeablePowerKit = document.getElementById("Full-Qasa-Solar-Rechargeable-Power-Kit");
  FullQasaSolarRechargeablePowerKitQuantityvalue = 0;
 
  localStorage["cart"]--; localStorage['fullqasacouter'] = 0;
document.getElementById('carts').innerHTML =  localStorage["cart"];
}



var solarlamp = ` <!-- Solar Rechargeable Lamp Cart -->
<div class="container-fluid bg-secondary" id="Solar-Rechargeable-Lamp">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Solar Rechargeable Lamp 1.jpg" alt="Solar Rechargeable Lamp"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Solar Rechargeable Lamp</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number"  class="form-control" min="1" step="1" onchange="SolarRechargeableLampchangevalue(this);" id="Solar-Rechargeable-Lamp-Quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#5,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#1,000</span> <span id="discount" class="badge text-secondary">-20%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="SolarRechargeableLampchangevalue(this);"  id="Solar-Rechargeable-Lamp-Quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Solar-Rechargeable-Lamp-Delete" onclick="SolarLampDelete();"  role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;


// Solar Rechargeable Lamp
var SolarRechargeableLampValue; 
var SolarRechargeableLamp = document.getElementById("Solar-Rechargeable-Lamp");
var SolarRechargeableLampDelete = document.getElementById("Solar-Rechargeable-Lamp-Delete");
//var SolarRechargeableLampQuantity = document.getElementById("Solar-Rechargeable-Lamp-Quantity").value;
function SolarRechargeableLampchangevalue(t){
  SolarRechargeableLampValue = t.value;
  SolarRechargeableLampValue = Number(SolarRechargeableLampValue);
          }
          function SolarRechargeableLampCart(){
            if(localStorage["solarLampCount"] == 0){
              cartitems.push(solarlamp);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
                localStorage["cart"]++; localStorage["solarLampCount"] = 1;
            }
             document.getElementById('carts').innerHTML =  localStorage["cart"];
            }
            function SolarLampDelete(){
var deletecart = cartitems.indexOf(solarlamp);
cartitems.splice(deletecart,1);
document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
              var SolarRechargeableLamp = document.getElementById("Solar-Rechargeable-Lamp");
              SolarRechargeableLampValue = 0;
              localStorage["cart"]--; localStorage["solarLampCount"] = 0;
 document.getElementById('carts').innerHTML =  localStorage["cart"];
            };
     
            
           
  // Solar Rechargeable Led Bulbs

var solarbulb = ` <!-- Solar Rechargeable Lamp bulb -->
<div class="container-fluid bg-secondary" id="Solar-Rechargeable-Bulb">
  <div class="row justify-content-around align-self-center">
    <div class="col-md-3 col-6">
      <img src="Solar Rechargeable Led Bulb.jpeg" alt="Solar-Rechargeable-Bulb"   class="img-fluid">
    </div>
    <div class="col-md-3 col-6 fs-6 text-center align-self-center">
      <h3>Solar Rechargeable Led Bulb</h3>
      <div class="d-md-none d-sm-block">
        <label for="Quantity" class="form-label fw-bold">Quantity</label>
        <input type="number" class="form-control"  min="1" step="1"  onchange="SolarRechargeableBulbchangevalue(this);" id="Solar-Rechargeable-Bulb-Quantity">
      </div>
      <p class="lead d-none d-md-block">WEEVE items in your order will be delivered for free in Ibadan and Ogbomoso to our Store (excluding large items).</p>
    </div>
    <div class="col-md-1 col-6 align-self-center">
      <h6 class="fw-bolder text-center lead">#3,000</h6>
      <h6 class="text-center fw-bolder lead m-auto"> <span class="text-decoration-line-through">#1,000</span> <span id="discount" class="badge text-secondary">-75%</span></h6>
    </div>
    <div class="col-md-2 d-none d-md-block align-self-center col-6">
      <div>
<label for="Quantity" class="form-label fw-bold">Quantity</label>
<input type="number" class="form-control" min="1" step="1" onchange="SolarRechargeableBulbchangevalue(this);"  id="Solar-Rechargeable-Bulb-Quantity">
</div>
  </div>
<div class="col-6 col-md-1 align-self-center text-end  text-md-start">
  <button class="btn btn-outline-danger" id="Solar-Rechargeable-Bulb-Quantity-Delete" onclick="SolarLedBulbDelete();"   role="button" type="button">Delete</button>
</div>
  </div>
</div>
`;

var SolarRechargeableBulbValue; 
var SolarRechargeableBulb = document.getElementById("Solar-Rechargeable-Bulb");
function SolarRechargeableBulbchangevalue(t){
  SolarRechargeableBulbValue = t.value;
  SolarRechargeableBulbValue = Number(SolarRechargeableBulbValue);
          }

  function solarRechargeableBulbCart(){
    if (localStorage["solarLedCount"] == 0){
      cartitems.push(solarbulb);
      document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
    var SolarRechargeableBulb = document.getElementById("Solar-Rechargeable-Bulb");
    SolarRechargeableBulb.style.display = 'block';
    
      localStorage["cart"]++; localStorage["solarLedCount"] = 1;
    document.getElementById('carts').innerHTML =  localStorage["cart"];
    }     
  }
  function SolarLedBulbDelete(){
    var deletecart = cartitems.indexOf(solarbulb);
    cartitems.splice(deletecart,1);
    document.getElementById("OrderContent").innerHTML = showCartItems(cartitems);
    var SolarRechargeableBulb = document.getElementById("Solar-Rechargeable-Bulb");
    SolarRechargeableBulbValue = 0;
    localStorage["cart"]--; localStorage["solarLedCount"] = 0;
 document.getElementById('carts').innerHTML =  localStorage["cart"];
  }




   //Order Now Cart
   function OrderNow(){

    var counter = 0;
    var items = "";
    //Add  solar led Bulb
    if(SolarRechargeableBulbValue > 0){
      localStorage[counter] = "Item-Name: Solar Rechargeable Led Bulb %0A"; counter++; items += "Name is Solar Rechargeable Led Bulb";
        localStorage[counter] = `Price: 3k%0A`; counter++;                   items +=   "Price is 3k";
        localStorage[counter] = `Quantity: ${SolarRechargeableBulbValue}%0A%0A`; counter++; items += `Quantity is ${SolarRechargeableBulbValue}%0A%0A`;
      }
          
    
    
    
    //Add Rechargeable solar table fan
      if(Quantityvalue > 0){
        localStorage[counter] = "Item-Name: Duravolt Solar Rechargeable Table Fan %0A"; counter++; items += "Name is Solar Rechargeable Table Fan";
          localStorage[counter] = "Price: 20k%0A"; counter++;     items += "Price is #20, 000";
          localStorage[counter] = `Quantity: ${Quantityvalue} %0A%0A`; counter++; items += `Quantity is ${Quantityvalue}`;
        }
    
        //Add Qasa Full Solar Rechargeable Kit
    if(QasaSolarRechargeablePowerKitQuantityvalue > 0){
      localStorage[counter] = "Item-Name: Qasa  Rechargeable Solar Kit %0A"; counter++; items += "Name is Qasa  Rechargeable Solar Kit";
      localStorage[counter] = "Price:  20k%0A"; counter++; items += "Price is #20, 000";
      localStorage[counter] = `Quantity: ${QasaSolarRechargeablePowerKitQuantityvalue}%0A%0A`; counter++; items += `Quantity is ${QasaSolarRechargeablePowerKitQuantityvalue}`;
    } 
    
    //Add Solar Rechargeable Lamp
    if(SolarRechargeableLampValue > 0){
      localStorage[counter] = "Item-Name: Solar Rechargeable Lamp%0A"; counter++; items += "Name is Solar Rechargeable Lamp";
        localStorage[counter] = "Price: 5k%0A"; counter++;              items += "Price is #5, 000";
        localStorage[counter] = `Quantity: ${SolarRechargeableLampValue}%0A%0A`; counter++; items += `Quantity is ${SolarRechargeableLampValue}`;
      }
    
    
      //Add 20w Qasa Solar Panel
      if(Qasa20Wsolarpanelquantity > 0){
        localStorage[counter] = "Item-Name: Qasa 20W Solar Panel%0A"; counter++; items += "Name is Qasa 20W Solar Panel";
          localStorage[counter] = "Price: 10k%0A"; counter++;            items += "Price is #10,000";
          localStorage[counter] = `Quantity: ${Qasa20Wsolarpanelquantity}%0A%0A`; counter++; items += `Quantity is ${Qasa20Wsolarpanelquantity}`
        }
    
        // Add Full Qasa Solar Rechargeable 
    if(FullQasaSolarRechargeablePowerKitQuantityvalue > 0){
      localStorage[counter] = "Item-Name: Full Qasa  Rechargeable Solar Kit%0A"; counter++; items +=   "Name is Qasa  Rechargeable Solar Kit";
      localStorage[counter] = "Price: 30k%0A"; counter++;                     items += "Price is #20, 000";
      localStorage[counter] = `Quantity: ${FullQasaSolarRechargeablePowerKitQuantityvalue} %0A%0A`; counter++;     items+= `Quantity is ${FullQasaSolarRechargeablePowerKitQuantityvalue}`;
    } 
    
    localStorage["counter"] = counter;
     
    localStorage["items"] = items;
    if(counter > 0){
    window.open("order.html")
    }
  else{
    alert("Add an item to cart");
  }
    
    }  
function run(){
 for(let s = 0; s < localStorage["counter"]; s++){
   console.log(localStorage[s]);
 }  
  
}

//show badges cart
function showBagdeCart(){
    document.getElementById('carts').innerHTML =  localStorage["cart"];   
}


// search for search page alone
function search(){
  var search = document.getElementById("search").value;
  var Search = search.toLowerCase();
  var searchword = Search.split(" ");
  var searchwords = searchword.join("");
var searchitems = document.getElementsByTagName("section");
document.getElementById("local-storage").innerHTML = Search;
document.getElementById("locals-storage").innerHTML = Search;

var array = [];
if((Search !== '')){
//search for Full words
if(searchword.length >= 2){
 for(let i = 0; i < searchitems.length; i++){
  var id = searchitems[i].id.split('-',searchword.length).join("").toLowerCase();
  if(id === searchwords){
    localStorage["searchnumber"]++;
    document.getElementById(searchitems[i].id).style.display = "block";
    document.getElementById("searchresult").style.display = "block"; 
    document.getElementById("number").innerHTML = localStorage["searchnumber"];
    
    
  }
  else{
    document.getElementById(searchitems[i].id).style.display = "none";
    document.getElementById("number").innerHTML = 0;  }
}
}

//search for keywords
if(searchword.length === 1){
  for(let i = 0; i < searchitems.length; i++){
    var id = searchitems[i].id.split('-');
    for(let j = 0; j < (id.length) - 1; j++){
      var test = 0;
   var element = (id[j].toLowerCase());
   //Search for  words
   if(element === Search){  
    test = 1; break;
   }
  //  Search for letters
   else{
     var a = "";
     for(let k = 0; k < Search.length; k++){
     a += element[k];
     }
     if(a === Search){
       test = 2; break;
     }
    
   }
  
    }
    if(test === 1){
      document.getElementById(searchitems[i].id).style.display = "block";
      localStorage["searchnumber"]++;
      document.getElementById("number").innerHTML = localStorage["searchnumber"]; 
    }
    else if(test === 2){
      localStorage["searchnumber"]++;
        document.getElementById(searchitems[i].id).style.display = "block";
        document.getElementById("number").innerHTML = localStorage["searchnumber"]; 
    }
    else{
      document.getElementById(searchitems[i].id).style.display = "none"; 
      // document.getElementById("number").innerHTML = 0;
     }
  } 
}
document.getElementById("number").innerHTML = localStorage["searchnumber"];
if(localStorage["searchnumber"] == 0){
  document.getElementById("nosearch").style.display = "block";
}
else if(localStorage["searchnumber"] > 0){
  document.getElementById("nosearch").style.display = "none";
}
localStorage["searchnumber"] = 0;
}
console.log(Search);
}

// search for all pages
function searchlocal(){
  localStorage["search"] = document.getElementById('search').value;
  location.assign("search.html")
}


// Buy now for Duravolt Solar Table Fan
// Buy now small screen
// function BuyNowSmall(){
//   var small = document.getElementById("Duravolt-Rechargeable-Solar-Table-Fan-small").value;
//    if(small > 0){
//     localStorage["quantity"] = small;
//   }
//   console.log(localStorage["quantity"]);
// }

// // Buy now large screen
// function BuyNowLarge(){
//   var large = document.getElementById("Duravolt-Rechargeable-Solar-Table-Fan-large").value;  
//      if(large > 0){
//     localStorage["quantity"] = large;
//   }
//   console.log(localStorage["quantity"]);
// }

// // Buy now medium screen
// function BuyNowMedium(){
// var medium = document.getElementById("Duravolt-Rechargeable-Solar-Table-Fan-medium").value;
// if(medium > 0){
//   localStorage["quantity"] = medium;
// }
// console.log(localStorage["quantity"]);
// }

// Buy now
function Buy(form){
  if(form.checkValidity() === true){
localStorage["quantity"] = form.elements["quantity"].value;
var s = form.id.split('-');
var ItemName = "";
for(let i = 0; i < (s.length - 1); i++){
  ItemName += s[i] + " ";
}
localStorage["ItemName"] = ItemName;
localStorage["Price"] =  form.elements["price"].value;
window.open("buy.html");
  }
  else{
    alert("Enter Quantity");
    
  }
  

}

// Send email message
function EmailSend(form){
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var query = form.elements["query"].value;
  if(form.checkValidity() === true){
    window.open(`mailto:olasunkanmiusman1111@gmail.com?subject=Query Message From WEEVE&body=${query}%0a%0a%0a${name}%0a${email}`);
  }
}