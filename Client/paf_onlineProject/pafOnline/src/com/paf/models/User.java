package com.paf.models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class User {

	public boolean login(String un, String pw) {
		Connection con = null;
		Statement statement = null;
		ResultSet resultSet = null;

		String userNameDB = "";
		String passwordDB = "";

		int cnt = 0;

		try {
			con = DBConnection.createConnection();
			statement = con.createStatement();
			resultSet = statement
					.executeQuery("select * from member where email = '" + un + "' AND password = '" + pw + "' ");

			while (resultSet.next()) {

				cnt += 1;

			}

			if (cnt == 1) {
				return true;
			}

			else {
				return false;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return false;

	}
}
