/**************** salesImpact ****************/
var topHeadingArray = new Array();
topHeadingArray[0] = "TheSalesProfessional"
topHeadingArray[1] = "SalesProfessionalSkills"
topHeadingArray[2] = "PlanningToWin"
topHeadingArray[3] = "GettingNewClients"
topHeadingArray[4] = "PlanningTheProspectMeeting"
topHeadingArray[5] = "DuringTheProspectMeeting"
topHeadingArray[6] = "EverlastingClients"
topHeadingArray[7] = "TheRoleOfMarketing"
topHeadingArray[8] = "TheRoleOfFinance"

var currentAncherIdSelected = 0;
var course
/**************** top Level heading content***********************/
function initTopHeadingContent(argContentId){
	document.getElementById(topHeadingArray[argContentId]).style.display="block";
}
/**************** Main function which is called on the press of ancher tag ****************/
function showTopHeadingContent(argContentId,argIdPrefix, argCurrentClickId,totalNumOfAnchers){
	for(var i=0;i<topHeadingArray.length;i++){
		//alert(document.getElementById(topHeadingArray[i]).style.display)
		if(document.getElementById(topHeadingArray[i]).style.display=="block"){
			//alert(document.getElementById(topHeadingArray[i]).id)
			document.getElementById(topHeadingArray[i]).style.display="none";
			break;
		}
	}
	initAncherTagForSubNavigation(argIdPrefix, argCurrentClickId, totalNumOfAnchers)
	document.getElementById(argContentId).style.display="block";
	
}
/**************** ancher tags init function *********************/
function initAncherTagForSubNavigation(argIdPrefix, argCurrentClickId, totalNumOfAnchers){
	//alert(document.getElementById(topHeadingArray[i]).style.display)
	/*initSecondLevelHeadingContent('SalesProfessionalSkills',0,'b',4)//**********************************Edit by Dipendra
	initSecondLevelHeadingContent('PlanningToWin',0,'c',4)
	initSecondLevelHeadingContent('GettingNewClients',0,'d',5)
	initSecondLevelHeadingContent('PlanningTheProspectMeeting',0,'e',6)
	initSecondLevelHeadingContent('DuringTheProspectMeeting',0,'f',7)
	initSecondLevelHeadingContent('EverlastingClients',0,'g',2)
	initSecondLevelHeadingContent('TheRoleOfMarketing',0,'h',2)
	initSecondLevelHeadingContent('TheRoleOfFinance',0,'i',3)*///**********************************Edit by Dipendra
	//alert("ok")
	for(var i=0;i<totalNumOfAnchers;i++){
		document.getElementById(argIdPrefix+i).style.color="#608DAC";
		document.getElementById(argIdPrefix+i).style.fontSize="10px";
	}
	//alert(document.getElementById(argIdPrefix+argCurrentClickId).id)
	currentAncherIdSelected = argCurrentClickId;
	document.getElementById(argIdPrefix+argCurrentClickId).style.color="#4E9A14";
	document.getElementById(argIdPrefix+argCurrentClickId).style.fontSize="10px";	
}
function rollOverAncherTagForSubNavigation(argIdPrefix, argCurrentClickId, totalNumOfAnchers){
	if(currentAncherIdSelected!=argCurrentClickId){
	document.getElementById(argIdPrefix+argCurrentClickId).style.color="#4E9A14";
	document.getElementById(argIdPrefix+argCurrentClickId).style.fontSize="10px";
	}
}
function rollOutAncherTagForSubNavigation(argIdPrefix, argCurrentClickId, totalNumOfAnchers){
	if(currentAncherIdSelected!=argCurrentClickId){
		document.getElementById(argIdPrefix+argCurrentClickId).style.color="#608DAC";
		document.getElementById(argIdPrefix+argCurrentClickId).style.fontSize="10px";
	}
}
/**************** second Level heading content ******************/
function initSecondLevelHeadingContent(argLevelIdentifier, argButtonNum, argButtonNamePrefix, totalNumOfBut){
	//alert(argButtonNamePrefix+argButtonNum)
	document.getElementById(argLevelIdentifier+argButtonNum).style.display="block";
	//
	for(var i=0;i<totalNumOfBut;i++){
		document.getElementById(argButtonNamePrefix+i).style.color="#608EAF";
		document.getElementById(argButtonNamePrefix+"_num_"+i).style.color="#B6CDDB";
		document.getElementById(argButtonNamePrefix+i).style.background="#F5FAFD";
		document.getElementById(argButtonNamePrefix+i).style.border="1px solid #B2DDF0";
	}
	
	document.getElementById(argButtonNamePrefix+argButtonNum).style.color="#4E9A14";
	document.getElementById(argButtonNamePrefix+"_num_"+argButtonNum).style.color="#AFD195";
	document.getElementById(argButtonNamePrefix+argButtonNum).style.background="#F3FAF2";
	document.getElementById(argButtonNamePrefix+argButtonNum).style.border="1px solid #C8DCC0";	
}

function rOver(argId){
	document.getElementById(argId).style.cursor="pointer";
}
function rOut(argId){
	document.getElementById(argId).style.cursor="default";
}
function showSecondLevelContent(argLevelIdentifier, argTotalButton,argButtonNum, argButtonNamePrefix){
	for(var i=0;i<argTotalButton;i++){
		//alert(document.getElementById(topHeadingArray[i]).style.display)
		if(document.getElementById(argLevelIdentifier+i).style.display=="block"){
			//alert(document.getElementById(argLevelIdentifier+i).id)
			document.getElementById(argLevelIdentifier+i).style.display="none";
			//
			document.getElementById(argButtonNamePrefix+i).style.color="#608EAF";
			document.getElementById(argButtonNamePrefix+"_num_"+i).style.color="#B6CDDB";
			document.getElementById(argButtonNamePrefix+i).style.background="#F5FAFD";
			document.getElementById(argButtonNamePrefix+i).style.border="1px solid #B2DDF0";
			
			break;
		}
	}		
	//alert(document.getElementById(argLevelIdentifier+argButtonNum).name)
	document.getElementById(argLevelIdentifier+argButtonNum).style.display="block";
	document.getElementById(argButtonNamePrefix+argButtonNum).style.color="#4E9A14";
	document.getElementById(argButtonNamePrefix+"_num_"+argButtonNum).style.color="#AFD195";
	document.getElementById(argButtonNamePrefix+argButtonNum).style.background="#F4F9F3";
	document.getElementById(argButtonNamePrefix+argButtonNum).style.border="1px solid #C8DCC0";
}
function initializeShowSecondLevelContent(){
showSecondLevelContent('SalesProfessionalSkills', 4,0,'b');
showSecondLevelContent('PlanningToWin', 4,0,'c');
showSecondLevelContent('GettingNewClients', 5,0,'d');
showSecondLevelContent('PlanningTheProspectMeeting', 6,0,'e');
showSecondLevelContent('DuringTheProspectMeeting', 7,0,'f');
showSecondLevelContent('EverlastingClients', 2,0,'g');
showSecondLevelContent('TheRoleOfMarketing', 2,0,'h');
showSecondLevelContent('TheRoleOfFinance', 3,0,'i');
}
function launchCourse(argLevel,argLink){
	//alert(argLevel+"_"+argLink)
	course=argLevel+"_"+argLink
	//window.location.href="course.html"
}