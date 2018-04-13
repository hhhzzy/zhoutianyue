	layui.use(['form','layer','layedit','laydate','upload'],function(){
			    var form = layui.form
			        layer = parent.layer === undefined ? layui.layer : top.layer,
			        laypage = layui.laypage,
			        upload = layui.upload,
			        layedit = layui.layedit,
			        laydate = layui.laydate,
			        $ = layui.jquery;
			
			  
				//创建一个编辑器
			    var editIndex = layedit.build('goods_detail',{
			        height : 535,
			        uploadImage : {
			            url : "../../json/newsImg.json"
			        }
			    });
			    //格式化时间
			    function filterTime(val){
			        if(val < 10){
			            return "0" + val;
			        }else{
			            return val;
			        }
			    }
			    form.verify({
			        goodsName : function(val){
			            if(val == ''){
			                return "商品名称不能为空";
			            }
			        },
			        salePrice : function(val){
			            if(val == ''){
			                return "商品名称不能为空";
			            }
			        },
			        price : function(val){
			            if(val == ''){
			                return "商品名称不能为空";
			            }
			        },
			        detail : function(val){
			        	//把富文本编辑器的内容赋值到textarea中
			   			return layedit.sync(editIndex);
			        }
			    })

			    form.on("submit(addArticle)",function(data){
			    	//判断类型，是新增，还是修改
			        //弹出loading
			        var index = top.layer.msg('数据提交中，请稍候',{icon: 16,time:false,shade:0.8});
			        console.log(data.field.newsTop)
			        // 实际使用时的提交信息
			        $.post("/goodsAdd",{
			        	 id:GetQueryString("id"),
			             goodsName : $(".goodsName").val(),  //商品名称
			             oneTitle : $(".oneTitle").val(),  //一级标题
			             twoTitle : $(".twoTitle").val(),  //二级标题
			             salePrice : $(".salePrice").val(),  //售卖价格
			             price : $(".price").val(),  //虚拟价格
			             num : $(".num").val(),  //库存
			             info : $(".info").val(),  //商品简介
			             detail : layedit.getContent(editIndex).split('<audio controls="controls" style="display: none;"></audio>')[0],  //文章内容
			             goodsType : $(".goodsType input:checked").val(),
						 openness : $(".openness input:checked").val(), //浏览权限
			             newsTop : data.field.newsTop == "on" ? "checked" : "unckecked",    //是否置顶
			        },function(res){
			        	layer.close(index);//关闭提交数据弹出层
			        	if(res.code == "0"){//新增失败
			        		layer.open({
								title: '提示信息',
								content: res.msg
							}); 
			        	}else if(res.code == "1"){//新增成功
			        		/*
			        		 * 按浏览器回退键时候会出现问题 
			        		 * */
							window.location.href = res.url;
			        	}
			        },"json")
			    })
			    //预览
			    form.on("submit(look)",function(){
			        layer.alert("此功能需要前台展示，实际开发中传入对应的必要参数进行文章内容页面访问");
			        return false;
			    })
				 //上传缩略图
			    upload.render({
			        elem: '.thumbBox',
			        url: '/goodsImgUpload',
        			method : "post", 
        			data:{
        				id:$(".thumbImg").attr("id")
        			},
			        done: function(res, index, upload){
						if(res.err == "0"){
							$(".thumbImg").attr("src",res.msg.path);
							layer.open({
								title: '提示信息',
								content: res.msg.success
							}); 
						}else{
							layer.open({
								title: '提示信息',
								content: res.msg
							}); 
						}
			        }
			    });
			
			})
//获取地址栏的参数
function GetQueryString(name)
{
　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
　　var r = window.location.search.substr(1).match(reg);
　　if(r!=null) return unescape(r[2]);
   return null;
}
		