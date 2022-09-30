using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System;
//using System.Web.Script.Serialization;  
//using Newtonsoft.Json.Linq;  
using Newtonsoft.Json; 

using MySql.Data;
using MySql.Data.MySqlClient;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        // 
        // GET: /HelloWorld/
        static string connectionstring = "server=localhost;port=3306;uid=root;" +
        "pwd=root123; database=kidzdb; charset=utf8; sslmode=none; AllowPublicKeyRetrieval=true; Allow User Variables=true;"; //added allowpublic...
        static MySqlConnection conn = new MySqlConnection(connectionstring);

        //public string Index()
        //{
         //   return "This is my default action...";
        //}

        public ActionResult Index()
        {
             return View();
        }

        // 
        // GET: /HelloWorld/Register/ 

        
  

        [HttpPost]
        public ActionResult Register([FromBody] UserViewModel dataIn)
        {
          Console.WriteLine("Connect to MySql Database. \n");
                  
         // return Json(new {dataIn, DateTime = DateTime.Now.ToShortDateString() });
        
           // using (conn)
            {
                try
                {
                    conn.Open();
                    MySqlCommand command =  conn.CreateCommand();
                    command.CommandType=System.Data.CommandType.Text;
                   
                   /* command.CommandText="Select * from userlogin";

                    MySqlDataReader reader = command.ExecuteReader();
                
                    var data=""; 

                   
                    if (reader.HasRows)
                    {
                        while(reader.Read())
                        {
                            data = data + reader.GetInt32("userID") + "\t" + reader.GetString("firstname") + "\t" + reader.GetString("lastname") + "\t" + reader.GetString("email") + "\t" + reader.GetString("pass") +"\n";
                        }
                        Console.WriteLine(data);
                    }
                    else{
                    Console.WriteLine("No records found in the table");
                    }
                    */

                    string fname = dataIn.fname; 
                    string lname = dataIn.lname; 
                    string email = dataIn.email;  
                    string password = dataIn.password;  
                   // reader.Close();
                    command.CommandText=$"Insert into userlogin (firstname, lastname, email, pass) values('{fname}','{lname}','{email}','{password}');";
                    MySqlDataReader reader = command.ExecuteReader();
                    reader.Close();
                    conn.Close();
                    System.Console.WriteLine("Connection is : " + conn.State.ToString() + Environment.NewLine);
                    return StatusCode(200);
                }catch(MySql.Data.MySqlClient.MySqlException ex){
                    System.Console.WriteLine("Error: " + ex.Message.ToString());
                    conn.Close();
                    System.Console.WriteLine("Connection is : " + conn.State.ToString() + Environment.NewLine);
                    return StatusCode(500);
                }finally {
                    //System.Console.WriteLine("Press any key to Exit...");
                    //
                    //Console.ReadKey();
                }
            }
        }

 [HttpPost]
        public ActionResult Login([FromBody] UserViewModel dataIn)
        {
          Console.WriteLine("Connect to MySql Database. \n");
                  
         // return Json(new {dataIn, DateTime = DateTime.Now.ToShortDateString() });
        
           // using (conn)
            {
                try
                {
                    conn.Open();
                    MySqlCommand command =  conn.CreateCommand();
                    command.CommandType=System.Data.CommandType.Text;
                    string email = dataIn.email;
                    string password = dataIn.password; 
                    command.CommandText=$"SELECT email,pass from userlogin where email = '{email}' and pass = '{password}'";

                    MySqlDataReader reader = command.ExecuteReader();
                
                                       
                    if (reader.HasRows)
                    {
                         Console.WriteLine("User and password found");
                    }
                    else{
                        
                        Console.WriteLine("The user and password combination does not exist");
                        reader.Close();
                        conn.Close();
                        System.Console.WriteLine("Connection is : " + conn.State.ToString() + Environment.NewLine);
                        return StatusCode(500);
                    }

                    reader.Close();
                    conn.Close();
                    System.Console.WriteLine("Connection is : " + conn.State.ToString() + Environment.NewLine);
                    return StatusCode(200);
                }catch(MySql.Data.MySqlClient.MySqlException ex){
                    System.Console.WriteLine("Error: " + ex.Message.ToString());
                    conn.Close();
                    System.Console.WriteLine("Connection is : " + conn.State.ToString() + Environment.NewLine);
                    return StatusCode(500);
                }finally {
                    //System.Console.WriteLine("Press any key to Exit...");
                    //
                    //Console.ReadKey();
                }
            }
        }

    }
}