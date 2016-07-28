
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////		게임창 관련 함수			/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////										/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//	시작 시 뜰 화면을 표시
////////////////////////////////////////////////////////////////////////
var winStart = function ( mask, gameWin, stageW, stageH ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	this.audioSrc="../music/start.mp3";
	this.audio = new audioCtrl(this.audioSrc);
	this.banner;
	this.blink=true;
	this.stageDis="block";
	var me = this; 

	this.init = function(){

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/winStart.png')";							//	배경이미지 소스
		this.stage.style.textAlign="center";
		this.stage.style.display="block";
		

		this.banner = document.createElement("img");
		
		this.banner.style.width=this.width/3+"px";
		this.banner.style.height=100+"px";
		this.banner.style.position="absolute";
		this.banner.style.margin="auto";
		this.banner.style.top=this.height+"px";
		this.banner.src="../images/bg/banner.png";
		this.banner.style.display="none";

		this.stage.appendChild(this.banner);

		this.gameWin.appendChild(this.stage);

		this.mask.appendChild(this.gameWin);

	}

	this.move = function(){

		if( this.blink=!this.blink ){

			this.banner.style.display="none";

			this.blink=!this.blink 

		}else{

			this.banner.style.display="block";

			this.blink=!this.blink 

		}
			
		setTimeout("move()", 200);

	}

}


////////////////////////////////////////////////////////////////////////
//	회원가입, 로그인 화면
////////////////////////////////////////////////////////////////////////

var winLogIn = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.logInForm;
	this.idBox;
	this.pwBox;
	this.btLogIn;
	this.btSignIn;
	this.btSubmit;
	this.btExit;
	this.btBack;
	this.width=stageW;
	this.height=stageH;
	this.audioSrc="../music/logIn.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.isFine=false;

	var me = this;
	

	this.init = function(){

		this.stage = document.createElement("div");
		this.logInForm = document.createElement("div");
		this.signInForm = document.createElement("div");
		this.idBox = document.createElement("input");
		this.pwBox = document.createElement("input");
		this.btLogIn = document.createElement("input");
		this.btSignIn = document.createElement("input");
		this.btSubmit = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");
		

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/logIn.png')";	
		this.stage.style.display="none";

		this.logInForm.style.width=this.width/2+"px";
		this.logInForm.style.height=this.height/2+"px";
		this.logInForm.style.margin="auto";
		this.logInForm.style.position="absolute";
		this.logInForm.style.left=this.width/4+"px";
		this.logInForm.style.top=this.height/4+"px";
		this.logInForm.style.backgroundImage="url('../images/bg/metal1.png')";
		this.logInForm.style.textAlign="center";

		this.signInForm.style.width=this.width/2+"px";
		this.signInForm.style.height=this.height/2+"px";
		this.signInForm.style.margin="auto";
		this.signInForm.style.position="absolute";
		this.signInForm.style.left=this.width/4+"px";
		this.signInForm.style.top=this.height/4+"px";
		this.signInForm.style.backgroundImage="url('../images/bg/metal2.png')";
		this.signInForm.style.textAlign="center";

		this.idBox.type="text";
		this.idBox.style.width=400+"px";
		this.idBox.style.height=70+"px";
		this.idBox.style.position="absolute";
		this.idBox.style.margin="auto";
		this.idBox.style.left=this.width/6+"px";
		this.idBox.style.top=this.height/7+"px";
		this.idBox.style.fontSize="36pt";

		this.pwBox.type="password";
		this.pwBox.style.width=400+"px";
		this.pwBox.style.height=70+"px";
		this.pwBox.style.position="absolute";
		this.pwBox.style.margin="auto";
		this.pwBox.style.left=this.width/6+"px";
		this.pwBox.style.top=this.height/7+80+"px";
		this.pwBox.style.fontSize="36pt";

		this.btLogIn.type="button";
		this.btLogIn.style.width=150+"px";
		this.btLogIn.style.height=70+"px";
		this.btLogIn.style.position="absolute";
		this.btLogIn.style.margin="auto";
		this.btLogIn.style.left=40+"px";
		this.btLogIn.style.top=this.height/7+200+"px";
		this.btLogIn.style.backgroundImage="url('../images/button/login.png')";

		this.btSignIn.type="button";
		this.btSignIn.style.width=150+"px";
		this.btSignIn.style.height=70+"px";
		this.btSignIn.style.position="absolute";
		this.btSignIn.style.margin="auto";
		this.btSignIn.style.left=400+"px";
		this.btSignIn.style.top=this.height/7+200+"px";
		this.btSignIn.style.backgroundImage="url('../images/button/signin.png')";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=40+"px";
		this.btBack.style.top=this.height/7+200+"px";
		this.btBack.style.backgroundImage="url('../images/button/back.png')";

		this.btSubmit.type="button";
		this.btSubmit.style.width=150+"px";
		this.btSubmit.style.height=70+"px";
		this.btSubmit.style.position="absolute";
		this.btSubmit.style.margin="auto";
		this.btSubmit.style.left=400+"px";
		this.btSubmit.style.top=this.height/7+200+"px";
		this.btSubmit.style.backgroundImage="url('../images/button/submit.png')";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.style.backgroundImage="url('../images/button/exit.png')";

		this.logInForm.appendChild(this.idBox);
		this.logInForm.appendChild(this.pwBox);
		this.logInForm.appendChild(this.btLogIn);
		this.logInForm.appendChild(this.btSignIn);

		this.stage.appendChild(this.logInForm);
		this.stage.appendChild(this.btExit);
		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);

	
	}

}


