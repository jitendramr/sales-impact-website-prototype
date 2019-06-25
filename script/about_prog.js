//
// Author: REDTRAY
// Version 1 [last updated: 13.10.2008]
// This javascript code handles the mouse over/out and layer display on homepage
//

// Home page - about programme navigation

var total_layers=5;
var current_layer="";
var current_layer_id=0;
var current_layer_status;

function img_hover(img){
	eval("document."+img).src="images/home_knowmore_link"+get_current_item_number(img)+"_hover.gif";
}

function img_hout(img){
	//change state of all the images other then the one which is clicked on (means the button current visible layer).
	for(i=1;i<=total_layers;i++){
		if(current_layer_id!=i){
			eval("document.link"+i).src="images/home_knowmore_link"+i+".gif";
		}
	}
}

function img_click(img){
	set_layer_pos();
	//identify which layer to show and which button to highlight/dehighlight
	current_layer_id=get_current_item_number(img);
	current_layer=document.getElementById("layer"+current_layer_id);
	current_layer_status=document.getElementById("layer"+current_layer_id).style.display;

	//hide in case of toggle condition
	if(current_layer_status=="block"){
		eval(current_layer).style.display="none";
		current_layer_id=0;

	//show layers and de-highlight others buttons/last button clicked.
	}else{
		for(i=1;i<=total_layers;i++){
			document.getElementById("layer"+i).style.display="none";
		}
		//if (document.all) eval(current_layer).filters[0].apply();
		eval(current_layer).style.display="block";
		//if (document.all) eval(current_layer).filters[0].play();
		img_hout(img);
	}
}

function set_layer_pos(){
	var pos_offset_top = '171px';
	var pos_offset_left = get_pos_offset("content-top", "left");
	document.getElementById("layer1").style.top = pos_offset_top;
	document.getElementById("layer1").style.left= pos_offset_left;
	document.getElementById("layer2").style.top = pos_offset_top;
	document.getElementById("layer2").style.left= pos_offset_left;
	document.getElementById("layer3").style.top = pos_offset_top;
	document.getElementById("layer3").style.left= pos_offset_left;
	document.getElementById("layer4").style.top = pos_offset_top;
	document.getElementById("layer4").style.left= pos_offset_left;
	document.getElementById("layer5").style.top = pos_offset_top;
	document.getElementById("layer5").style.left= pos_offset_left;
}
//set_layer_pos();

// helper functions

function get_current_item_number(btn){
	return (btn.substring(btn.length-1,btn.length));
}

function get_pos_offset(obj, offsettype){
	var what = document.getElementById(obj);
	var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
	var parentEl=what.offsetParent;
	while (parentEl!=null){
		totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
		parentEl=parentEl.offsetParent;
	}
	return ((totaloffset + 0) + "px");
}

/*
function blendimage(divid, imageid, imagefile, millisec) { 
    var speed = Math.round(millisec / 100); 
    var timer = 0; 
     
    //set the current image as background 
    //document.getElementById(divid).style.backgroundImage = "url(" + document.getElementById(imageid).src + ")"; 
     
    //make image transparent 
    changeOpac(0, imageid); 
     
    //make new image 
    //document.getElementById(imageid).src = imagefile; 

    //fade in image 
    for(i = 0; i <= 100; i++) { 
        setTimeout("changeOpac(" + i + ",'" + imageid + "')",(timer * speed)); 
        timer++; 
    } 
}
*/