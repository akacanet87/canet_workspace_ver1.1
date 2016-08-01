

var hitImage = function(){						// 총알 맞을 때 나타나는 효과

}


var windType = function( map, windImg ){						//	바람 방향

	this.windFin;
	this.windX;
	this.windAcc;
	this.oper;
	this.windImg=windImg;

	this.init = function(){

		this.oper = parseInt(Math.random()*2);
		this.windAcc = parseInt(Math.random()*3);

		if(this.oper==0){								// 바람에 누적시킬 방향 양 결정 
															//	0이면 왼쪽으로(-방향으로) wind에 누적시켜서 불고 
															//	1이면 오른쪽으로(+방향으로) wind에 누적시켜서 불게 함 

			if( this.windX<-7){

				this.windX=this.windX;
				
			}else{
				
				this.windX-=this.windAcc;

			}
		
		}else{

			if( this.windX>7 ){

				this.windX=this.windX;

			}else{

				this.windX+=this.windAcc;

			}

		}

	}

	this.windFin=this.windX;

}



