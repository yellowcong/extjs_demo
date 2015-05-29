<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	response.getWriter().write("{text:'公司部门',id:'0',leaf:false,children:["+
			"{text:'技术部门',id : '01',leaf:false,checked:false,children:["+
			"{text:'研发部',id : '0101',checked:false,leaf:true},"+
			"{text:'实施部',id : '0102',checked:false,leaf:true}]"+
			"},{text:'后勤部门',id : '02',leaf:false,checked:false,children:["+
			"{text:'人事部',id : '0201',checked:false,leaf:true},"+
			"{text:'行政部',id : '0202',checked:false,leaf:true}]}]}");
%>