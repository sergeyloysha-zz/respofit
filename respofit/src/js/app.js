$(function() {

    $('select').simpleselect();

    $('.head__search').on('click', function(e){
    	e.preventDefault();
    	$(this).addClass('hide');
    	$('.head__search-input').removeClass('hide').focus();
    	console.log('open search');
    });

    $('.header__menu-link_menu').on('click', function(e){
    	if($(this).hasClass('active')) {
    		$(this).removeClass('active');
    	}
    	else {
    		$(this).addClass('active');
    	}
    })
});