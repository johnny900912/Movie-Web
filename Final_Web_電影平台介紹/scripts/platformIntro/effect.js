$(document).ready(function(){

	// $(function(){
	// 	platformData.map((val, index) => {
	// 		$('.platformOverview').append(`
	// 			<div class="col-sm" key=${index}>
 //                    <div class="card">
 //                       <div class="card-fix">
 //                         <img src="${val.logoSrc}" class="card-img-top img-field" alt="Card image cap">
 //                       </div>
 //                       <div class="card-body">
 //                          <h5 class="card-title">${val.title}</h5>
 //                          <p class="card-bottom">★★★★★</p>
 //                       </div>
 //                    </div>
 //                 </div>
	// 		`)
	// 	})
	// })

	$('.img-field').hover(function(){
		// mouse enter
		$(this).css({
			opacity: 0.5,
			transform: 'scale(1.2)',
		}, 500)
	},function(){
		// mouse out
		$(this).css({
			opacity: 1,
			transform: 'scale(1)',
		}, 500)
	})

	$('.img-field').click(function(){
		const index = $(this).parent().parent().parent().attr('key')
		
		$('#modalImg').attr('src', platformData[index].imgSrc)	// 把src放到modal裡面的img src
		$('.modal-link-btn').attr('href', platformData[index].link)
		$('.modal-txt').html(platformData[index].txt)
		$('.modal-title').html(platformData[index].title)
		$('#ModalA').modal('show')	// show ModalA
	})


});