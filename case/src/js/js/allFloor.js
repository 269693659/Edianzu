$.ajax({
	url:"../js/floor.json",
	dataType:'json',
	async:false,

	success:function(data){
		var arr=[]
		for(var i=0;i<data.length;i++){
			
				arr[i]=`
	<div class="main floor-box${i+1} jumpF">
		<h4><i></i> <span>${data[i][0].title}</span></h4>
		<div class="floor" >
			<div class="fl"><a href="" class="aclick"><img src="${data[i][0].bigimg}"></a></div>
			<div class="fl floorR">


				<div class="floorRT">
					<a href="" class="aclick" data-id="${data[i][0].id}">
						<div><img src="${data[i][0].img}"></div>
						<h5>${data[i][0].txt}</h5>
						<p>${data[i][0].price}</p>
					</a>
					<a href="" class="aclick" data-id="${data[i][1].id}">
						<div><img src="${data[i][1].img}"></div>
						<h5>${data[i][1].txt}</h5>
						<p>${data[i][1].price}</p>
					</a>
					<a href="" class="aclick" data-id="${data[i][2].id}">
						<div><img src="${data[i][2].img}"></div>
						<h5>${data[i][2].txt}</h5>
						<p>${data[i][2].price}</p>
					</a>
					<a href="" class="aclick" data-id="${data[i][3].id}">
						<div><img src="${data[i][3].img}"></div>
						<h5>${data[i][3].txt}</h5>
						<p>${data[i][3].price}</p>
					</a>
				</div>

				<div class="floorRB">
					<a href="" class="aclick" data-id="${data[i][4].id}">
						<div><img src="${data[i][4].img}"></div>
						<div>
							<h5>${data[i][4].txt}</h5>
							<p>${data[i][4].price}</p>
						</div>
					</a>

					<a href="" class="aclick" data-id="${data[i][5].id}">
						<div><img src="${data[i][5].img}"></div>
						<div>
							<h5>${data[i][5].txt}</h5>
							<p>${data[i][5].price}</p>
						</div>
					</a>
				</div>

				
			</div>

		</div>

	</div>`;

		// $("#allFloor").append($("<div></div>")).append(str)
		$("#allFloor").html(arr.join(''))
			
		}
		
		
	}
})
