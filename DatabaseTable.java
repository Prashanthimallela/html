package com.training.jdbc;

import java.sql.*;
import java.util.Scanner;

public class DatabaseTable {
    public static void main(String... args) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/infinite";
        String user = "root";
        String password = "root@123";
        Scanner sc= new Scanner(System.in);
        Connection con = DriverManager.getConnection(url, user, password);
        Statement stmt = con.createStatement();
        System.out.println("enter the account number");
        long number= sc.nextLong();
        System.out.println("enter the bill month");
        int month= sc.nextInt();
        System.out.println("enter the bill amount ");
        double amount=sc.nextDouble();
        try {
            String sql = "{ call get_Database(?,?,?) }";
            CallableStatement statement = con.prepareCall(sql);
            statement.setLong(1,number);
            statement.setLong(2, month);
            statement.setDouble(3,amount);
            amount=amount-amount*0.05;
            System.out.println(amount);

        }catch (SQLException e){
            e.printStackTrace();
        }




    }}

/*Create a database table that will hold all the transactions done on a credit card.
 It will have fields such as account number, det    ails of the transaction along with transaction date.
 Then write a stored procedure which will take account number and month as input and output the total amount due for that account.
 Since this is a promotional card 5% discount will be given on total amount.
 Then create a java class which will call this procedure to fetch the statement details and show that in below format:
 Account Number:xxxxxxx
 Bill Month: xxxxxxx
 Bill Amount: xxxxxxx
 Note: if any outstatnding amount is there on an account that will be added to the amount. */
