
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////기타 함수/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var tankCom = function(){

}


var gameInfo = function(){					//	게임 맵 이름, 음악 이름

}


var tankSkillWin = function(){						//	탱크의 능력치를 보여주는 창

}

var helicopter = function( map, gravity, dropHeight, dropItemX, dropItemY ){

	this.map=map;
	this.dropItemX=dropItemX;
	this.dropItemY=dropItemY;
	this.dropSpotX;
	this.dropSpotY;
	this.dropHeight=dropHeight;
	this.velY=1;
	this.velX=0;
	this.width=100;
	this.height=50;
	this.tremble=true;
	this.dropFlag=true;
	this.gravity=gravity;
	this.st;
	
	var dropItem;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src="../images/effect/helicopter.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.dropItemX+"px";
		this.img.style.top=-200+"px";
		
		this.map.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		var me=this;

		this.st=setTimeout(function(){

			me.move();
		
		}, 10);


		if( this.dropItemY == -400 ){

			this.map.removeChild(this.img);
			clearTimeout(this.st);

		}

		if( this.dropItemY == 80 ){

			this.dropFlag=!this.dropFlag;

		}

		if( this.dropItemY == this.dropHeight && this.dropFlag ){

			this.dropSpotX=this.dropItemX;
			this.dropSpotY=this.dropItemY;


			//dropItem.init();

		}

		if( this.dropFlag ){

			if( this.tremble ){
			
				this.dropItemY+=this.velY;

				this.img.style.left=this.dropItemX+"px";
				this.img.style.top=this.dropItemY+"px";
				this.img.style.transform="rotate(5deg)";

				this.tremble=!this.tremble;

			}else{

				this.dropItemY+=this.velY;

				this.img.style.left=this.dropItemX+"px";
				this.img.style.top=this.dropItemY+"px";
				this.img.style.transform="rotate(-5deg)";

				this.tremble=!this.tremble;

			}

		}else{

			if( this.tremble ){
			
				this.dropItemY-=this.velY;

				this.img.style.left=this.dropItemX+"px";
				this.img.style.top=this.dropItemY+"px";
				this.img.style.transform="rotate(5deg)";

				this.tremble=!this.tremble;

			}else{

				this.dropItemY-=this.velY;

				this.img.style.left=this.dropItemX+"px";
				this.img.style.top=this.dropItemY+"px";
				this.img.style.transform="rotate(-5deg)";

				this.tremble=!this.tremble;

			}

		}

		

	}

}




var dropItem = function( map, gravity, helX, helY ){						//	아이템 떨어뜨리기

	this.map=map;
	this.gravity=gravity;
	this.helX=helX;
	this.helY=helY;
	this.itemX;
	this.itemY;
	this.width=20;
	this.height=20;
	this.st;
	var me = this;

	this.init = function(){

		this.img = document.createElement("img");

		this.img.src="../images/effect/box.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.helX+"px";
		this.img.style.top=this.helY+this.height+"px";
		
		this.map.appendChild(this.img);

		this.move();

	}

	this.move = function(){

		this.itemX=this.helX;

		this.itemY+=this.gravity;

		this.img.style.left=this.itemX+"px";
		this.img.style.top=this.itemY+"px";

		this.st=setTimeout(function(){

			me.move();
		
		}, 10);


		for(var i=0;i<blockArr.length;i++){					//	히트테스트

			for(var j=0;j<blockArr[i].length;j++){

				if(blockArr[i][j]!=undefined){

					var result=hitTest(this.img, blockArr[i][j].img );

					if(result){

						//console.log("나 밟았어");

						this.velY=0; //밟으면 떨어지지 않게 velY값을 0으로 준다!!

						this.falling=false;

						break;

					}

				}

			}

		}


		for( var a=0 ; a<gameTankArr.length ; a++ ){

			var result = hitTest(this.img, gameTankArr[a].img);

			if( result ){

				//	총알 죽이고 총알의 setTimeout도 중지
				this.map.removeChild(this.img);
				clearTimeout(this.st);

				break;

			}

		}
	
	}

}


