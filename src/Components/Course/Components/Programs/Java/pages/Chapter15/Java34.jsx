import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java34() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>JDBC</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>JDBC stands for Java Database Connectivity. JDBC is a Java API to connect and execute the query with the database. It is a part of JavaSE (Java Standard Edition). JDBC API uses JDBC drivers to connect with the database. There are four types of JDBC drivers:</p>

                           <ul>
                            <li>JDBC-ODBC Bridge Driver,</li>
                            <li>Native Driver,</li>
                            <li>Network Protocol Driver, and</li>
                            <li>Thin Driver</li>
                           </ul>

                           <p>We have discussed the above four drivers in the next chapter.</p>
                           <p>We can use JDBC API to access tabular data stored in any relational database. By the help of JDBC API, we can save, update, delete and fetch data from the database. It is like Open Database Connectivity (ODBC) provided by Microsoft.</p>
                           {/* img */}
                           <p>The current version of JDBC is 4.3. It is the stable release since 21st September, 2017. It is based on the X/Open SQL Call Level Interface. The java.sql package contains classes and interfaces for JDBC API. A list of popular interfaces of JDBC API are given below:</p>
                           <ul>
                            <li>Driver interface</li>
                            <li>Connection interface</li>
                            <li>Statement interface</li>
                            <li>PreparedStatement interface</li>
                            <li>CallableStatement interface</li>
                            <li>ResultSetMetaData interface</li>
                            <li>DatabaseMetaData interface</li>
                            <li>RowSet interface</li>
                            <li>ResultSet interface</li>
                           </ul>

                           <p>A list of popular classes of JDBC API are given below:</p>
                           <ul>
                            <li>DriverManager class</li>
                            <li>Blob class</li>
                            <li>Clob class</li>
                            <li>Types class</li>
                           </ul>


                           <p>Why Should We Use JDBC</p>
                           <p>Before JDBC, ODBC API was the database API to connect and execute the query with the database. But, ODBC API uses ODBC driver which is written in C language (i.e. platform dependent and unsecured). That is why Java has defined its own API (JDBC API) that uses JDBC drivers (written in Java language).</p>
                           <p>We can use JDBC API to handle database using Java program and can perform the following activities:</p>
                           <ol>
                            <li>Connect to the database</li>
                            <li>Execute queries and update statements to the database</li>
                            <li>Retrieve the result received from the database.</li>
                           </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}