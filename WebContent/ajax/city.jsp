<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%	

	String [][]  citys = new String[][]{
		{"松北区","南岗区"},{"南昌","汉口","武昌"},{"浦东","浦西",}	
	};
	//获取城市的id
	int id = Integer.parseInt(request.getParameter("cid"));
	//获取city
	String [] city = citys[id];
	
	String json = "[";
	for(String str :city){
		json = json+"{name:'"+str+"'},";
	}
	json= json+"]";
	//讲数据写出去
	response.getWriter().write(json);
%>