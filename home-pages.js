// Page Reload back to home page
function Reload(){
if(window.performance){
  console.info("window performance works");
  if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    console.info("this page is reloaded");
    location.href = "home-page.html";
  }
}
}



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
    document.getElementById(searchitems[i].id).style.display = "block";
    document.getElementById("searchresult").style.display = "block";
    document.getElementById("nosearch").style.display = "none";
    document.getElementById("number").innerHTML = localStorage["searchnumber"]++;
    
    
  }
  else{
    document.getElementById(searchitems[i].id).style.display = "none";
    document.getElementById("number").innerHTML = 0;
    document.getElementById("nosearch").style.display = "block";
  }
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
      document.getElementById("number").innerHTML = localStorage["searchnumber"]++;
      document.getElementById("nosearch").style.display = "none";
    }
    else if(test === 2){
        document.getElementById(searchitems[i].id).style.display = "block";
        document.getElementById("number").innerHTML = localStorage["searchnumber"]++;
        document.getElementById("nosearch").style.display = "none";
    }
    else{
      document.getElementById(searchitems[i].id).style.display = "none";
      document.getElementById("nosearch").style.display = "block";
      document.getElementById("number").innerHTML = 0;
     }
  } 
}
localStorage["searchnumber"] = 1;
}
console.log(Search);
}