////////////////////////////////////////////////////////////////////////
//	공지사항 띄우는 화면
////////////////////////////////////////////////////////////////////////


var winNotice = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;

	this.noticeStage;
	this.btStart;
	this.btBack;
	this.btExit;

	this.audioSrc="../music/notice.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.init = function(){

		this.stage = document.createElement("div");
		this.noticeStage = document.createElement("textarea");
		this.btStart = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/notice.png')";
		this.stage.style.textAlign="center";
		this.stage.style.display="none";

		this.noticeStage.style.width=this.width*4/5+"px";
		this.noticeStage.style.height=this.height*2/3+"px";
		this.noticeStage.style.margin="auto";
		this.noticeStage.style.position="absolute";
		this.noticeStage.style.left=this.width/10+"px";
		this.noticeStage.style.top=this.height/10+"px";
		this.noticeStage.style.backgroundImage="url('../images/bg/metal2.png')";
		this.noticeStage.style.fontSize="30pt";
		this.noticeStage.style.fontWeight="bold";
		this.noticeStage.style.color="silver";
		this.noticeStage.disabled=true;
		this.noticeStage.value="조작법";


		//this.noticeStage.style.textAlign="center";

		this.btStart.type="button";
		this.btStart.style.width=150+"px";
		this.btStart.style.height=70+"px";
		this.btStart.style.position="absolute";
		this.btStart.style.margin="auto";
		this.btStart.style.left=50+"px";
		this.btStart.style.top=this.height-120+"px";
		this.btStart.value="Start";
		this.btStart.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-370+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.stage.appendChild(this.noticeStage);
		this.stage.appendChild(this.btStart);
		this.stage.appendChild(this.btBack);
		this.stage.appendChild(this.btExit);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}




