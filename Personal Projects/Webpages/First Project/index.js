var groceries = ['2.5 Cups: Milk', '2 eggs', '100g cheese', '3 breads', '', ''];
var pc = ['Gpu: Rtx 7080', 'Cpu: Ryzen 53-255000x3d', '128tb, DDR7 Ram', '4PB N.V.M.E', 'Cool Pc Case']
var clicked = 0;

function hideShowButton(hide, name)
{
    if(hide == true)
    {   
        document.getElementById(name).hidden = true;
    }
    if(hide == false)
    {
        document.getElementById(name).hidden = false;
    }
}

function listGroceries() 
{
    for(var i=0; i < groceries.length; i++){
        console.log(i + ":" + groceries[i]);
            document.getElementById('box').innerHTML = "Hide";
            document.getElementById('item-' + i).innerHTML = groceries[i];
        
    }
}

function listPc() 
{
    for(var i=0; i < pc.length; i++){
        console.log(i + ":" + groceries[i]);
            document.getElementById('box2').innerHTML = "Hide";
            document.getElementById('item-' + i).innerHTML = pc[i];
        
    }
}


// Box 1
document.getElementById('box').addEventListener('click', function(){
    clicked += 1;
    if(clicked == 1) 
    {
        hideShowButton(true, "box2")
        listGroceries();
    }
    if(clicked == 2) 
    {
        hideShowButton(false, "box2")
        clicked = 0;
        document.getElementById('box').innerHTML = "Ingredients";
        for(var i=0; i < 11; i++) {
            document.getElementById('item-' + i).innerHTML = "";
        }
    }
})

// Box 2
document.getElementById('box2').addEventListener('click', function(){
    clicked += 1;
    if(clicked == 1) 
    {
        hideShowButton(true, "box")
        listPc();
    }
    if(clicked == 2) 
    {
        hideShowButton(false, "box")
        clicked = 0;
        document.getElementById('box2').innerHTML = "Pc Parts";
        for(var i=0; i < 11; i++) {
            document.getElementById('item-' + i).innerHTML = "";
        }
    }
})