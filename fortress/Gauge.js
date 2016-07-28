var hpGauge = function(){						//	체력게이지


}


var miniHpGauge = function(){					//	탱크에 붙는 체력게이지

}


var bulletPower = function(){						//	총알 쏘는 힘 게이지

	this.power=0;
	this.running=1;
	this.powerFlag;
	this.st;
	var me = this;
	this.firePower;

	this.init = function(){
		
		//this.power=0;
		this.running=1;
		this.powerFlag=true;

	}
	
	this.begin = function(){

		console.log( this.power +" , "+this.running );
		
		//if( this.power >= 0 && this.power <=100 ){
		

		if( this.powerFlag ){

			if( this.power != 100 ){

				this.power+=this.running;
				
			}else if( this.power == 100 ){
				
				this.powerFlag=!this.powerFlag;

			}

		}
		
		if( !this.powerFlag ){

			if( this.power != 0 ){

				this.power-=this.running;
				
			}else if( this.power == 0 ){
				
				this.powerFlag=!this.powerFlag;

			}

		}

		this.firePower=this.power;

		this.st=setTimeout(function(){

			me.begin();
		
		}, 10);

	}

	this.fire = function(){

		this.firePower;

	}

	this.end = function(){

		this.running=0;
		this.power=0;

		clearTimeout(this.st);

	}

}


var moveGauge = function(){						//	이동 가능 거리 게이지

}


var bulletDegGauge = function(){						//	총알 발사 각도 창

	//Math.PI;

}


var windGauge = function(){						//	바람 게이지 창

}


var TimerGauge = function(){						//	제한 시간 표시 창

}