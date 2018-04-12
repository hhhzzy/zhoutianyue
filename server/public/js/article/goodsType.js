layui.use(['form','layer','laydate','table','laytpl','laypage'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery,
        laydate = layui.laydate,
        laytpl = layui.laytpl,
        laypage = layui.laypage,
        table = layui.table;
    //商品类型列表
    var tableIns = table.render({
        elem: '#articleList',
        url : '/goodsType',
        cellMinWidth : 95,
        method:'post',
        page : true,
        height : "full-185",
        limit :4,
        limits : [2],
        id : "articleList",
        where:{
        	"do":"find"
        },
        cols : [[
            {type: "checkbox", fixed:"left", width:50},
            {field: '_id', title: 'ID', width:100, align:"center"},
            {field: 'type', title: '商品类别'},
            {field: 'created', title: '发布时间', align:'center',templet:function(d){
            	var date = new Date(d.created);
            	var result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                return result;
            }},
            {title: '操作', width:170, templet:'#newsListBar',fixed:"right",align:"center",toolbar:"#barDemo"}
        ]]
    });
    //增加
    $(".addGoodsType_btn").click(function(){
    	layer.open({
    		type:"1",
    		area:["500px","200px"],
    		title:"增加商品分类",
			content: $("#add-goodsType"),
			success: function(layero, index){
			    //监听提交
				form.on('submit(addType)', function(data){
					if(!data.field.goodsType){
						layer.open({
						  title: '提示信息'
						  ,content: "请输入商品分类"
						}); 
					}else{
						$.post("/goodsType",{"type":data.field.goodsType},function(data){
	       					layer.close(index);
			        		layer.open({
							  title: '提示信息',
							  content: data.msg,
							  end:function(){
							  	window.location.reload();
							  }
							}); 
				        },"json");
					}
			        return false;//阻止页面跳转
				});
			}
		
		});
    })
	//批量删除
    $(".delAll_btn").click(function(){
        var checkStatus = table.checkStatus('articleList'),
            data = checkStatus.data,
            goodsId = [];
            console.log(checkStatus)
        if(data.length > 0) {
            for (var i in data) {
                goodsId.push(data[i]._id);
            }
            layer.confirm('确定删除选中的商品分类？', {icon: 3, title: '提示信息'}, function (index) {
            		$.ajax({
            			url:"/goodsTypeDelete",
            			type:"post",
            			data:{
            				goodsId : goodsId
            			},
            			dataType:"json",
            			traditional:true,
            			success:function(data){
            				tableIns.reload();
			                layer.close(index);
			                layer.open({
							  title: '提示信息'
							  ,content: data.success
							}); 
            			}
            			
            		})
            })
        }else{
            layer.msg("请选择需要删除的商品分类");
        }
    })
    //列表操作
    table.on('tool(articleList)', function(obj){
        var layEvent = obj.event,
            _data = obj.data;
        if(layEvent === 'edit'){ //编辑
			layer.open({
    		type:"1",
    		area:["500px","200px"],
    		title:"修改商品分类",
			content: $("#add-goodsType"),
			success: function(layero, index){
				console.log()
				layero.find(".goodsType").val(_data.type);
			    //监听提交
				form.on('submit(addType)', function(data){
					if(!data.field.goodsType){
						layer.open({
						  title: '提示信息'
						  ,content: "请输入商品分类"
						}); 
					}else{
						$.post("/goodsType",{"type":data.field.goodsType,"id":_data._id,"do":"update"},function(data){
	       					layer.close(index);
			        		layer.open({
							  title: '提示信息',
							  content: data.msg,
							  end:function(){
							  	window.location.reload();
							  }
							}); 
				        },"json");
					}
			        return false;//阻止页面跳转
				});
			}
		
		});
        } else if(layEvent === 'del'){ //删除
            layer.confirm('确定删除此商品分类？',{icon:3, title:'提示信息'},function(index){
        		/*
        		 *  data:当前行的数据
        		 * */
				obj.del();//删除对应行
                //向服务端发送删除指令
                $.get("/goodsTypeDelete?id="+_data._id,function(data){
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