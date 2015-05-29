<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%	
	//获取参数
	String username = request.getParameter("name");
	//返回数据
	response.getWriter().write("{name:'"+username+"'}");
%>