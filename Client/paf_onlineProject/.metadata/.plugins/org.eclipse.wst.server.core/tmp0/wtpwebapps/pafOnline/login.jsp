<%@ page import = "com.paf.models.*"%>
<%@ page import ="javax.sql.*"%>
<%@ page language="java" contentType ="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%

	User user = new User();
	String loginMsg = "Please Login to continue";
	
	if(request.getMethod().equalsIgnoreCase("post"))
	{
		if(user.login(request.getParameter("email"), request.getParameter("password")).equals("SUCCESS"))
		{
			request.getRequestDispatcher("/index.jsp").forward(request, response);
			
		}
		
		else
		{
			loginMsg  = "Invalid User Credentials";
		}
		
		
	}
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
		<form action="index.jsp" id = "formLogin" name="myForm1" method="POST">
			<table>


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
							<label for="email"><b>Password : </b></label>
					</td>

					<td><input type="text" class="form-control" id="password"
						placeholder="Username" name="password" onInput="checkPassword();">
						<span class="error-form" id="passwordOut"></span></td>
				</tr>


				<tr>
					<td><input id="btnLogin" name="btnLogin" type="button"
						value="Login"> <br>
						<div id="divStsMsgLogin">
							<%
								out.println(loginMsg);
							%>
						</div></td>
				</tr>




			</table>
		</form>
	</div>


</body>
</html>