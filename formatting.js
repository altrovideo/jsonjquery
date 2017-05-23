//<![CDATA[
    $(window).on("load", function (){
        jQuery(function($) {
            $.getJSON('http://public-api.wordpress.com/rest/v1.1/sites/cristianozanca.wordpress.com/posts/?category=woocommerce&callback=?')
                .done(function(response) {

                    var i = 0, dataSize = response.posts.length, html = '';



                    for(i; i < dataSize; i++){

                        html +="<h2>"+response.posts[i].title+"</h2>"+"<p>"+response.posts[i].content+"</p>";


                    }
                    $("div").html(html);

                    /*
                     var $content = $('#content')
                     .html(response.posts[2].content);



                     $content.find('img').each(function() {
                     var $this = $(this);
                     $this.height($this.height() / 3);
                     $this.width($this.width() / 3);
                     });

                     $('#title')
                     .html(response.posts[2].title)
                     .attr('href', response.posts[2].URL);
                     */


                });
        });
    });//]]>