////////////////////////////////////////////////////////////////////////
//	플레이어 선택 화면
////////////////////////////////////////////////////////////////////////
var winSelectMode = function( mask, gameWin, stageW, stageH ){			// stage로부터 stage와 stage의 높이 stage의 넓이를 받는다

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.div_up;
	this.div_mul;
	this.div_sing;
	this.div_down;
	this.img_mul;									//	멀티플레이 버튼에 들어갈 이미지
	this.img_sing;									//	싱글플레이 버튼에 들어갈 이미지
	this.img_bg;										//	배경에 넣을 이미지
	this.width=stageW;
	this.height=stageH;
	this.btMul;										//	멀티플레이 선택 버튼
	this.btSing;										//	싱글플레이 선택 버튼

	this.audioSrc="../music/selectMode.mp3";
	this.audio = new audioCtrl(this.audioSrc);
	

	this.init = function(){

		this.stage = document.createElement("div");				//	버튼들을 넣을 div
		this.div_down = document.createElement("div");
		this.div_mul = document.createElement("div");
		this.div_sing = document.createElement("div");

		this.img_mul = document.createElement("img");			
		this.img_sing = document.createElement("img");		
		this.img_bg = document.createElement("img");			

		this.btMul = document.createElement("input");		
		this.btSing = document.createElement("input");	

		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");
	
	

		this.stage.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.stage.style.height=this.height+"px";
		this.stage.style.margin="0px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";

		this.div_mul.style.width=this.width/2+"px";									//	div_mul의 style 정의
		this.div_mul.style.height=this.height*2/3+"px";
		this.div_mul.style.textAlign="center";
		this.div_mul.style.float="left";

		this.div_sing.style.width=this.width/2+"px";									//	div_sing의 style 정의
		this.div_sing.style.height=this.height*2/3+"px";
		this.div_sing.style.textAlign="center";
		this.div_sing.style.float="left";

		this.btMul.type="button";
		this.btMul.style.width=450+"px";									//	멀티플레이 버튼 style 정의
		this.btMul.style.height=450+"px";
		this.btMul.value="P1 vs P2";
		this.btMul.style.top=20+"px";
		this.btMul.style.fontSize="80pt";
		this.btMul.style.marginTop=30+"px";

		this.btSing.type="button";
		this.btSing.style.width=450+"px";									//	싱글플레이 버튼 style 정의
		this.btSing.style.height=450+"px";
		this.btSing.value="vs COM";
		this.btSing.style.fontSize="80pt";
		this.btSing.style.marginTop=30+"px";

		this.div_down.style.width=this.width+"px";									//	div_down의 style 정의
		this.div_down.style.height=this.height/4+"px";
		this.div_down.style.margin="auto";
		this.div_down.innerText="모드를 선택해 주세요";
		this.div_down.style.textAlign="center";
		this.div_down.style.fontSize="50pt";
		this.div_down.style.float="left";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-370+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.div_mul.appendChild(this.btMul);									//	버튼들을 div에 갖다 붙임
		this.div_sing.appendChild(this.btSing);

		this.stage.appendChild(this.div_mul);
		this.stage.appendChild(this.div_sing);
		this.stage.appendChild(this.div_down);
		this.stage.appendChild(this.btBack);
		this.stage.appendChild(this.btExit);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);


	}

}