// search for all pages
function searchlocal(){
  localStorage["search"] = document.getElementById('search').value;
  location.assign("search.html")
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


//Load city for small device
//abi state
var abi = `<label for="city">City: </label> <select onchange="load(this);" id="aba">
<option value="selected">Select City</option>
<option value="aba" id="Abia">Aba</option>
<option value="abiriba" id="Abia">Abiriba</option>
<option value="amaeke" id="Abia">Amaeke</option>
<option value="arochukwu" id="Abia">Arochukwu</option>
<option value="bende" id="Abia">Bende</option>
<option value="igbere" id="Abia">Igbere</option>
<option value="nbawsi" id="Abia">Nbawsi</option>
<option value="ohafia" id="Abia">Ohafia</option>
<option value="omoba" id="Abia">Omoba</option>
<option value="ikwuano" id="Abia">Ikwuano</option>
<option value="ovim" id="Abia">Ovim</option>
<option value="umuahia" id="Abia">Umuahia</option>
<option value="umudike" id="Abia">Umudike</option>

</select>`;

// Adamawa state
var Adamawa = `<label for="city">City: </label> <select onchange="load(this);" id="adamawa">
<option value="selected">Select City</option>
<option value="ganye" id="Adamawa">Ganye</option>
              <option value="gombi" id="Adamawa">Gombi</option>
              <option value="guyuk" id="Adamawa">Guyuk</option>
              <option value="jimeta" id="Adamawa">Jimeta</option>
              <option value="mayo-belwa" id="Adamawa">Mayo-Belwa</option>
              <option value="michika" id="Adamawa">Michika</option>
              <option value="mubi" id="Adamawa">Mubi</option>
              <option value="numan" id="Adamawa">Numan</option>
              <option value="yola" id="Adamawa">Yola</option>
</select>`;

// Akwa Ibom
var AkwaIbom = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="eket" id="Akwa-ibom">Eket</option>
<option value="etinan" id="Akwa-ibom">Etinan</option>
<option value="ibeno" id="Akwa-ibom">Ibeno</option>
<option value="ibiono-ibom" id="Akwa-ibom">Ibiono-ibom</option>
<option value="ikot-abasi" id="Akwa-ibom">Ikot Abasi</option>
<option value="ikot-ekpene" id="Akwa-ibom">Ikot Ekpene</option>
<option value="itu" id="Akwa-ibom">Itu</option>
<option value="mkpat-enin" id="Akwa-ibom">Mkpat-Enin</option>
<option value="nsitubom" id="Akwa-ibom">Nsitubom</option>
<option value="Oron" id="Akwa-ibom">Oron</option>
<option value="ukanafun" id="Akwa-ibom">Ukanafun</option>
<option value="uyo" id="Akwa-ibom">Uyo</option>
</select>`;

// Anambra
var Anambra =  `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="agulu" id="Anambra">Agulu</option>
<option value="atani" id="Anambra">Atani</option>
<option value="awka" id="Anambra">Awka</option>
<option value="enugu-ukwu" id="Anambra">Enugu-Ukwu</option>
<option value="igbo-ukwu" id="Anambra">Igbo-Ukwu</option>
<option value="ihiala" id="Anambra">Ihiala</option>
<option value="nkpor" id="Anambra">Nkpor</option>
<option value="nnewi" id="Anambra">Nnewi</option>
<option value="onitsha" id="Anambra">Onitsha</option>
<option value="ozubulu" id="Anambra">Ozubulu</option>
<option value="uga" id="Anambra">Uga</option>
<option value="uruobo-okija" id="Anambra">Uruobo-Okija</option>
</selected>`;

// Bauchi
var Bauchi = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="alkaleri" id="Bauchi">Alkaleri</option>
<option value="azare" id="Bauchi">Azare</option>
<option value="bauchi" id="Bauchi">Bauchi</option>
<option value="dass" id="Bauchi">Dass</option>
<option value="jamaare" id="Bauchi">Jamaare</option>
<option value="misau" id="Bauchi">Misau</option>
<option value="ningi" id="Bauchi">Ningi</option>
<option value="tafawa-belawa" id="Bauchi">Tafawa-Belawa</option>
</selected>`;

// Bayelsa
var Bayelsa = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="amasoma" id="Bayelsa">Amasoma</option>
<option value="brass" id="Bayelsa">Brass</option>
<option value="kaiama" id="Bayelsa">Kaiama</option>
<option value="koluama" id="Bayelsa">Koluama</option>
<option value="nembe" id="Bayelsa">Nembe</option>
<option value="ogbia" id="Bayelsa">Ogbia</option>
<option value="oloibiri" id="Bayelsa">Oloibiri</option>
<option value="opokuma" id="Bayelsa">Opokuma</option>
<option value="oporama" id="Bayelsa">Oporama</option>
<option value="sagbama" id="Bayelsa">Sagbama</option>
</select>`;

// Benue
var Benue = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="gboko" id="Benue">Gboko</option>
<option value="katsina-ala" id="Benue">Katsina-ala</option>
<option value="obi" id="Benue">Obi</option>
<option value="otukpa" id="Benue">Otukpa</option>
<option value="otukpo" id="Benue">Otukpo</option>
<option value="ugbokolo" id="Benue">Ugbokolo</option>
<option value="vandeikya" id="Benue">Vandeikya</option>
</select>`;

// Borno
var Borno = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="biu" id="Borno">Borno</option>
<option value="chibok" id="Borno">Chibok</option>
<option value="damboa" id="Borno">Damboa</option>
<option value="konduga" id="Borno">Konduga</option>
</select>`;

// Cross River
var CrossRiver =  `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="akamkpa" id="Cross-river">Akamkpa</option>
<option value="akpabuyo" id="Cross-river">Akpabuyo</option>
<option value="bakassi" id="Cross-river">Bakassi</option>
<option value="biase" id="Cross-river">Biase</option>
<option value="ikom" id="Cross-river">Ikom</option>
<option value="obanliku" id="Cross-river">Obanliku</option>
<option value="obubra" id="Cross-river">Obubra</option>
<option value="obudu" id="Cross-river">Obudu</option>
<option value="odukpani" id="Cross-river">Odukpani</option>
<option value="ogoja" id="Cross-river">Ogoja</option>
<option value="ugep" id="Cross-river">Ugep</option>
<option value="yakurr" id="Cross-river">Yakurr</option>
</select>`;

// Delta
var Delta = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="abraka" id="Delta">Abraka</option>
<option value="agbor" id="Delta">Agbor</option>
<option value="burutu" id="Delta">Burutu</option>
<option value="effurun" id="Delta">Effurun</option>
<option value="koko" id="Delta">Koko</option>
<option value="kwale" id="Delta">Kwale</option>
<option value="oghara" id="Delta">Oghara</option>
<option value="ogwashi-ukwu" id="Delta">Ogwashi Ukwu</option>
<option value="okuokoko" id="Delta">Okuokoko</option>
<option value="oleh" id="Delta">Oleh</option>
<option value="ovwian" id="Delta">Ovwian</option>
<option value="ozoro" id="Delta">Ozoro</option>
<option value="sapele" id="Delta">Sapele</option>
<option value="ughelli" id="Delta">Ughelli</option>
<option value="warri" id="Delta">Warri</option>
</select>`;

// Ebonyi
var Ebonyi = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="afikpo" id="Ebonyi">Afikpo</option>
<option value="amasiri" id="Ebonyi">Amasiri</option>
<option value="edda" id="Ebonyi">Edda</option>
<option value="ikwo" id="Ebonyi">Ikwo</option>
<option value="ishiagu" id="Ebonyi">Ishiagu</option>
<option value="nkalagu" id="Ebonyi">Nkalagu</option>
<option value="okposi" id="Ebonyi">Okposi</option>
<option value="onicha" id="Ebonyi">Onicha</option>
<option value="onueke" id="Ebonyi">Onueke</option>
<option value="unwana" id="Ebonyi">Unwana</option>
</select>`;

// Edo
var Edo = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="abudu" id="Edo">Abudu</option>
<option value="afuse" id="Edo">Afuze</option>
<option value="auchi" id="Edo">Auchi</option>
<option value="benin-city" id="Edo">Benin City</option>
<option value="ekpoma" id="Edo">Ekpoma</option>
<option value="ewu" id="Edo">Ewu</option>
<option value="fugar" id="Edo">Fugar</option>
<option value="ibillo" id="Edo">Ibillo</option>
<option value="igarra" id="Edo">Igarra</option>
<option value="igueben" id="Edo">Igueben</option>
<option value="irrua" id="Edo">Irrua</option>
<option value="okpella" id="Edo">Okpella</option>
<option value="sabongida-ora" id="Edo">Sabongida-Ora</option>
<option value="ubiaja" id="Edo">Ubiaja</option>
<option value="urhonigbe" id="Edo">Urhonigbe</option>
<option value="uromi" id="Edo">Uromi</option>
<option value="uzebba" id="Edo">Uzebba</option>
</select>`

// Ekiti
var Ekiti = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="afao" id="Ekiti">Afao</option>
<option value="aisegba" id="Ekiti">Aisegba</option>
<option value="aramoko-ekiti" id="Ekiti">Aramoko-Ekiti</option>
<option value="ayedun" id="Ekiti">Ayedun</option>
<option value="efon" id="Ekiti">Efon</option>
<option value="emure" id="Ekiti">Emure</option>
<option value="erinmope" id="Ekiti">Erinmope</option>
<option value="ido" id="Ekiti">Ido</option>
<option value="igede" id="Ekiti">Igede</option>
<option value="ijero" id="Ekiti">Ijero</option>
<option value="ikere" id="Ekiti">Ikere</option>
<option value="ikole" id="Ekiti">Ikole</option>
<option value="ilawe" id="Ekiti">Ilawe</option>
<option value="ise" id="Ekiti">Ise</option>
<option value="iye" id="Ekiti">Iye</option>
<option value="iyin" id="Ekiti">Iyin</option>
<option value="ode" id="Ekiti">Ode</option>
<option value="odo-oro" id="Ekiti">Odo-Oro</option>
<option value="ogotun" id="Ekiti">Ogotun</option>
<option value="okemesi" id="Ekiti">Okemesi</option>
<option value="omuo" id="Ekiti">Omuo</option>
<option value="otun" id="Ekiti">Otun</option>
<option value="oye-ekiti" id="Ekiti">Oye-Ekiti</option>
</select>`

// Enugu
var Enugu = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="9th-mile-corner" id="Enugu">9th Mile Corner</option>
<option value="abor" id="Enugu">Abor</option>
<option value="achi" id="Enugu">Achi</option>
<option value="agbogugu" id="Enugu">Agbogugu</option>
<option value="agbudu" id="Enugu">Agbudu</option>
<option value="akegbe-ugwu" id="Enugu">Akegbe-Ugwu</option>
<option value="akpugo" id="Enugu">Akpugo</option>
<option value="akwuke" id="Enugu">Akwuke</option>
<option value="amagunze" id="Enugu">Amagunze</option>
<option value="amechi" id="Enugu">Amechi</option>
<option value="amechi-idodo" id="Enugu">Amechi Idodo</option>
<option value="amodu" id="Enugu">Amodu</option>
<option value="amokwe" id="Enugu">Amokwe</option>
<option value="amoli" id="Enugu">Amoli</option> 
<option value="amuri" id="Enugu">Amuri</option>
<option value="aninri" id="Enugu">Aninri</option>
<option value="awgu" id="Enugu">Awgu</option>
<option value="eha-amufu" id="Enugu">Eha-Amufu</option>
<option value="eke" id="Enugu">Eke</option>
<option value="emene" id="Enugu">Emene</option>
<option value="ezeagu" id="Enugu">Ezeagu</option>
<option value="ihe" id="Enugu">Ihe</option>
<option value="inyi" id="Enugu">Inyi</option>
<option value="isu-awaa" id="Enugu">Isu Awaa</option>
<option value="ituku" id="Enugu">Ituku</option>
<option value="lejja" id="Enugu">Lejja</option>
<option value="mgbowo" id="Enugu">Mgbowo</option>
<option value="mpu" id="Enugu">Mpu</option>
<option value="nara" id="Enugu">Nara</option>
<option value="nenwe" id="Enugu">Nenwe</option>
<option value="ngowo" id="Enugu">Ngowo</option>
<option value="nike" id="Enugu">Nike</option>
<option value="nkanu" id="Enugu">Nkanu</option>
<option value="nkerefi" id="Enugu">Nkerefi</option>
<option value="nsukka" id="Enugu">Nsukka</option>
<option value="obe" id="Enugu">Obe</option>
<option value="oduma" id="Enugu">Oduma</option>
<option value="ogbaku" id="Enugu">Ogbaku</option>
<option value="ogboduaba" id="Enugu">OgboduAba</option>
<option value="oji-river" id="Enugu">Oji River</option>
<option value="okpanku" id="Enugu">Okpanku</option>
<option value="okpatu" id="Enugu">Okpatu</option>
<option value="opi" id="Enugu">Opi</option>
<option value="ozalla" id="Enugu">Ozalla</option>
<option value="udenu" id="Enugu">Udenu</option>
<option value="udi" id="Enugu">Udi</option>
<option value="ugbawka" id="Enugu">Ugbawka</option>
<option value="ugbo" id="Enugu">Ugbo</option>
<option value="ugwuaji" id="Enugu">Ugwuaji</option>
<option value="ugwuoba" id="Enugu">Ugwuoba</option>
<option value="umana" id="Enugu">Umana</option>
<option value="uzouwani" id="Enugu">Uzouwani</option>
</select>`;

// Federal Capital Territory
var FederalCapitalTerritory = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="bamburu" id="Federal-Capital-Territory">Bamburu</option>
<option value="mararaba" id="Federal-Capital-Territory">Mararaba</option>
<option value="gwarinpa" id="Federal-Capital-Territory">Gwarinpa</option>
<option value="gwagwalada" id="Federal-Capital-Territory">Gwagwalada</option>
<option value="maitama" id="Federal-Capital-Territory">Maitama</option>
<option value="garki" id="Federal-Capital-Territory">Garki</option>
<option value="asokoro" id="Federal-Capital-Territory">Asokoro</option>
<option value="karu" id="Federal-Capital-Territory">Karu</option>
<option value="kubwa" id="Federal-Capital-Territory">Kubwa</option>
<option value="kurunduma" id="Federal-Capital-Territory">Kurunduma</option>
<option value="jikwoyi" id="Federal-Capital-Territory">Jikwoyi</option>
<option value="masaka" id="Federal-Capital-Territory">Masaka</option>
<option value="new-nyanya" id="Federal-Capital-Territory">New Nyanya</option>
<option value="karshi" id="Federal-Capital-Territory">Karshi</option>
<option value="yoba" id="Federal-Capital-Territory">Yoba</option>
<option value="zuba" id="Federal-Capital-Territory">Zuba</option>
</select>`;

// Gombe
var Gombe = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="bajoga" id="Gombe">Bajoga</option>
<option value="billiri" id="Gombe">Billiri</option>
<option value="dukku" id="Gombe">Dukku</option>
<option value="kaltungo" id="Gombe">Kaltungo</option>
</select>`;

// Imo
var Imo = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="amaimo" id="Imo">Amaimo</option>
<option value="emekuku" id="Imo">Emekuku</option>
<option value="etiti" id="Imo">Etiti</option>
<option value="ideato" id="Imo">Ideato</option>
<option value="ihiagwa" id="Imo">Ihiagwa</option>
<option value="mgbaise" id="Imo">Mbaise</option>
<option value="mgbidi" id="Imo">Mgbidi</option>
<option value="nkwerre" id="Imo">Nkwerre</option>
<option value="obowu" id="Imo">Obowu</option>
<option value="oguta" id="Imo">Oguta</option>
<option value="okigwe" id="Imo">Okigwe</option>
<option value="orlu" id="Imo">Orlu</option>
<option value="umudim" id="Imo">Umudim</option>
<option value="uzoagba" id="Imo">Uzoagba</option>
</select>`;

// Jigawa
var Jigawa = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="birnin-kudu" id="Jigawa">Birnin Kudu</option>
<option value="gumel" id="Jigawa">Gumel</option>
<option value="hadejia" id="Jigawa">Hadejia</option>
<option value="kazaure" id="Jigawa">Kazaure</option>
<option value="ringim" id="Jigawa">Ringim</option>
</select>`;

// Kaduna
var Kaduna = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="kachia" id="Kaduna">Kachia</option>
<option value="kafanchan" id="Kaduna">Kafanchan</option>
<option value="kagoro" id="Kaduna">Kagoro</option>
<option value="zaria" id="Kaduna">Zaria</option>
<option value="zonkwa" id="Kaduna">Zonkwa</option>
</select>`;

// Kano
var Kano = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="dala" id="Kano">Dala</option>
<option value="dambatta" id="Kano">Dambatta</option>
<option value="garzo" id="Kano">Garzo</option>
<option value="gwale" id="Kano">Gwale</option>
<option value="gwarzo" id="Kano">Gwarzo</option>
<option value="hotoro" id="Kano">Hotoro</option>
<option value="kabuga" id="Kano">Kabuga</option>
<option value="karaye" id="Kano">Karaye</option>
<option value="nassarawa" id="Kano">Nassarawa</option>
</select>`;

// Katsina
var Katsina = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="bakori" id="Katsina">Bakori</option>
<option value="batagarawa" id="Katsina">Batagarawa</option>
<option value="daura" id="Katsina">Daura</option>
<option value="funtua" id="Katsina">Funtua</option>
<option value="jibia" id="Katsina">Jibia</option>
<option value="kankia" id="Katsina">Kankia</option>
<option value="zango" id="Katsina">Zango</option>
</select>`;

// Kebbi
var Kebbi = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="argungu" id="Kebbi">Argungu</option>
<option value="bagudo" id="Kebbi">Bagudo</option>
<option value="jega" id="Kebbi">Jega</option>
<option value="kamba" id="Kebbi">Kamba</option>
<option value="argungu" id="Kebbi">Koko</option>
<option value="yauri" id="Kebbi">Yauri</option>
<option value="Zuru" id="Kebbi">Zuru</option>
</select>`;

// Kogi
var Kogi = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="ankpa" id="Kogi">Ankpa</option>
<option value="anyigba" id="Kogi">Anyigba</option>
<option value="dekina" id="Kogi">Dekina</option>
<option value="egbe" id="Kogi">Egbe</option>
<option value="idah" id="Kogi">Idah</option>
<option value="itakpe" id="Kogi">Itakpe</option>
<option value="kabba" id="Kogi">Kabba</option>
<option value="koton-karfe" id="Kogi">Koton-karfe</option>
<option value="okene" id="Kogi">Okene</option>
</select>`;

// Kwara
var Kwara = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="afon" id="Kwara">Afon</option>
<option value="ajasse-ipo" id="Kwara">Ajasse-Ipo</option>
<option value="Buari" id="Kwara">Buari</option>
<option value="edidi" id="Kwara">Edidi</option>
<option value="erin-ile" id="Kwara">Erin-Ile</option>
<option value="esie" id="Kwara">Esie</option>
<option value="gure" id="Kwara">Gure</option>
<option value="igbaja" id="Kwara">Igbaja</option>
<option value="jebba" id="Kwara">Jebba</option>
<option value="kaiama" id="Kwara">Kaiama</option>
<option value="lafiagi" id="Kwara">Lafiagi</option>
<option value="offa" id="Kwara">Offa</option>
<option value="oke-onigbin" id="Kwara">Oke-Onigbin</option>
<option value="omu-aran" id="Kwara">Omu-Aran</option>
<option value="osi" id="Kwara">Osi</option>
<option value="patigi" id="Kwara">Patigi</option>
<option value="illofa" id="Kwara">Iloffa</option>
<option value="ilorin" id="Kwara">Ilorin</option>
</select>`;

// Lagos
var Lagos = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="badagry" id="Lagos">Badagry</option>
<option value="epe" id="Lagos">Epe</option>
<option value="ikeja" id="Lagos">Ikeja</option>
<option value="ikorodu" id="Lagos">Ikorodu</option>
<option value="lagos" id="Lagos">Lagos</option>
<option value="mushin" id="Lagos">Mushin</option>
<option value="badagry" id="Lagos">Shomolu</option>
</select>`;

// Nasarawa
var Nasarawa = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="akwanga" id="Nasarawa">Akwanga</option>
<option value="doma" id="Nasarawa">Doma</option>
<option value="eggon" id="Nasarawa">Eggon</option>
<option value="karu" id="Nasarawa">Karu</option>
<option value="keffi" id="Nasarawa">Keffi</option>
<option value="nasarawa" id="Nasarawa">Nasarawa</option>
<option value="wamba" id="Nasarawa">Wamba</option>
</select>`;

// Niger
var Niger = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="agiae" id="Niger">Agaie</option>
<option value="baro" id="Niger">Baro</option>
<option value="bida" id="Niger">Bida</option>
<option value="kontangora" id="Niger">Kontangora</option>
<option value="lapai" id="Niger">Lapai</option>
<option value="mokwa" id="Niger">Mokwa</option>
<option value="minna" id="Niger">Minna</option>
<option value="suleja" id="Niger">Suleja</option>
<option value="zungeru" id="Niger">Zungeru</option>
</select>`;

// Ogun
var Ogun = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="agoiwoye" id="Ogun">Ago-Iwoye</option>
<option value="ayetoro" id="Ogun">Ayetoro</option>
<option value="ifo" id="Ogun">Ifo</option>
<option value="sagamu" id="Ogun">Sagamu</option>
<option value="sango-ota" id="Ogun">Sango Ota</option>
<option value="abeokuta" id="Ogun">Abeokuta</option>
<option value="agbara" id="Ogun">Agbara</option>
<option value="ajebo" id="Ogun">Ajebo</option>
<option value="arepo" id="Ogun">Arepo</option>
<option value="ibafo" id="Ogun">Ibafo</option>
<option value="ibese" id="Ogun">Ibese</option>
<option value="iboro" id="Ogun">Iboro</option>
<option value="igbesa" id="Ogun">Igbesa</option>
<option value="igbogila" id="Ogun">Igbogila</option>
<option value="ijebu-ife" id="Ogun">Ijebu Ife</option>
<option value="ijebu-itele" id="Ogun">Ijebu Itele</option>
<option value="ijebu-ode" id="Ogun">Ijebu Ode</option>
<option value="ijebu-igbo" id="Ogun">Ijebu Igbo</option>
<option value="ijoko" id="Ogun">Ijoko</option>
<option value="ikenne-remo" id="Ogun">Ikenne Remo</option>
<option value="ilaro" id="Ogun">Ilaro</option>
<option value="imeko" id="Ogun">Imeko</option>
<option value="iperin" id="Ogun">Iperin</option>
<option value="iperu-remo" id="Ogun">Iperu Remo</option>
<option value="isara-remo" id="Ogun">Isara Remo</option>
<option value="itori" id="Ogun">Itori</option>
<option value="magboro" id="Ogun">Magboro</option>
<option value="mowe" id="Ogun">Mowe</option>
<option value="ode-remo" id="Ogun">Ode-Remo</option>
<option value="ofada" id="Ogun">Ofada</option>
<option value="ogijo" id="Ogun">Ogijo</option>
<option value="owode" id="Ogun">Owode</option>
</select>`;

// Ondo
var Ondo = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="akungba" id="Ondo">Akungba</option>
<option value="akure" id="Ondo">Akure</option>
<option value="arigidi-akoko" id="Ondo">Arigidi-Akoko</option>
<option value="ifon" id="Ondo">Ifon</option>
<option value="ijare" id="Ondo">Ijare</option>
<option value="ikare" id="Ondo">Ikare</option>
<option value="ikare-akoko" id="Ondo">Ikare-Akoko</option>
<option value="ilara-mokin" id="Ondo">Ilara-Mokin</option>
<option value="ile-oluji" id="Ondo">Ile-Oluji</option>
<option value="ifon" id="Ondo">Irele</option>
<option value="oka-akoko" id="Ondo">Oka-Akoko</option>
<option value="okitipupa" id="Ondo">Okitipupa</option>
<option value="ondo-town" id="Ondo">Ondo Town</option>
<option value="ore" id="Ondo">Ore</option>
<option value="owena" id="Ondo">Owena</option>
<option value="owo" id="Ondo">Owo</option>
</select>`;

// Osun
var Osun = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="ede" id="Osun">Ede</option>
<option value="ejigbo" id="Osun">Ejigbo</option>
<option value="esa-oke" id="Osun">Esa-Oke</option>
<option value="ikire" id="Osun">Ikire</option>
<option value="ila-orangun" id="Osun">Ila Orangun</option>
<option value="ile-ife" id="Osun">Ile-Ife</option>
<option value="ilesa" id="Osun">Ilesa</option>
<option value="ilobu" id="Osun">Ilobu</option>
<option value="inisa" id="Osun">Inisa</option>
<option value="iwo" id="Osun">Iwo</option>
<option value="oke-ila-orangun" id="Osun">Oke-Ila Orangun</option>
<option value="oshogbo" id="Osun">Oshogbo</option>
</select>`;

// Oyo
var Oyo = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="ado-awaye" id="Oyo">Ado-Awaye</option>
<option value="ago-amodu" id="Oyo">Ago-Amodu</option>
<option value="akanran" id="Oyo">Akanran</option>
<option value="egbeda" id="Oyo">Egbeda</option>
<option value="eruwa" id="Oyo">Eruwa</option>
<option value="fiditi" id="Oyo">Fiditi</option>
<option value="ibadan" id="Oyo">Ibadan</option>
<option value="idi-ayunre" id="Oyo">Idi Ayunre</option>
<option value="igangan" id="Oyo">Igangan</option>
<option value="igbo-ora" id="Oyo">Igbo-Ora</option>
<option value="igboho" id="Oyo">Igboho</option>
<option value="ilora" id="Oyo">Ilora</option>
<option value="iresa-adu" id="Oyo">Iresa Adu</option>
<option value="iseyin" id="Oyo">Iseyin</option>
<option value="kisi" id="Oyo">Kisi</option>
<option value="lalupon" id="Oyo">Lalupon</option>
<option value="lanlate" id="Oyo">Lanlate</option>
<option value="ogbomosho" id="Oyo">Ogbomosho</option>
<option value="okeho" id="Oyo">Okeho</option>
<option value="oyo" id="Oyo">Oyo</option>
<option value="ado-awaye" id="Oyo">Saki</option>
</select>`;

// Plateau
var Plateau = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="barkin-ladi" id="Plateau">Barkin Ladi</option>
<option value="bukuru" id="Plateau">Bukuru</option>
<option value="jos" id="Plateau">Jos</option>
<option value="langtang" id="Plateau">Langtang</option>
<option value="pankshin" id="Plateau">Pankshin</option>
<option value="shendam" id="Plateau">Shendam</option>
<option value="barkin-ladi" id="Plateau">Vom</option>
<option value="wase" id="Plateau">Wase</option>
</select>`;

// Rivers
var Rivers = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="abonnema" id="Rivers">Abonnema</option>
<option value="abua-odual" id="Rivers">Abua-Odual</option>
<option value="ahoada" id="Rivers">Ahoada</option>
<option value="bane" id="Rivers">Bane</option>
<option value="bonny" id="Rivers">Bonny</option>
<option value="bori" id="Rivers">Bori</option>
<option value="buguma" id="Rivers">Buguma</option>
<option value="degema" id="Rivers">Degema</option>
<option value="elele" id="Rivers">Elele</option>
<option value="elema" id="Rivers">Eleme</option>
<option value="gokana" id="Rivers">Gokana</option>
<option value="igrita" id="Rivers">Igrita</option>
<option value="ikwerre" id="Rivers">Ikwerre</option>
<option value="obio-akpor" id="Rivers">Obio Akpor</option>
<option value="okrika" id="Rivers">Okrika</option>
<option value="omoku" id="Rivers">Omoku</option>
<option value="onne" id="Rivers">Onne</option>
<option value="abonnema" id="Rivers">Opobo</option>
<option value="abonnema" id="Rivers">Oyigbo</option>
<option value="port-harcourt" id="Rivers">Port Harcourt</option>
<option value="rumuokoro" id="Rivers">Rumuokoro</option>
</select>`;

// Sokoto
var Sokoto = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="bodinga" id="Sokoto">Bodinga</option>
<option value="gada" id="Sokoto">Gada</option>
<option value="gwadabawa" id="Sokoto">Gwadabawa</option>
<option value="ilela" id="Sokoto">Ilela</option>
<option value="sokoto" id="Sokoto">Sokoto</option>
<option value="tambulwal" id="Sokoto">Tambulwal</option>
<option value="wamakko" id="Sokoto">Wamakko</option>
<option value="Yabo" id="Sokoto">Wurno</option>
<option value="sokoto" id="Sokoto">Yabo</option>
</select>`;

// Taraba
var Taraba = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="bali" id="Taraba">Bali</option>
<option value="gashaka" id="Taraba">Gashaka</option>
<option value="ibi" id="Taraba">Ibi</option>
<option value="jalingo" id="Taraba">Jalingo</option>
<option value="Kurmi" id="Taraba">Kurmi</option>
<option value="muri" id="Taraba">Muri</option>
<option value="sardauna" id="Taraba">Sardauna</option>
<option value="takun" id="Taraba">Takun</option>
<option value="wukari" id="Taraba">Wukari</option>
<option value="zing" id="Taraba">Zing</option>
<\select>`;

// Yobe
var Yobe = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="damaturu" id="Yobe">Damaturu</option>
<option value="gashua" id="Yobe">Gashua</option>
<option value="giedam" id="Yobe">Giedam</option>
<option value="nguru" id="Yobe">Nguru</option>
<option value="potiskum" id="Yobe">Potiskum</option>
</select>`;

// Zamfara
var Zamfara = `<label for="city">City: </label> <select onchange="load(this);" id="akwa-ibom">
<option value="selected">Select City</option>
<option value="anka" id="Zamfara">Anka</option>
<option value="bakura" id="Zamfara">Bakura</option>
<option value="bungudu" id="Zamfara">Bungudu</option>
<option value="gummi" id="Zamfara">Gummi</option>
<option value="gusau" id="Zamfara">Gusau</option>
<option value="kaura-namoda" id="Zamfara">Kaura Namoda</option>
<option value="maradun" id="Zamfara">Maradun</option>
<option value="maru" id="Zamfara">Maru</option>
<option value="shinkafi" id="Zamfara">Shinkafi</option>
<option value="talata-mafara" id="Zamfara">Talata-Mafara</option>
<option value="tsafe" id="Zamfara">Tsafe</option>
<option value="Zurmi" id="Zamfara">Zurmi</option>
</select>`;

// Default
var Default = `<label for="citys">City</label>
<select id="citys">
<option selected>Select State First</option>
</select>`;


var loadsmallState = false;
var loadbigState = false;

var loadsmallCity = false;
var loadbigCity = false;

// State and City value
var State; var City;

function loadCitysmall(){
  var select = document.getElementById("statesmall");
  var value = select.options[select.selectedIndex].value;
  console.log(value);
  State = value;
  loadsmallState = true;
  if(value === "Abia"){
  document.getElementById("city").innerHTML = abi;
  }
  else if(value === "Adamawa"){
    document.getElementById("city").innerHTML = Adamawa;
    }
    else if(value === "Akwa-ibom"){
      document.getElementById("city").innerHTML = AkwaIbom;
      }
      else if(value === "Anambra"){
        document.getElementById("city").innerHTML = Anambra;
        }
        else if(value === "Bauchi"){
          document.getElementById("city").innerHTML = Bauchi;
          }
          else if(value === "Bayelsa"){
            document.getElementById("city").innerHTML = Bayelsa;
            }
            else if(value === "Benue"){
              document.getElementById("city").innerHTML = Benue;
              }
              else if(value === "Borno"){
                document.getElementById("city").innerHTML = Borno;
                } 
                else if(value === "Cross-river"){
                  document.getElementById("city").innerHTML = CrossRiver;
                  }
                  else if(value === "Delta"){
                    document.getElementById("city").innerHTML = Delta;
                    }
                    else if(value === "Ebonyi"){
                      document.getElementById("city").innerHTML = Ebonyi;
                      }
                      else if(value === "Edo"){
                        document.getElementById("city").innerHTML = Edo;
                        }
                        else if(value === "Ekiti"){
                          document.getElementById("city").innerHTML = Ekiti;
                          }
                          else if(value === "Enugu"){
                            document.getElementById("city").innerHTML = Enugu;
                            }
                            else if(value === "Federal-capital-territory"){
                              document.getElementById("city").innerHTML = FederalCapitalTerritory;
                              }
                              else if(value === "Gombe"){
                                document.getElementById("city").innerHTML = Gombe;
                                }
                                else if(value === "Imo"){
                                  document.getElementById("city").innerHTML = Imo;
                                  }
                                  else if(value === "Jigawa"){
                                    document.getElementById("city").innerHTML = Jigawa;
                                    }
                                    else if(value === "Kaduna"){
                                      document.getElementById("city").innerHTML = Kaduna;
                                      }
                                      else if(value === "Katsina"){
                                        document.getElementById("city").innerHTML = Katsina;
                                        }
                                        else if(value === "Kebbi"){
                                          document.getElementById("city").innerHTML = Kebbi;
                                          }
                                          else if(value === "Kogi"){
                                            document.getElementById("city").innerHTML = Kogi;
                                            }
                                            else if(value === "Kwara"){
                                              document.getElementById("city").innerHTML = Kwara;
                                              }
                                              else if(value === "Lagos"){
                                                document.getElementById("city").innerHTML = Lagos;
                                                }
                                                else if(value === "Nasarawa"){
                                                  document.getElementById("city").innerHTML = Nasarawa;
                                                  }
                                                  else if(value === "Niger"){
                                                    document.getElementById("city").innerHTML = Niger;
                                                    }
                                                    else if(value === "Ogun"){
                                                      document.getElementById("city").innerHTML = Ogun;
                                                      }
                                                      else if(value === "Ondo"){
                                                        document.getElementById("city").innerHTML = Ondo;
                                                        }
                                                        else if(value === "Osun"){
                                                          document.getElementById("city").innerHTML = Osun;
                                                          }
                                                          else if(value === "Oyo"){
                                                            document.getElementById("city").innerHTML = Oyo;
                                                            }
                                                            else if(value === "Plateau"){
                                                              document.getElementById("city").innerHTML = Plateau;
                                                              }
                                                              else if(value === "Rivers"){
                                                                document.getElementById("city").innerHTML = Rivers;
                                                                }
                                                                else if(value === "Sokoto"){
                                                                  document.getElementById("city").innerHTML = Sokoto;
                                                                  }
                                                                  else if(value === "Taraba"){
                                                                    document.getElementById("city").innerHTML = Taraba;
                                                                    }
                                                                    else if(value === "Yobe"){
                                                                      document.getElementById("city").innerHTML = Yobe;
                                                                      }
                                                                      else if(value === "Zamfara"){
                                                                        document.getElementById("city").innerHTML = Zamfara;
                                                                        }
                                                                        else{
                                                                        document.getElementById("city").innerHTML = Default;
                                                                        loadsmallState = false;
                                                                      }
                
              
            
             
           
         
       
     
   
  
  
}


//load small-screen city
function load(p){
  var t = document.getElementById(p.id);
  var city = t.options[t.selectedIndex].text;
  console.log(city);
   loadsmallCity = true;
   City = city;
  if(city == "Select City"){
   loadsmallCity = false;
  }
 
}


//load city for large device
function loadCity(){
  var select = document.getElementById("statesss");
  var value = select.options[select.selectedIndex];
  console.log(value.text);
  loadbigCity = true;
  City = value;
  if(value == "Select City"){
    loadbigCity = false;
   }
  
}

function  loadcityLarge(){
  loadbigState = true;
  var select = document.getElementById("statesss");
  var value = select.options[select.selectedIndex].value;
  State = value;
  console.log(value);
  if(value === "Abia"){
  document.getElementById("cityLarge").innerHTML = abi;
  }
  else if(value === "Adamawa"){
    document.getElementById("cityLarge").innerHTML = Adamawa;
    }
    else if(value === "Akwa-ibom"){
      document.getElementById("cityLarge").innerHTML = AkwaIbom;
      }
      else if(value === "Anambra"){
        document.getElementById("cityLarge").innerHTML = Anambra;
        }
        else if(value === "Bauchi"){
          document.getElementById("cityLarge").innerHTML = Bauchi;
          }
          else if(value === "Bayelsa"){
            document.getElementById("cityLarge").innerHTML = Bayelsa;
            }
            else if(value === "Benue"){
              document.getElementById("cityLarge").innerHTML = Benue;
              }
              else if(value === "Borno"){
                document.getElementById("cityLarge").innerHTML = Borno;
                } 
                else if(value === "Cross-river"){
                  document.getElementById("cityLarge").innerHTML = CrossRiver;
                  }
                  else if(value === "Delta"){
                    document.getElementById("cityLarge").innerHTML = Delta;
                    }
                    else if(value === "Ebonyi"){
                      document.getElementById("cityLarge").innerHTML = Ebonyi;
                      }
                      else if(value === "Edo"){
                        document.getElementById("cityLarge").innerHTML = Edo;
                        }
                        else if(value === "Ekiti"){
                          document.getElementById("cityLarge").innerHTML = Ekiti;
                          }
                          else if(value === "Enugu"){
                            document.getElementById("cityLarge").innerHTML = Enugu;
                            }
                            else if(value === "Federal-capital-territory"){
                              document.getElementById("cityLarge").innerHTML = FederalCapitalTerritory;
                              }
                              else if(value === "Gombe"){
                                document.getElementById("cityLarge").innerHTML = Gombe;
                                }
                                else if(value === "Imo"){
                                  document.getElementById("cityLarge").innerHTML = Imo;
                                  }
                                  else if(value === "Jigawa"){
                                    document.getElementById("cityLarge").innerHTML = Jigawa;
                                    }
                                    else if(value === "Kaduna"){
                                      document.getElementById("cityLarge").innerHTML = Kaduna;
                                      }
                                      else if(value === "Katsina"){
                                        document.getElementById("cityLarge").innerHTML = Katsina;
                                        }
                                        else if(value === "Kebbi"){
                                          document.getElementById("cityLarge").innerHTML = Kebbi;
                                          }
                                          else if(value === "Kogi"){
                                            document.getElementById("cityLarge").innerHTML = Kogi;
                                            }
                                            else if(value === "Kwara"){
                                              document.getElementById("cityLarge").innerHTML = Kwara;
                                              }
                                              else if(value === "Lagos"){
                                                document.getElementById("cityLarge").innerHTML = Lagos;
                                                }
                                                else if(value === "Nasarawa"){
                                                  document.getElementById("cityLarge").innerHTML = Nasarawa;
                                                  }
                                                  else if(value === "Niger"){
                                                    document.getElementById("cityLarge").innerHTML = Niger;
                                                    }
                                                    else if(value === "Ogun"){
                                                      document.getElementById("cityLarge").innerHTML = Ogun;
                                                      }
                                                      else if(value === "Ondo"){
                                                        document.getElementById("cityLarge").innerHTML = Ondo;
                                                        }
                                                        else if(value === "Osun"){
                                                          document.getElementById("cityLarge").innerHTML = Osun;
                                                          }
                                                          else if(value === "Oyo"){
                                                            document.getElementById("cityLarge").innerHTML = Oyo;
                                                            }
                                                            else if(value === "Plateau"){
                                                              document.getElementById("cityLarge").innerHTML = Plateau;
                                                              }
                                                              else if(value === "Rivers"){
                                                                document.getElementById("cityLarge").innerHTML = Rivers;
                                                                }
                                                                else if(value === "Sokoto"){
                                                                  document.getElementById("cityLarge").innerHTML = Sokoto;
                                                                  }
                                                                  else if(value === "Taraba"){
                                                                    document.getElementById("cityLarge").innerHTML = Taraba;
                                                                    }
                                                                    else if(value === "Yobe"){
                                                                      document.getElementById("cityLarge").innerHTML = Yobe;
                                                                      }
                                                                      else if(value === "Zamfara"){
                                                                        document.getElementById("cityLarge").innerHTML = Zamfara;
                                                                        }
                                                                        else{
                                                                        document.getElementById("cityLarge").innerHTML = Default;
                                                                        loadbigState = false;
                                                                      }
                
              
            
             
           
         
       
     
   
  
  
}




//  for order items

function Whatsapp(form){
  var message = ""; var items = "";
// Compare numbers
var proxy = document.getElementById("proxy-phone-number").value
var phone = document.getElementById("phone-number").value;
var additional =   document.getElementById("additional-phone-number").value
var customerPhone = !(phone === proxy && proxy === additional); 


for(let s = 0; s < localStorage["counter"]; s++){
  items += (localStorage[s]);
}  
// items = encodeURIComponent(items);

var city = `City: ${City}`;
var state = `State: ${State}`;
  var Firstname = `First Name: ${document.getElementById("first-name").value}`;
  var Lastname = `Last Name: ${document.getElementById("last-name").value}`;
  var phoneNumber = `Phone Number: 0${document.getElementById("phone-number").value}`;
  var additionalPhoneNumber = `Additional Phone Number: 0${document.getElementById("additional-phone-number").value}`;
  var proxyPhoneNumber = `Proxy Phone Number: 0${document.getElementById("proxy-phone-number").value}`;
  var Address = `Address: ${document.getElementById("Address").value}`;
  var loadState = (loadbigState || loadsmallState);
  var loadcity = (loadsmallCity || loadbigCity);
  if(((form.checkValidity() === true)) && loadState && loadCity && customerPhone){
  console.log(Firstname,Lastname);
  message = `${Firstname}%0A${Lastname}%0A${phoneNumber}%0A${additionalPhoneNumber}%0A${proxyPhoneNumber}%0A${Address}%0A${city}%0A${state}%0A%0A`
  console.log(message); items = message + items;
  window.open(`https://wa.me/${2349067670936}?text= ${items}`, '_blank'); }
  
  else{
    console.log("error"); console.log(items);
    
       
    // window.open(`https://wa.me/${2349067670936}?text= ${items}`, '_blank');

    
  }
}
function Facebook(){
  // for(let i = 0; i < localStorage["counter"]; i++){
  //   console.log(localStorage[i]);
  // }

  var items = "";
  items += `%0A%0AItem Name: ${localStorage["ItemName"]}%0A`;
  items += `Price: ${localStorage["Price"]}%0A`;
  items += `Quantity: ${localStorage["quantity"]}%0A%0A`;
  console.log(items);
}


// for Buy now
function WhatsappBuy(form){
  var message = ""; var items = "";
// Compare numbers
var proxy = document.getElementById("proxy-phone-number").value
var phone = document.getElementById("phone-number").value;
var additional =   document.getElementById("additional-phone-number").value
var customerPhone = !(phone === proxy && proxy === additional); 


  items += `%0A%0AItem Name: ${localStorage["ItemName"]}%0A`;
  items += `Price: ${localStorage["Price"]}%0A`;
  items += `Quantity: ${localStorage["quantity"]}%0A%0A`;
// items = encodeURIComponent(items);

var city = `City: ${City}`;
var state = `State: ${State}`;
  var Firstname = `First Name: ${document.getElementById("first-name").value}`;
  var Lastname = `Last Name: ${document.getElementById("last-name").value}`;
  var phoneNumber = `Phone Number: 0${document.getElementById("phone-number").value}`;
  var additionalPhoneNumber = `Additional Phone Number: 0${document.getElementById("additional-phone-number").value}`;
  var proxyPhoneNumber = `Proxy Phone Number: 0${document.getElementById("proxy-phone-number").value}`;
  var Address = `Address: ${document.getElementById("Address").value}`;
  var loadState = (loadbigState || loadsmallState);
  var loadcity = (loadsmallCity || loadbigCity);
  if(((form.checkValidity() === true)) && loadState && loadCity && customerPhone){
  console.log(Firstname,Lastname);
  message = `${Firstname}%0A${Lastname}%0A${phoneNumber}%0A${additionalPhoneNumber}%0A${proxyPhoneNumber}%0A${Address}%0A${city}%0A${state}%0A%0A`
  console.log(message); items = message + items;
  window.open(`https://wa.me/${2349067670936}?text= ${items}`, '_blank'); }
  
  else{
    console.log("error"); console.log(items);
    
       
    // window.open(`https://wa.me/${2349067670936}?text= ${items}`, '_blank');

    
  }
}