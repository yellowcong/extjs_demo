<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	
	String result = request.getParameter("dep_name");

	//修改一下编码，默认是ISO-8859-1 啥的,我们需要修改一下
	if(result != null){
		result =new String(result.getBytes("ISO-8859-1"),"utf-8");
	}
	
	//当输入人 字的时候，就显示人事部
	if(result != null && result.equals("人")){
		response.getWriter().write("[{name:'人事部',id:'0002'}]");
		
	}else{
		//当没有 参数的时候，直接就将所有数据反悔
		String str ="[{name:'财务部',id:'0001'},{name:'人事部',id:'0002'},{name:'后勤部',id:'0003'},{name:'销售部',id:'0004'},{name:'研发部',id:'0005'}]";
		response.getWriter().write(str);
	}
%>