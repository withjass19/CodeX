import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java30() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Input/ Output in Java</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>Java I/O (Input and Output) is used to process the input and produce the output.</p>
                           <p>Java uses the concept of a stream to make I/O operation fast. The java.io package contains all the classes required for input and output operations.</p>
                           <p>We can perform file handling in Java by Java I/O API.</p>


                           <p>Stream</p>
                           <p>A stream is a sequence of data. In Java, a stream is composed of bytes. It's called a stream because it is like a stream of water that continues to flow.</p>
                           <p>In Java, 3 streams are created for us automatically. All these streams are attached with the console.</p>
                           <ol>
                            <li>System.out: standard output stream</li>
                            <li>System.in: standard input stream</li>
                            <li>System.err: standard error stream</li>
                           </ol>



                           <p>OutputStream vs InputStream</p>
                           <p>The explanation of OutputStream and InputStream classes are given below:</p>

                           <p>OutputStream</p>
                           <p>Java application uses an output stream to write data to a destination; it may be a file, an array, peripheral device or socket.</p>

                           <p>InputStream</p>
                           <p>Java application uses an input stream to read data from a source; it may be a file, an array, peripheral device or socket.</p>
                           <p>Let's understand the working of Java OutputStream and InputStream by the figure given below.</p>
                           {/* img */}

                           <p>OutputStream class</p>
                           <p>OutputStream class is an abstract class. It is the superclass of all classes representing an output stream of bytes. An output stream accepts output bytes and sends them to some sink.</p>

                           <p>Useful methods of OutputStream</p>
                           <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Method</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>public void write(int)throws IOException</td>
                                    <td>is used to write a byte to the current output stream.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>public void write(byte[])throws IOException</td>
                                    <td>is used to write an array of byte to the current output stream.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>public void flush()throws IOException</td>
                                    <td>flushes the current output stream.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>public void close()throws IOException</td>
                                    <td>is used to close the current output stream.</td>
                                </tr>
                            </tbody>
                           </table>


                           <p>OutputStream Hierarchy</p>
                           {/* img */}


                           <p>InputStream class</p>
                           <p>InputStream class is an abstract class. It is the superclass of all classes representing an input stream of bytes.</p>

                           <p>Useful methods of InputStream</p>
                           <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Method</th>
                                    <th>Discription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>public abstract int read()throws IOException</td>
                                    <td>reads the next byte of data from the input stream. It returns -1 at the end of the file.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>public int available()throws IOException</td>
                                    <td>returns an estimate of the number of bytes that can be read from the current input stream.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>public void close()throws IOException</td>
                                    <td>is used to close the current input stream.</td>
                                </tr>
                            </tbody>
                           </table>


                           <p>InputStream Hierarchy</p>
                           {/* img */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}