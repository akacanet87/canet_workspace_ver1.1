var getDamage = function(){					//	데미지 효과

}


var hitImage = function(){						// 총알 맞을 때 나타나는 효과

}


var windType = function( velY ){						//	바람 방향

	this.velY=velY
	this.wind;
	this.accum;
	this.oper;

	this.init = function(){

		this.oper = parseInt(Math.random()*2);
		this.accum = parseInt(Math.random()*3);

		if(this.oper==0){								// 바람에 누적시킬 방향 양 결정 
															//	0이면 왼쪽으로(-방향으로) wind에 누적시켜서 불고 
															//	1이면 오른쪽으로(+방향으로) wind에 누적시켜서 불게 함 

			if( this.accum<-7){

				this.wind=this.wind;
				
			}else{
				
				this.wind-=this.accum;

			}
		
		}else{

			if( this.accum>7 ){

				this.wind=this.wind;

			}else{

				this.wind+=this.accum;

			}

		}

	}

	this.velY=wind;

}