var hitTest = function(me, target) {
 
 //두물체간 충돌 여부 판단 
	 me_x= parseInt(me.style.left);			// div이든 image 이든 style시트를 갖고 잇는 모든 것
	 me_y= parseInt(me.style.top);
	 me_width=parseInt(me.style.width);
	 me_height=parseInt(me.style.height);
	 
	 target_x= parseInt(target.style.left);
	 target_y= parseInt(target.style.top);
	 target_width=parseInt(target.style.width);
	 target_height=parseInt(target.style.height);
	 
	 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	 
	 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	  
	 return (result1 || result2) && (result3 || result4);
}



var audioCtrl = function( src ){

	this.src=src;
	this.audio = new Audio(this.src);
	/*
	
	this.audio.addEventListener('ended',function(){
		
		me.audio.currentTime=0;
		me.audio.play();
		
	},false);

	*/

	//this.audio.loop="loop";
	this.init = function(){

		this.audio.play();
		this.audio.loop="loop";	
		this.audio.volume=0.1;

	}

	this.clear = function(){

		this.audio.load();

	}

}


var fireAngle = function( bullet, cal ){

	this.rad=0.9;

	this.cal=cal;

	this.deg;

	this.angleY+=cal;

	this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY));

	if( this.angleY >= 0 && this.angleX >= 0 ){

		this.angleX=this.angleX;
		this.angleY=this.angleY;

	}else if( this.angleX >= this.rad ){

		this.angleX=this.rad;
		this.angleY=parseFloat(Math.sqrt(this.rad*this.rad-this.angleX*this.angleX))

	}else if( this.angleY >= this.rad ){

		this.angleY=this.rad;
		this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY))

	}else if( this.angleX <= 0 ){

		this.angleX=0;
		this.angleY=parseFloat(Math.sqrt(this.rad*this.rad-this.angleX*this.angleX))

	}else if( this.angleY <= 0 ){

		this.angleY=0;
		this.angleX=parseFloat(Math.sqrt(this.rad*this.rad-this.angleY*this.angleY))

	}

	//console.log( this.angleX+" , "+this.angleY);


	bullet.angleY=this.angleY;

	bullet.angleX=this.angleX;

	//console.log(bullet.angleX+" , "+bullet.angleY);

	//this.deg = Math.atan2( this.angleY, this.angleX )*180/ Math.PI;

	//console.log(this.deg);

}



var calDamage = function( hp, defense, damage ){

	//this.tank=tank;
	this.hp=hp;
	this.defense=defense;
	this.damage=damage;
	this.restHp;

	this.restHp=this.hp-(this.damage-this.defense);

}



var focusOn = function( map, objX, objY, focusFlag ){

	this.map=map;
	this.objX=objX;
	this.objY=objY;
	this.dRate=0.9;
	this.focusFlag=focusFlag;

	this.targetX;
	this.targetY;

	this.mapX=parseInt( this.map.style.left );
	this.mapY=parseInt( this.map.style.top );

	this.stCount=0;
	this.st;
	var me = this;

	this.move = function(){

		this.focusFlag=true;

		//console.log(this.objX+" , "+this.objY);

		if( focusFlag ){

			this.targetX = -( this.objX - 600 );						//	화면 중앙으로 갖다 놓기
			this.targetY = -( this.objY - 450 );

			this.mapX=parseInt( this.map.style.left );
			this.mapY=parseInt( this.map.style.top );

			this.stCount++;

			this.st=setTimeout(function(){

				me.move();
				
			
			}, 50 );

			//	이미지 위치 =  타겟X - a*(타겟X - 나와의 남은 거리));

			this.mapX = this.targetX - this.dRate * ( this.targetX -  this.mapX );
			this.mapY = this.targetY - this.dRate * ( this.targetY - this.mapY );

			if(  this.mapX < -1760 ){

				this.mapX= -1760;

			}
			
			if(  this.mapX > 0 ){

				 this.mapX=0;

			}

			if( this.mapY < -1100 ){

				this.mapY=-1100;

			}
			
			if( this.mapY > 0 ){

				this.mapY=0;

			}

			this.map.style.left=this.mapX+"px";
			this.map.style.top=this.mapY+"px";

		}

	}

	this.clear = function(){

		clearTimeout(this.st);

		this.focusFlag=false;

	}

}
