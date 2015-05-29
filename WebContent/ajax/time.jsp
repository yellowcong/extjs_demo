<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%	

	//通过toLocaleString 完成数据格式化
	//Date dateNow = new Date();
    //String dateStr = dateNow.toLocaleString();
    
    //通过simpleDateFormat完成数据格式化输出
    SimpleDateFormat form = new SimpleDateFormat("hh时MM分ss秒");
    String dateStr = form.format(new Date());
	//返回数据
	response.getWriter().write(dateStr);
%>