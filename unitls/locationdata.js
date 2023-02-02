const homelist = [
	{
		"title":'销售出库',
		"icon":'../../static/images/home/saleout.png',
		"path":'/pages/hsoPage/hsoPage'
	},
	{
		"title":'采购入库',
		"icon":'../../static/images/home/home2.png',
		"path":'/pages/purintopage/purintopage'
	},
	{
		"title":'客户',
		"icon":'../../static/images/home/home3.png',
		"path":'/pages/home/hcustomer/hcustomer'
	},
	{
		"title":'供应商',
		"icon":'../../static/images/home/home4.png',
		"path":'/pages/home/suptomer/suptomer'
	},
	{
		"title":'产品',
		"icon":'../../static/images/home/home5.png'
	},
	{
		"title":'盘点',
		"icon":'../../static/images/home/home6.png'
	},
	{
		"title":'费用',
		"icon":'../../static/images/home/home7.png'
	},
	{
		"title":'销售退货',
		"icon":'../../static/images/home/home8.png'
	},
	{
		"title":'调拨',
		"icon":'../../static/images/home/home9.png'
	},
	{
		"title":'采购退货',
		"icon":'../../static/images/home/home10.png'
	},
	{
		"title":'生成',
		"icon":'../../static/images/home/home11.png'
	},
	{
		"title":'租赁',
		"icon":'../../static/images/home/home12.png'
	}
]


const iquarlist = [
	{
		"icon":'../../static/images/home/home2.png',
		"title":'仓库库存报表'
	},
	{
		"icon":'../../static/images/home/home3.png',
		"title":'产品库存报表'
	},
	{
		"icon":'../../static/images/home/home4.png',
		"title":'产品销售分析报表'
	},
	{
		"icon":'../../static/images/home/home5.png',
		"title":'产品采购分析报表'
	},
	{
		"icon":'../../static/images/home/home6.png',
		"title":'仓库出货分析报表'
	},
	{
		"icon":'../../static/images/home/home7.png',
		"title":'仓库入库分析报表'
	},
	{
		"icon":'../../static/images/home/home8.png',
		"title":'业务员业绩分析报表'
	},
	{
		"icon":'../../static/images/home/home9.png',
		"title":'采购员业务分析报表'
	},
	{
		"icon":'../../static/images/home/home10.png',
		"title":'客户分析统计报表'
	},
	{
		"icon":'../../static/images/home/home11.png',
		"title":'供应商分析统计报表'
	},
	{
		"icon":'../../static/images/home/home12.png',
		"title":'公司收入报表'
	},
	{
		"icon":'../../static/images/home/home2.png',
		"title":'会员办卡数据报表'
	},
	{
		"icon":'../../static/images/home/home3.png',
		"title":'PV报表'
	},
	{
		"icon":'../../static/images/home/home4.png',
		"title":'CURRENCY报表'
	},
	{
		"icon":'../../static/images/home/home5.png',
		"title":'明细数据查询'
	},
	{
		"icon":'../../static/images/home/home6.png',
		"title":'客户支出统计报表'
	},
	{
		"icon":'../../static/images/home/home7.png',
		"title":'其他费用查询'
	},
	{
		"icon":'../../static/images/home/home8.png',
		"title":'预警库存'
	}
]


const requirelist = function(item,value) {
	var tab = []
	if(item == '编码'){
		
		for(var i = 0; i < value; i++){
			tab.unshift(i)
		}
		return tab		  
	}
	else if(item == '条码'){
		return ['条码','1','2']		  
	}
	else if(item == '品名'){
		return ['品名','1','2']		  
	}
	else if(item == '规格'){
		return ['规格','1','2']		  
	}
	else if(item == '型号'){
		return ['型号','1','2']	  
	}
	else if(item == '颜色'){
		return ['颜色','1','2']		  
	}
	else if(item == '尺码'){
		return ['尺码','1','2']	  
	}
}


const goodlists = [
	{
		"name":'电器',
		"childer":[
			{
			  "name":'电器1'
			},
			{
			  "name":'电器2'
			},
			{
			  "name":'电器3',
			  "childer":[
				  {"name":'电器31'},
				  {"name":'电器32'},
				  {"name":'电器33'}
			  ]
			}
		
		]
			
	},
	{
		"name":'电器1'
	},
	{
		"name":'电器2'
	},
	{
		"name":'电器3jshjsfjsjfjsfh'
	},
	{
		"name":'电器4'
	},
	{
		"name":'电器5'
	},
	{
		"name":'电器6'
	},
	{
		"name":'电器7'
	},
	{
		"name":'电器8'
	},
	{
		"name":'电器9'
	},
	{
		"name":'电器10'
	},
	{
		"name":'电器11'
	},
	{
		"name":'电器12'
	},
	{
		"name":'电器13'
	},
	{
		"name":'电器14'
	},
	{
		"name":'电器15'
	},
	{
		"name":'电器16'
	},
	{
		"name":'电器17'
	},
	{
		"name":'电器18'
	},
	{
		"name":'电器19'
	},
	{
		"name":'电器20'
	}
]

export default{
	homelist,
	iquarlist,
	requirelist,
	goodlists
}