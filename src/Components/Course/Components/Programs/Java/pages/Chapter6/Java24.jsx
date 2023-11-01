import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java24() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Arrays</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Normally, an array is a collection of similar type of elements which has contiguous memory location.</p>
                            <p>Java array is an object which contains elements of a similar data type. Additionally, The elements of an array are stored in a contiguous memory location. It is a data structure where we store similar elements. We can store only a fixed set of elements in a Java array.</p>
                            <p>Array in Java is index-based, the first element of the array is stored at the 0th index, 2nd element is stored on 1st index and so on.</p>
                            <p>Unlike C/C++, we can get the length of the array using the length member. In C/C++, we need to use the sizeof operator.</p>
                            <p>In Java, array is an object of a dynamically generated class. Java array inherits the Object class, and implements the Serializable as well as Cloneable interfaces. We can store primitive values or objects in an array in Java. Like C/C++, we can also create single dimentional or multidimentional arrays in Java.</p>

                            <p>Advantages</p>
                            <ul>
                                <li>Code Optimization: It makes the code optimized, we can retrieve or sort the data efficiently.</li>
                                <li>Random access: We can get any data located at an index position.</li>
                            </ul>

                            <p>Disadvantages</p>
                            <ul>
                                <li>Size Limit: We can store only the fixed size of elements in the array. It doesn't grow its size at runtime. To solve this problem, collection framework is used in Java which grows automatically.</li>
                            </ul>

                            <p>Types of Arrays</p>
                            <p>There are two types of array.</p>
                            <ul>
                                <li>Single Dimensional Array</li>
                                <li>Multidimensional Array</li>
                            </ul>

                            <p>Single Dimensional Array</p>
                            <p>Synax to Declare an Array</p>
                            <p>datatype[] arr; OR <br />datatype []arr; OR <br />datatype arr[];</p>
                            <p>Instantiation of an Array</p>
                            <p>arrayRefVar = new datatype[size];</p>
                            {/* Example */}



                            <p>Multidimensional Array</p>
                            <p>In such case, data is stored in row and column based index (also known as matrix form).</p>
                            <p>Synax to Declare an Multidimensional Array</p>
                            <p>datatype[][] arr; OR <br />datatype [][]arr; OR <br />datatype arr[][]; OR <br /> dataype []arr[];</p>
                            <p>Instantiation of an Array</p>
                            <p>datatype[][] arr = new datatype[size][size];</p>
                            {/* example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}