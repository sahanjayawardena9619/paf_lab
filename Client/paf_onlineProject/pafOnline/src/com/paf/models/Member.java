package com.paf.models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Member {

	public String getItems() {
		String itemsGrid = null;
		Connection con = null;
		Statement st = null;
		ResultSet rs = null;

		try {
			con = DBConnection.createConnection();
			st = con.createStatement();
			rs = st.executeQuery("select * from member");

			if (rs.first()) {
				itemsGrid = "<table border='1' cellspacing='1' cellpadding='1'>" + "<tr>" + "<th>userID</th>"
						+ "<th>Username</th>" + "<th>Email</th>" + "<th>NIC</th>" + "<th>Mobile</th>" + "<th>Passowrd</th>" +  "<th>Edit</th>" + "<th>Delete</th>" + "</tr>";
				rs.beforeFirst();

				while (rs.next()) {
					itemsGrid = itemsGrid + "<tr><td>" + rs.getString(1) + "</td>" + "<td>" + rs.getString(2) + "</td>"
							+ "<td>" + rs.getString(3) + "</td>"
							+ "<td>" + rs.getString(4) + "</td>"
							+ "<td>" + rs.getString(5) + "</td>"
							+ "<td>" + rs.getString(6) + "</td>"
							+ "<td><input id=\"btnEdit\" type=\"button\" name=\"btnEdit\"  param=\"" + rs.getString(1)
							+ "\" value=\"Edit\"</td>" + "<td>"
							+ "<input id=\"btnRemove\" type=\"button\" name=\"btnRemove\" param=\"" + rs.getString(1)
							+ "\" value=\"Remove\"</td></tr>";
				}

			} else
				itemsGrid = "There are no Members...";
			itemsGrid = itemsGrid + "</table></br>";
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return itemsGrid;

	}

	public String saveMember(String un, String email, String nic, String mobile, String pw) {
		String res = null;
		String sql = null;
		Connection con = null;
		Statement st = null;
		try {
			con = DBConnection.createConnection();
			st = con.createStatement();
			sql = "insert into member (username, email, nic, mobile, password) values ('"+un+"', '"+email+"', '"+nic+"', '"+mobile+"',"
					+ " '"+pw+"')";
			st.executeUpdate(sql);
			res = "Successfully Inserted...";
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return res;

	}
	
}
