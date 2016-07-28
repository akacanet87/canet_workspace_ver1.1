////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////총알 발사 관련 함수///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var bulletFn = function( map, tankX, tankY, gravity, angleX, angleY, side, bulletImg, damage, bulletWid, bulletHei ){
	
	this.img;
	this.bulletImg=bulletImg;
	this.damage=damage;
	this.map=map;
	this.x=tankX;
	this.y=tankY;
	this.bulletWid=bulletWid;
	this.bulletHei=bulletHei;
	this.gravity=gravity;
	this.angleX=angleX;
	this.angleY=angleY;
	this.side=side;
	this.st;
	this.firePw=bulletPower.firePower/5;

	this.init = function(){

		this.img = document.createElement("img");
		this.img.src=this.bulletImg;
		this.img.style.position="absolute";
		this.img.style.width=this.bulletWid+"px";
		this.img.style.height=this.bulletHei+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		if(this.side){
			
			this.x=this.x+tankWidth+1;
			this.y=this.y-1;
			this.angleX=this.angleX;
			this.angleY=-this.angleY;
			this.img.style.transform="rotateY(0deg)";
			this.img.style.left=this.x+"px";
			this.img.style.top=this.y+"px";

		}else{

			this.x=this.x-parseInt(this.img.style.width)-1;
			this.y=this.y-1;
			this.angleX=-this.angleX;
			this.angleY=-this.angleY;
			this.img.style.transform="rotateY(180deg)";
			this.img.style.left=this.x+"px";
			this.img.style.top=this.y+"px";

		}

		this.map.appendChild(this.img);

		this.angleX=this.angleX*this.firePw;
		this.angleY=this.angleY*this.firePw;

		this.move();

	}

	this.move=function(){

		var me = this;

		//console.log("여긴가?");
		//console.log(bulletPower.firePower);
		

		this.x+=this.angleX;
		this.y+=this.angleY;

		this.angleY+=this.gravity;

		console.log(this.x+" , "+this.y);

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		//	stage를 벗어나면, 총알의 setTimeout은 멈춰야한다
		//console.log( parseInt( this.map.style.width ) );
		
		this.st=setTimeout(function(){
			
			me.move();
			
		}, 10);		// setTimeout이 clearTimeout보다 먼저 호출되어야 한다.
		
/*

		//	블록과 부딪히면
		for( var a=0 ; a<blockArr.length ; a++ ){

			if(blockArr[a]!=undefined){							//	배열에 존재하는 img에 대해서만 (undefined가 아닌 경우만)
				
				var result = hitTest(this.img, blockArr[a].img);

				if( result ){

					//	총알 죽이고 총알의 setTimeout도 중지
					this.map.removeChild(this.img);
					clearTimeout(this.st);

					//	적군 죽이고
					this.map.removeChild(blockArr[a].img);			//	이미지를 먼저 없애고 delete를 맨마지막에 쓴다.
					clearTimeout(blockArr[a].st);
					delete blockArr[a];				//	배열에서 제거하고 이자리에는 Undefined 가 남음

					turn=!turn;

					break;
					return;

				}

			}

		}

*/

		for(var i=0;i<blockArr.length;i++){					//	히트테스트

			for(var j=0;j<blockArr[i].length;j++){

				if(blockArr[i][j]!=undefined){

					var result=hitTest(this.img, blockArr[i][j].img );

					if(result){

						this.map.removeChild(this.img);
						clearTimeout(this.st);

						//	적군 죽이고
						this.map.removeChild(blockArr[i][j].img);			//	이미지를 먼저 없애고 delete를 맨마지막에 쓴다.
						clearTimeout(blockArr[i][j].st);
						delete blockArr[i][j];				//	배열에서 제거하고 이자리에는 Undefined 가 남음

						turn=!turn;

						break;
						return;

					}

				}

			}

		}

		console.log( turn );


		for( var a=0 ; a<gameTankArr.length ; a++ ){

			if(gameTankArr[a]!=undefined){							//	배열에 존재하는 img에 대해서만 (undefined가 아닌 경우만)
				
				var result = hitTest(this.img, gameTankArr[a].img);

				if( result ){

					//	총알 죽이고 총알의 setTimeout도 중지
					this.map.removeChild(this.img);
					clearTimeout(this.st);

					this.calDam = new calDamage( gameTankArr[a].hp , gameTankArr[a].defense, this.damage );

					gameTankArr[a].hp=this.calDam.restHp;

					console.log( gameTankArr[a].hp );
					console.log( gameTankArr[a].defense);
					console.log( this.damage );

					if( gameTankArr[a].hp <= 0 ){
					
						this.map.removeChild(gameTankArr[a].img);			//	이미지를 먼저 없애고 delete를 맨마지막에 쓴다.
						clearTimeout(gameTankArr[a].st);
						delete gameTankArr[a];				//	배열에서 제거하고 이자리에는 Undefined 가 남음

						//turn=!turn;

						break;
						return;

					}else{

						gameTankArr[a].hp;

						console.log( gameTankArr[a].hp );

						turn=!turn;

						break;
						return;

					}


					turn=!turn;

	
				}

			}

		}

			
		// 부딪히지 않고 화면 밖으로 나가면
		if( ( parseInt( this.img.style.left ) > parseInt( this.map.style.width )+200 ) || ( parseInt( this.img.style.left ) < -200 ) || ( parseInt( this.img.style.top ) > parseInt( this.map.style.height ) ) ){

			//alert("저 자살할게요");

			clearTimeout(this.st);
			this.map.removeChild(this.img);

			turn=!turn;

			return;


		}

		console.log( turn );

	}

}


