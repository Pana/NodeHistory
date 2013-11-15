/*
* 渲染数据
*/
$(function(){
    var $container = $('#ss-container')
        , template = $('#template').text()
        , html = ejs.render(template, {data: nodeVersions})

    $container.append(html);
})