var winSelectContentsMul = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;

	this.audioSrc="../music/selectContents.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.div_showP1;
	this.div_showP2;
	this.div_showVs;
	this.div_selTank;											//	탱크들을 선택하는 곳이 담긴 div
	this.div_down;
	this.div_selMap;											//	맵을 고르는 창을 담을 div
	this.audio;

	this.btStart;
	this.btShop;
	this.btBack;
	this.btExit;

	this.div_showMargin=80;
	this.btSize=100;
	this.imgSize=100;
	
	this.bt_tankArr = new Array(6);												//	탱크 선택 버튼

	this.img_itemP1Arr = new Array(4);
	this.img_itemP2Arr = new Array(4);

	this.selMapArr = new Array(6);


	this.init = function(){

		this.stage = document.createElement("div");

		this.div_showP1 = document.createElement("div");
		this.div_showP2 = document.createElement("div");
		this.div_showVs = document.createElement("div");

		this.div_tankP1 = document.createElement("div");
		this.div_itemP1 = document.createElement("div");
		this.div_tankSkillP1 = document.createElement("div");
		this.img_tankP1 = document.createElement("img");

		this.div_tankP2 = document.createElement("div");
		this.div_itemP2 = document.createElement("div");
		this.div_tankSkillP2 = document.createElement("div");
		this.img_tankP2 = document.createElement("img");

		this.div_selTank = document.createElement("div");
		this.div_down = document.createElement("div");
		this.div_selMap = document.createElement("div");

		this.btRight = document.createElement("input");
		this.btLeft = document.createElement("input");

		this.btStart = document.createElement("input");
		this.btShop = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");

		//this.div_showP1.style.border="1px solid red";

		this.stage.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.stage.style.height=this.height+"px";
		this.stage.style.margin="0px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";


		this.div_showP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP1.style.height=this.height/2+"px";
		this.div_showP1.style.textAlign="right";
		this.div_showP1.style.float="left";
		this.div_showP1.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankP1.style.height=this.height/4+"px";
		this.div_tankP1.style.textAlign="right";
		this.div_tankP1.style.float="left";

		this.div_itemP1.style.width=this.imgSize*2+"px";									//	div_mul의 style 정의
		this.div_itemP1.style.height=this.imgSize*2+"px";
		this.div_itemP1.style.textAlign="right";
		this.div_itemP1.style.float="left";

		this.div_tankSkillP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillP1.style.height=this.height/4+"px";
		this.div_tankSkillP1.style.textAlign="right";
		this.div_tankSkillP1.style.float="left";

		this.img_tankP1.style.width=200+"px";
		this.img_tankP1.style.height=200+"px";
		this.img_tankP1.src="../images/effect/box.png";
		this.img_tankP1.style.border="1px solid red";

		for( var a=0 ; a<this.img_itemP1Arr.length ; a++ ){

			this.img_itemP1Arr[a] = document.createElement("img");

			this.img_itemP1Arr[a].style.width=this.imgSize+"px";
			this.img_itemP1Arr[a].style.height=this.imgSize+"px";
			this.img_itemP1Arr[a].style.float="left";
			this.img_itemP1Arr[a].src="../images/effect/box.png";

			this.div_itemP1.appendChild(this.img_itemP1Arr[a]);

		}


		this.div_showP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP2.style.height=this.height/2+"px";
		this.div_showP2.style.textAlign="left";
		this.div_showP2.style.float="right";
		this.div_showP2.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankP2.style.height=this.height/4+"px";
		this.div_tankP2.style.textAlign="left";
		this.div_tankP2.style.float="right";

		this.div_itemP2.style.width=this.imgSize*2+"px";									//	div_mul의 style 정의
		this.div_itemP2.style.height=this.imgSize*2+"px";
		this.div_itemP2.style.textAlign="left";
		this.div_itemP2.style.float="right";

		this.div_tankSkillP2.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillP2.style.height=this.height/4+"px";
		this.div_tankSkillP2.style.textAlign="left";
		this.div_tankSkillP2.style.float="right";

		this.img_tankP2.style.width=200+"px";
		this.img_tankP2.style.height=200+"px";
		this.img_tankP2.src="../images/effect/box.png";
		this.img_tankP2.style.border="1px solid red";

		for( var a=0 ; a<this.img_itemP2Arr.length ; a++ ){

			this.img_itemP2Arr[a] = document.createElement("img");

			this.img_itemP2Arr[a].style.width=this.imgSize+"px";
			this.img_itemP2Arr[a].style.height=this.imgSize+"px";
			this.img_itemP2Arr[a].style.float="left";
			this.img_itemP2Arr[a].src="../images/effect/box.png";

			this.div_itemP2.appendChild(this.img_itemP2Arr[a]);

		}


		this.div_showVs.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showVs.style.height=this.height/4+"px";
		this.div_showVs.style.textAlign="center";
		this.div_showVs.innerText="VS"
		this.div_showVs.style.fontSize="100pt";
		this.div_showVs.style.float="left";
		//this.div_showVs.style.margin="auto";
		this.div_showVs.style.marginTop=this.div_showMargin+"px";
		//this.div_showVs.style.border="1px solid red";

		this.div_down.style.width=this.width+"px";
		this.div_down.style.height=this.height/3+"px";
		this.div_down.style.float="left";
		this.div_down.style.textAlign="center";

		this.div_selMap.style.width=this.width/3+"px";
		this.div_selMap.style.height=this.height/3+"px";
		this.div_selMap.style.border="30px solid red";
		//this.div_selMap.style.display="inline-block";
		this.div_selMap.style.float="left";

		for( var a=0 ; a<this.selMapArr.length ; a++ ){

			this.selMapArr[a] = document.createElement("img");

			this.selMapArr[a].style.width=this.width/3+"px";
			this.selMapArr[a].style.height=this.height/3+"px";
			this.selMapArr[a].src=mapArr[a].bgSrc;
			this.selMapArr[a].style.display="none";
			this.div_selMap.appendChild(this.selMapArr[a]);

		}

		this.btRight.type="button";
		this.btRight.style.width=30+"px";
		this.btRight.style.height=50+"px";
		this.btRight.style.position="absolute";
		this.btRight.style.margin="auto";
		this.btRight.style.left=this.width/3+30+"px";
		this.btRight.style.top=this.height-250+"px";
		this.btRight.value="Ready";
		this.btRight.style.fontSize="36pt";

		this.btLeft.type="button";
		this.btLeft.style.width=30+"px";
		this.btLeft.style.height=50+"px";
		this.btLeft.style.position="absolute";
		this.btLeft.style.margin="auto";
		this.btLeft.style.left=0+"px";
		this.btLeft.style.top=this.height-250+"px";
		this.btLeft.value="Ready";
		this.btLeft.style.fontSize="36pt";

		this.div_selMap.appendChild(this.btRight);
		this.div_selMap.appendChild(this.btLeft);

		this.div_selTank.style.width=(this.btSize*this.bt_tankArr.length)+"px";
		this.div_selTank.style.height=this.btSize+"px";
		this.div_selTank.style.border="30px solid red";
		this.div_selTank.style.display="inline-block";

		for( var a=0 ; a<this.bt_tankArr.length ; a++ ){

			this.bt_tankArr[a] = document.createElement("input");

			this.bt_tankArr[a].type="button";
			this.bt_tankArr[a].style.width=this.btSize+"px";
			this.bt_tankArr[a].style.height=this.btSize+"px";
			this.bt_tankArr[a].style.float="left";
			this.bt_tankArr[a].style.backgroundImage="url("+tankArr[a].mainImg+")";

			this.div_selTank.appendChild(this.bt_tankArr[a]);

		}

		this.btStart.type="button";
		this.btStart.style.width=150+"px";
		this.btStart.style.height=70+"px";
		this.btStart.style.position="absolute";
		this.btStart.style.margin="auto";
		this.btStart.style.left=this.width-710+"px";
		this.btStart.style.top=this.height-120+"px";
		this.btStart.value="Ready";
		this.btStart.style.fontSize="36pt";

		this.btShop.type="button";
		this.btShop.style.width=150+"px";
		this.btShop.style.height=70+"px";
		this.btShop.style.position="absolute";
		this.btShop.style.margin="auto";
		this.btShop.style.left=this.width-540+"px";
		this.btShop.style.top=this.height-120+"px";
		this.btShop.value="Shop";
		this.btShop.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-370+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.div_tankP1.appendChild(this.img_tankP1);
		this.div_tankP1.appendChild(this.div_itemP1);
		this.div_tankP2.appendChild(this.img_tankP2);
		this.div_tankP2.appendChild(this.div_itemP2);

		this.div_showP1.appendChild(this.div_tankP1);
		this.div_showP1.appendChild(this.div_tankSkillP1);
		this.div_showP2.appendChild(this.div_tankP2);
		this.div_showP2.appendChild(this.div_tankSkillP2);

		this.div_down.appendChild(this.div_selMap);
		this.div_down.appendChild(this.div_selTank);

		this.stage.appendChild(this.div_showP1);
		this.stage.appendChild(this.div_showVs);
		this.stage.appendChild(this.div_showP2);
		this.stage.appendChild(this.div_down);

		this.stage.appendChild(this.btStart);
		this.stage.appendChild(this.btShop);
		this.stage.appendChild(this.btBack);
		this.stage.appendChild(this.btExit);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);


	
	}

}


