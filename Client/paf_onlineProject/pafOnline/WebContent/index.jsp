<%@ page import = "com.paf.models.*" %>
<%@ page import ="javax.sql.*" %>

<%
	Member member = new Member();
	String itemsGrid = "";
	String rudFeedBack = "";
	
	if(request.getParameter("hidMode") != null && request.getParameter("hidMode"). equalsIgnoreCase("save"))
	{
		rudFeedBack = member.saveMember(request.getParameter("username"), request.getParameter("email"), 
				request.getParameter("nic"), request.getParameter("mobile"), request.getParameter("password"));
	}
	
	if(request.getParameter("hidMode") != null && request.getParameter("hidMode"). equalsIgnoreCase("update"))
	{
		rudFeedBack = member.saveMember(request.getParameter("username"), request.getParameter("email"), 
				request.getParameter("nic"), request.getParameter("mobile"), request.getParameter("password"));

	}
	
	if(request.getParameter("hidMode") != null && request.getParameter("hidMode"). equalsIgnoreCase("remove"))
	{
		rudFeedBack = member.delMember(request.getParameter("hidID"));

	}
	
	itemsGrid = member.getItems();
%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Index Page</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>



	<div>
		<form action="index.jsp" id="formItems" name="myForm1" method="POST"
			onSubmit="return testValid();">
			<table>
				<tr>
					<input id="hidMode" name="hidMode" type="hidden" value="save">
					<input id="hidID" name="hidID" type="hidden" value="0">

					<td>
						<div class="form-group">
							<label for="email"><b>Username : </b></label>
					</td>

					<td><input type="text" class="form-control" id="username"
						placeholder="Username" name="username" onInput="checkUsername();">
						<span class="error-form" id="usernameOut"></span>
						</div></td>
				</tr>

				<tr>
					<td>
						<div class="form-group">
							<label for="email"><b>Email : </b></label>
					</td>

					<td><input type="text" class="form-control" id="email"
						placeholder="Username" name="email" onInput="checkEmail();">
						<span class="error-form" id="emailOut"></span></td>
				</tr>

				<tr>
					<td>
						<div class="form-group">
							<label for="email"><b>NIC : </b></label>
					</td>

					<td><input type="text" class="form-control" id="nic"
						placeholder="Username" name="nic" oninput="checkNIC();"> <span
						class="error-form" id="nicOut"></span></td>
				</tr>

				<tr>
					<td>
						<div class="form-group">
							<label for="email"><b>Mobile : </b></label>
					</td>

					<td><input type="text" class="form-control" id="mobile"
						placeholder="Username" name="mobile" oninput="checkMobile();">
						<span class="error-form" id="mobileOut"></span></td>
				</tr>

				<tr>
					<td>
						<div class="form-group">
							<label for="email"><b>Password : </b></label>
					</td>

					<td><input type="text" class="form-control" id="password"
						placeholder="Username" name="password" onInput="checkPassword();">
						<span class="error-form" id="passwordOut"></span></td>
				</tr>

				<tr>
					<td>
						<div class="form-group">
							<label for="email"><b>Password (Confirm) : </b></label>
					</td>

					<td><input type="text" class="form-control"
						id="passwordConfirm" placeholder="Username" name="passwordConfirm"
						oninput="checkPassMatch();"> <span class="error-form"
						id="passwordConfirmOut"></span></td>
				</tr>

				<tr>
					<td><input id="btnSave" type="button" name="btnSave"
						value="Save"> <br> <br>
						<div id="divStsMsgItem">
							<%
								out.println(rudFeedBack);
							%>
						</div> 
							<%
							 	out.println(itemsGrid);
							 %>
					</td>
				</tr>




			</table>
		</form>
	</div>


</body>
</html>