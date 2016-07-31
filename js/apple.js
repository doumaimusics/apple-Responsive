$(function(){
//	搜索框
$('.header .search').on('click',function(e){
	e.preventDefault();//去除默认点击样式
	$('.header .nav').addClass('searching')
	$('.menu').css('display','none');
	$('.text').addClass('active');
	$('.bag').addClass('close');
	$('body').css('overflow','hidden');
	$('.zhezhao').css('display','block')
})
//关闭搜索框
$('.bag').on('click',function(e){
	e.preventDefault();//去除默认点击样式
	$('.header .nav').removeClass('searching');
	$('.zhezhao').css('display','none');
	$('.menu').css('display','inline-block');
	$('.text').removeClass('active');
	$('.bag').removeClass('close');
	$('body').css('overflow-y','inherit');	
})

    $(window).on('resize',function(){
        if($(document).width()<768){
            $('.close').trigger('click')
        }
    })

//小屏下选项卡 遮罩
$('.nav-phone .menu').on('click',function(e){
	e.preventDefault();//去除点击的时的默认样式
	$(this).toggleClass('bian');
	if($(this).hasClass('bian')){
		$('body').css('overflow','hidden');
		$('.header-left').slideDown(500);//下拉菜单效果
	}else{
		$('body').css('overflow','inherit');
		$('.header-left').slideUp(500);
	}
})


//banner
var transitionTime = 600;
var moving = false;
move = function(n,dir){
	moving = true;
	var active = $('.lunbo .lei');
	active
	.addClass(dir)
	.delay(transitionTime)
	.queue(function(){
		moving = false;
		$(this)
		.removeClass('lei')
		.removeClass(dir)
		.dequeue();
	})
	var op = (dir == 'left')?'right':'left';
	$(n).addClass(op);
	$(n).get(0).offsetWidth;
	$(n).removeClass(op)
	.addClass('lei')
	$('.point li').removeClass('yangshi').eq(itmes.index(n)).addClass('yangshi');
}

    var you = $('.banner .zuo');
    var zuo = $('.banner .you');
    var itmes = $('.lunbo .itme');
    you.on('click',function(){
    	if(moving){return;}
    	var active = $('.lunbo .lei');
    	if(active.next().length){
    		var n = active.next();
    	}else{
    		var n = itmes.eq(0);
    	}
    	move(n,'left')
    })
    zuo.on('.click',function(){
    	if(moving){return;}
    	var active = $('.lunbo .lei');
    	if(active.prev().length){
    		var n = active.prev();
    	}else{
    		var n = itmes.eq(-1);
    	}
    	move(n,'right')
    })
    $('.point li').on('click',function(){
    	if($(this).index()>itmes.index($('.lunbo .lei'))){
    		var d='right';
    	}else{
    		var d='left';
    	}
    	var n = itmes.eq($(this).index());
    	move(n,d);
    })
    var t = setInterval(function(){
    	you.trigger('click');
    },1000)
//            当鼠标移入BODY里显示
    $('.banner').on('mouseover',function(){
    	$('.zuo').css('display','block');
    	$('.you').css('display','block')
    })
    $('.banner').on('mouseout',function(){
    	$('.zuo').css('display','none');
    	$('.you').css('display','none')
    })   
    
    
     dul=$('.lie');
    dul.on('click',function(){
        $(this).find('.xyclose').toggleClass('chazhuan') ;
        $(this).toggleClass("chuxian");

    })
    
})