/*

var winSelectContentsSing = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;

	this.div_showP1;
	this.div_showCom;
	this.div_showVs;
	this.div_selTank;											//	탱크들을 선택하는 곳이 담긴 div
	this.div_down;
	this.div_selMap;											//	맵을 고르는 창을 담을 div
	this.audioSrc="../music/selectContents.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.btStart;
	this.btShop;
	this.btBack;
	this.btExit;

	this.div_showMargin=80;
	this.btSize=100;
	this.imgSize=100;
	
	this.bt_tankArr = new Array(6);												//	탱크 선택 버튼

	this.img_itemP1Arr = new Array(4);
	this.img_itemComArr = new Array(4);


	this.init = function(){

		this.stage = document.createElement("div");

		this.div_showP1 = document.createElement("div");
		this.div_showCom = document.createElement("div");
		this.div_showVs = document.createElement("div");

		this.div_tankP1 = document.createElement("div");
		this.div_itemP1 = document.createElement("div");
		this.div_tankSkillP1 = document.createElement("div");
		this.img_tankP1 = document.createElement("img");

		this.div_tankCom = document.createElement("div");
		this.div_itemCom = document.createElement("div");
		this.div_tankSkillCom = document.createElement("div");
		this.img_tankCom = document.createElement("img");

		this.div_selTank = document.createElement("div");
		this.div_down = document.createElement("div");
		this.div_selMap = document.createElement("div");

		this.btStart = document.createElement("input");
		this.btShop = document.createElement("input");
		this.btBack = document.createElement("input");
		this.btExit = document.createElement("input");

		//this.div_showP1.style.border="1px solid red";

		this.stage.style.width=this.width+"px";									//	div_wrapper의 style 정의
		this.stage.style.height=this.height+"px";
		this.stage.style.margin="0px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";


		this.div_showP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showP1.style.height=this.height/2+"px";
		this.div_showP1.style.textAlign="right";
		this.div_showP1.style.float="left";
		this.div_showP1.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankP1.style.height=this.height/4+"px";
		this.div_tankP1.style.textAlign="right";
		this.div_tankP1.style.float="left";

		this.div_itemP1.style.width=this.imgSize*2+"px";									//	div_mul의 style 정의
		this.div_itemP1.style.height=this.imgSize*2+"px";
		this.div_itemP1.style.textAlign="right";
		this.div_itemP1.style.float="left";

		this.div_tankSkillP1.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillP1.style.height=this.height/4+"px";
		this.div_tankSkillP1.style.textAlign="right";
		this.div_tankSkillP1.style.float="left";

		this.img_tankP1.style.width=200+"px";
		this.img_tankP1.style.height=200+"px";
		this.img_tankP1.src="../images/effect/box.png";
		this.img_tankP1.style.border="1px solid red";

		for( var a=0 ; a<this.img_itemP1Arr.length ; a++ ){

			this.img_itemP1Arr[a] = document.createElement("img");

			this.img_itemP1Arr[a].style.width=this.imgSize+"px";
			this.img_itemP1Arr[a].style.height=this.imgSize+"px";
			this.img_itemP1Arr[a].style.float="left";
			this.img_itemP1Arr[a].value="난탱크"+a;

			this.div_itemP1.appendChild(this.img_itemP1Arr[a]);

		}


		this.div_showCom.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showCom.style.height=this.height/2+"px";
		this.div_showCom.style.textAlign="left";
		this.div_showCom.style.float="right";
		this.div_showCom.style.marginTop=this.div_showMargin/2+"px";

		this.div_tankCom.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankCom.style.height=this.height/4+"px";
		this.div_tankCom.style.textAlign="left";
		this.div_tankCom.style.float="right";

		this.div_itemCom.style.width=this.imgSize*2+"px";									//	div_mul의 style 정의
		this.div_itemCom.style.height=this.imgSize*2+"px";
		this.div_itemCom.style.textAlign="left";
		this.div_itemCom.style.float="right";

		this.div_tankSkillCom.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_tankSkillCom.style.height=this.height/4+"px";
		this.div_tankSkillCom.style.textAlign="left";
		this.div_tankSkillCom.style.float="right";

		this.img_tankCom.style.width=200+"px";
		this.img_tankCom.style.height=200+"px";
		this.img_tankCom.src="../images/effect/box.png";
		this.img_tankCom.style.border="1px solid red";

		for( var a=0 ; a<this.img_itemComArr.length ; a++ ){

			this.img_itemComArr[a] = document.createElement("img");

			this.img_itemComArr[a].style.width=this.imgSize+"px";
			this.img_itemComArr[a].style.height=this.imgSize+"px";
			this.img_itemComArr[a].style.float="left";
			this.img_itemComArr[a].value="난탱크"+a;

			this.div_itemCom.appendChild(this.img_itemComArr[a]);

		}


		this.div_showVs.style.width=this.width/3+"px";									//	div_mul의 style 정의
		this.div_showVs.style.height=this.height/4+"px";
		this.div_showVs.style.textAlign="center";
		this.div_showVs.innerText="VS"
		this.div_showVs.style.fontSize="100pt";
		this.div_showVs.style.float="left";
		//this.div_showVs.style.margin="auto";
		this.div_showVs.style.marginTop=this.div_showMargin+"px";
		//this.div_showVs.style.border="1px solid red";

		this.div_down.style.width=this.width+"px";
		this.div_down.style.height=this.height/3+"px";
		this.div_down.style.float="left";
		this.div_down.style.textAlign="center";

		this.div_selMap.style.width=this.width/3+"px";
		this.div_selMap.style.height=this.height/3+"px";
		this.div_selMap.style.border="30px solid red";
		//this.div_selMap.style.display="inline-block";
		this.div_selMap.style.float="left";

		this.div_selTank.style.width=(this.btSize*this.bt_tankArr.length)+"px";
		this.div_selTank.style.height=this.btSize+"px";
		this.div_selTank.style.border="30px solid red";
		this.div_selTank.style.display="inline-block";

		for( var a=0 ; a<this.bt_tankArr.length ; a++ ){

			this.bt_tankArr[a] = document.createElement("input");

			this.bt_tankArr[a].type="button";
			this.bt_tankArr[a].style.width=this.btSize+"px";
			this.bt_tankArr[a].style.height=this.btSize+"px";
			this.bt_tankArr[a].style.float="left";
			this.bt_tankArr[a].value="난탱크"+a;

			this.div_selTank.appendChild(this.bt_tankArr[a]);

		}

		this.btStart.type="button";
		this.btStart.style.width=150+"px";
		this.btStart.style.height=70+"px";
		this.btStart.style.position="absolute";
		this.btStart.style.margin="auto";
		this.btStart.style.left=this.width-710+"px";
		this.btStart.style.top=this.height-120+"px";
		this.btStart.value="Start";
		this.btStart.style.fontSize="36pt";

		this.btShop.type="button";
		this.btShop.style.width=150+"px";
		this.btShop.style.height=70+"px";
		this.btShop.style.position="absolute";
		this.btShop.style.margin="auto";
		this.btShop.style.left=this.width-540+"px";
		this.btShop.style.top=this.height-120+"px";
		this.btShop.value="Shop";
		this.btShop.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-370+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.btExit.type="button";
		this.btExit.style.width=150+"px";
		this.btExit.style.height=70+"px";
		this.btExit.style.position="absolute";
		this.btExit.style.margin="auto";
		this.btExit.style.left=this.width-200+"px";
		this.btExit.style.top=this.height-120+"px";
		this.btExit.value="Exit";
		this.btExit.style.fontSize="36pt";

		this.div_tankP1.appendChild(this.img_tankP1);
		this.div_tankP1.appendChild(this.div_itemP1);
		this.div_tankCom.appendChild(this.img_tankCom);
		this.div_tankCom.appendChild(this.div_itemCom);

		this.div_showP1.appendChild(this.div_tankP1);
		this.div_showP1.appendChild(this.div_tankSkillP1);
		this.div_showCom.appendChild(this.div_tankCom);
		this.div_showCom.appendChild(this.div_tankSkillCom);

		this.div_down.appendChild(this.div_selMap);
		this.div_down.appendChild(this.div_selTank);

		this.stage.appendChild(this.div_showP1);
		this.stage.appendChild(this.div_showVs);
		this.stage.appendChild(this.div_showCom);
		this.stage.appendChild(this.div_down);

		this.stage.appendChild(this.btStart);
		this.stage.appendChild(this.btShop);
		this.stage.appendChild(this.btBack);
		this.stage.appendChild(this.btExit);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);


	
	}

}

*/

