layui.use(['form','layer','laydate','table','laytpl','laypage'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        laytpl = layui.laytpl,
        laypage = layui.laypage,
        table = layui.table;

    //商品列表
    var tableIns = table.render({
        elem: '#articleList',
        url : '/goodsList',
        cellMinWidth : 95,
        method:'post',
        page : true,
        height : "full-185",
        limit :4,
        limits : [4],
        id : "articleList",
        cols : [[
            {type: "checkbox", fixed:"left", width:50},
            {field: '_id', title: 'ID', width:60, align:"center"},
            {field: 'goodsName', title: '商品名称', width:"6%",},
            {field: 'oneTitle', title: '一级标题',width:"6%", align:'center'},
            {field: 'twoTitle', title: '二级标题',width:"6%", align:'center'},
            {field: 'salePrice', title: '真实价格',width:"6%", align:'center'},
            {field: 'price', title: '虚拟价格',width:"6%", align:'center'},
            {field: 'num', title: '库存',width:"6%", align:'center'},
            {field: 'info', title: '简介',width:"12%", align:'center'},
            {field: 'detail', title: '商品详情',width:"12%", align:'center'},
            {field: 'goodsType', title: '商品类别', width:"6%",align:'center'},
            {field: 'openness', title: '浏览权限', width:"6%",align:'center'},
            {field: 'newsTop', title: '是否置顶',width:100, align:'center', templet:function(d){
                return '<input type="checkbox" id="'+d._id+'" name="newsTop" lay-filter="newsTop" lay-skin="switch" lay-text="是|否" '+d.newsTop+'>'
            }},
            {field: 'created', title: '发布时间',width:"6%", align:'center', templet:function(d){
            	var date = new Date(d.created);
            	var result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                return result;
            }},
            {title: '操作', width:"10%", templet:'#newsListBar',fixed:"right",align:"center",toolbar:"#barDemo"}
        ]]
    });
    //是否置顶
    form.on('switch(newsTop)', function(data){
        var index = layer.msg('修改中，请稍候',{icon: 16,time:false,shade:0.8});
        console.log(data.elem.checked);
        var id = data.elem.id;
        $.get("/goodsUpdate",{id:id,val:data.elem.checked},function(data){
        	tableIns.reload();
       		layer.close(index);
        	if(data){
        		layer.open({
				  title: '提示信息'
				  ,content: data.msg
				}); 
        	}
        },"json");
    })

    //搜索【此功能需要后台配合，所以暂时没有动态效果演示】
    $(".search_btn").on("click",function(){
        if($(".searchVal").val() != ''){
            table.reload("articleList",{
                page: {
                    curr: 1 //重新从第 1 页开始
                },
                where: {
                	//搜索的关键字
                    goodsName: $(".goodsName").val(),  
                    goodsType: $(".goodsType").val(),  
                    
                }
            })
        }else{
            layer.msg("请输入搜索的内容");
        }
    });

    //批量删除
    $(".delAll_btn").click(function(){
        var checkStatus = table.checkStatus('articleList'),
            data = checkStatus.data,
            goodsId = [];
        if(data.length > 0) {
            for (var i in data) {
                goodsId.push(data[i]._id);
            }
            layer.confirm('确定删除选中的商品？', {icon: 3, title: '提示信息'}, function (index) {
                    $.get("/goodsDelete",{
                        goodsId : goodsId  //将需要删除的newsId作为参数传入
                    },function(data){
		                tableIns.reload();
		                layer.close(index);
		                layer.open({
						  title: '提示信息'
						  ,content: data.success
						}); 
                    },"json")
            })
        }else{
            layer.msg("请选择需要删除的文章");
        }
    })

    //列表操作
    table.on('tool(articleList)', function(obj){
        var layEvent = obj.event,
            data = obj.data;

        if(layEvent === 'edit'){ //编辑
			window.location.href = "/goodsAdd?id="+data._id;
        } else if(layEvent === 'del'){ //删除
            layer.confirm('确定删除此商品？',{icon:3, title:'提示信息'},function(index){
        		/*
        		 *  data:当前行的数据
        		 * */
				obj.del();//删除对应行
                //向服务端发送删除指令
                $.get("/goodsList?id="+data._id,function(data){
                	tableIns.reload();
               		layer.close(index);
                	if(data){
                		layer.open({
						  title: '提示信息'
						  ,content: data.success
						}); 
                	}
                },"json")
            });
        }else if(layEvent === 'look'){ //预览
            layer.alert("此功能需要前台展示，实际开发中传入对应的必要参数进行文章内容页面访问")
        }
    });

})