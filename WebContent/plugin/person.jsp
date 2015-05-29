<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%	
	//通过加入数组 [] 操作多条数据
	response.getWriter().write("[{index:1,name:'yellowcong',age:20,sex:'男',phone:'18645171561',email:'717350389@qq.com',isStudent:'true',createDate: new Date('2012-02-02'),score:100},"+
			"{index:2,name:'zhangxx',age:12,sex:'女',phone:'18645171561',email:'717350389@qq.com',isStudent:'true',createDate: new Date('2010-02-02'),score:0},"+
			"{index:3,name:'xiaophai',age:2,sex:'女',phone:'18645171561',email:'717350389@qq.com',isStudent:'false',createDate: new Date('2000-02-02'),score:69.9},"+
			"{index:4,name:'狂飙のyellowcong',sex:'男',age:111,phone:'18645171561',email:'717350389@qq.com',isStudent:'true',createDate: new Date('2013-01-04'),score:99.12}]");
%>