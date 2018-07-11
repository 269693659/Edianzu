
$.ajax({
	url:"../js/product.json",
	dataType:'json',
	async:false,
	success:function(data){
		var data=data.hot;

		$("#hotFloor").append($("<div></div>")).append(`
		<div class="main content">
		<h4><i></i> <span>${data[0].h5}</span></h4>
		<div class="contentC" >
			<div class="fl"><img src="${data[0].bigimg}"></div>
			<div class="fl">
				
				<div class="conLT divclick" data-divclick='divclick'>
					<a href='javascript:;' data-hotId='${data[0].id}'>
						<h5>${data[0].title}</h5>
						<h6>${data[0].txt}</h6>
						<p>${data[0].price}</p>
						<div><img src="${data[0].img}"></div>
					</a>
				</div>
			

				<div class="conLB divclick" data-divclick='divclick'>
					<a href="##" data-hotId='${data[1].id}'>
						<h5>${data[1].title}</h5>
						<h6>${data[1].txt}</h6>
						<p>${data[1].price}</p>
						<div><img src="${data[1].img}"></div>
					</a>
				</div>
			</div>

			<div class="fl">
				<div class="conMid divclick" data-divclick='divclick'>
					<a href="##" data-hotId='${data[2].id}'>
						<h5>${data[2].title}</h5>
						<h6>${data[2].txt}</h6>
						<p>${data[2].price}</p>
						<div><img src="${data[2].img}"></div>
					</a>
				</div>
			</div>

			<div class="fl">
				<div class="conRT divclick" data-divclick='divclick'>
					<a href="##" data-hotId='${data[3].id}'>
						<h5>${data[3].title}</h5>
						<h6>${data[3].txt}</h6>
						<p>${data[3].price}</p>
						<div><img src="${data[3].img}"></div>
					</a>
				</div>

				<div class="conRB divclick" data-divclick='divclick'>
					<a href="##" data-hotId='${data[4].id}'>
						<h5>${data[4].title}</h5>
						<h6>${data[4].txt}</h6>
						<p>${data[4].price}</p>
						<div><img src="${data[4].img}"></div>
					</a>
				</div>
			</div>
		</div>

	</div>`

	);
	}
})
