
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#FFFAD0', '#FFF7AA', '#FFFAD0', '#FFF7AA', '#FFFAD0'],
        anchors: ['Sec1','Sec2','Sec3','Sec4','Sec5'],
        css3: true,
        navigation: true,
        slidesNavigation: true,
        lazyLoading: true,
        loop: false,
        // navigationTooltips:['1','2','3','4','5'],
        // showActiveTooltip: true,

        afterLoad: function (anchorLink, index) {
            if(index == 1){$('#fp-nav').animate( {
                opacity: 0
            }, 500, 'swing' );}
            else{$('#fp-nav').animate( {
                opacity: 1
            }, 500, 'swing' );}

            if(index == 5){
                $('#slide1').find('.btns').find('#s1').animate( {
                    opacity: 1
                }, 500, 'swing' );
                $('#slide1').find('.btns').find('#s2').animate( {
                    opacity: 1
                }, 500, 'swing' );
                $('#slide1').find('#s3').animate( {
                    opacity: 1
                }, 200, 'swing' );
            }
        }
    });
});