var winItemShop = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	this.btSize=100;
	this.bt_itemArr = new Array();
	this.itemCartArr = new Array(4);

	this.audioSrc="../music/shop.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.itemSize=100;
	

	this.init = function(){

		this.stage = document.createElement("div");
		this.itemDiv = document.createElement("div");
		this.itemListDiv = document.createElement("div");
		this.itemCartDiv = document.createElement("div");
		this.itemInfoDiv = document.createElement("div");
		this.itemInfo = document.createElement("textarea");

		this.btOk = document.createElement("input");
		this.btBack = document.createElement("input");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.position="absolute";
		this.stage.style.textAlign="center";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";

		this.itemDiv.style.width=this.width*7/8+"px";
		this.itemDiv.style.height=this.height*2/3+"px";
		this.itemDiv.style.margin="auto";
		this.itemDiv.style.marginTop=80+"px";

		this.itemListDiv.style.width=this.width*5/8+"px";
		this.itemListDiv.style.height=this.height*3/5+"px";
		this.itemListDiv.style.float="left";

		for( var a=0 ; a<4 ; a++ ){

			for( var b=0 ; b<5 ; b++ ){

				if(b==0){

					this.bt_itemArr[a] = document.createElement("input");

					this.bt_itemArr[a].type="button";
					this.bt_itemArr[a].style.width=this.btSize+"px";
					this.bt_itemArr[a].style.height=this.btSize+"px";
					this.bt_itemArr[a].style.position="absolute";
					this.bt_itemArr[a].style.left=180+(120*b)+"px";
					this.bt_itemArr[a].style.top=120+(130*a)+"px";
					this.bt_itemArr[a].style.backgroundImage="url("+itemArr[a].itemImg+")";

					this.itemListDiv.appendChild(this.bt_itemArr[a]);

				}else{

					this.itemImg = document.createElement("img");

					this.itemImg.style.width=this.btSize+"px";
					this.itemImg.style.height=this.btSize+"px";
					this.itemImg.style.position="absolute";
					this.itemImg.style.left=180+(120*b)+"px";
					this.itemImg.style.top=120+(130*a)+"px";
					this.itemImg.src="../images/block/block.png";

					this.itemListDiv.appendChild(this.itemImg);

				}

			}

		}

		//this.itemCartDiv.style.width=this.width*5/8+"px";
		//this.itemCartDiv.style.height=this.height*3/5+"px";
		//this.itemCartDiv.style.float="left";
		//this.itemCartDiv.style.border="1px solid red";

		for( var a=0 ; a<this.itemCartArr.length ; a++ ){

			this.itemCartArr[a] = document.createElement("img");

			this.itemCartArr[a].style.width=this.imgSize+"px";
			this.itemCartArr[a].style.height=this.imgSize+"px";
			this.itemCartArr[a].style.position="absolute";
			this.itemCartArr[a].style.left=180+(110*a)+"px";
			this.itemCartArr[a].style.top=650+"px";
			this.itemCartArr[a].src="";
			this.itemCartArr[a].style.border="1px solid red";

			this.itemDiv.appendChild(this.itemCartArr[a]);

		}

		this.itemInfoDiv.style.width=this.width*2/8+"px";
		this.itemInfoDiv.style.height=this.height*3/5+"px";
		this.itemInfoDiv.style.margin="auto";
		this.itemInfoDiv.style.marginTop=30+"px";
		this.itemInfoDiv.style.float="left";

		this.itemInfo.style.width=this.width/5+"px";
		this.itemInfo.style.height=this.height/2+"px";
		//this.itemInfo.style.margin="auto";
		this.itemInfo.style.position="absolute";
		this.itemInfo.style.left=880+"px";
		this.itemInfo.style.top=200+"px";
		this.itemInfo.style.backgroundImage="url('../images/bg/metal1.png')";
		this.itemInfo.style.fontSize="30pt";
		this.itemInfo.style.fontWeight="bold";
		this.itemInfo.style.color="silver";
		this.itemInfo.value="안녕";

/*		
*/
		this.btOk.type="button";
		this.btOk.style.width=150+"px";
		this.btOk.style.height=70+"px";
		this.btOk.style.position="absolute";
		this.btOk.style.margin="auto";
		this.btOk.style.left=50+"px";
		this.btOk.style.top=this.height-120+"px";
		this.btOk.value="OK";
		this.btOk.style.fontSize="36pt";

		this.btBack.type="button";
		this.btBack.style.width=150+"px";
		this.btBack.style.height=70+"px";
		this.btBack.style.position="absolute";
		this.btBack.style.margin="auto";
		this.btBack.style.left=this.width-200+"px";
		this.btBack.style.top=this.height-120+"px";
		this.btBack.value="Back";
		this.btBack.style.fontSize="36pt";

		this.itemInfoDiv.appendChild(this.itemInfo);
		this.itemListDiv.appendChild(this.itemCartDiv);

		this.itemDiv.appendChild(this.itemListDiv);
		this.itemDiv.appendChild(this.itemInfoDiv);

		this.stage.appendChild(this.itemDiv);

		this.stage.appendChild(this.btOk);
		this.stage.appendChild(this.btBack);

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}


var winLoadGame = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	this.audioSrc="../music/loading.mp3";
	this.audio = new audioCtrl(this.audioSrc);
	this.setCount=1;
	

	this.init = function(){

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}


var winGameWinner = function( mask, gameWin, stageW, stageH ){

	this.mask=mask;
	this.gameWin=gameWin;
	this.stage;
	this.width=stageW;
	this.height=stageH;
	this.audioSrc="../music/ending.mp3";
	this.audio = new audioCtrl(this.audioSrc);

	this.init = function(){

		this.stage = document.createElement("div");

		this.stage.style.width=this.width+"px";
		this.stage.style.height=this.height+"px";
		this.stage.style.margin=0+"px";
		this.stage.style.position="absolute";
		this.stage.style.backgroundImage="url('../images/bg/metal.png')";
		this.stage.style.display="none";

		this.gameWin.appendChild(this.stage);
		this.mask.appendChild(this.gameWin);
	
	}

}
