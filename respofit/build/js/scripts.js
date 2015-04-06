$(function() {
    $('.head__search').on('click', function(e){
    	e.preventDefault();
    	$(this).addClass('hide');
    	$('.head__search-input').removeClass('hide').focus();
    	console.log('open search');
    });
});