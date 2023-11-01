import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java25() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>String</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Strings</p>
                            <p>In Java, string is basically an object that represents sequence of char values. An array of characters works same as Java string. For example:</p>
                            <p>char[] ch = &#123;'x','y','z'&#125;; <br />String s = new String(ch);</p>
                            <p>String s = 'xyz';</p>
                            <p>Java String class provides a lot of methods to perform operations on strings such as compare(), concat(), equals(), split(), length(), replace(), compareTo(), intern(), substring() etc.</p>
                            <p>The java.lang.String class implements Serializable, Comparable and CharSequence interfaces.</p>

                            <p>CharSequence Interface</p>
                            <p>The CharSequence interface is used to represent the sequence of characters. String, StringBuffer and StringBuilder classes implement it. It means, we can create strings in Java by using these three classes.</p>
                            <p>The Java String is immutable which means it cannot be changed. Whenever we change any string, a new instance is created. For mutable strings, you can use StringBuffer and StringBuilder classes.</p>
                            <p>We will discuss immutable string later. Let's first understand what String in Java is and how to create the String object.</p>


                            <p>What is String?</p>
                            <p>Generally, String is a sequence of characters. But in Java, string is an object that represents a sequence of characters. The java.lang.String class is used to create a string object.</p>

                            <p>How to create a String object?</p>
                            <p>There are two ways to create String Object:</p>
                            <ol>
                                <li>By string literal</li>
                                <li>By new keyword</li>
                            </ol>

                            <p>String Literal</p>
                            <p>Java String literal is created by using double quotes.</p>
                            <p>Each time you create a string literal, the JVM checks the "string constant pool" first. If the string already exists in the pool, a reference to the pooled instance is returned. If the string doesn't exist in the pool, a new string instance is created and placed in the pool. For example:</p>
                            <p>String s = "Welcome";</p>
                            <p>In the above example, only one object will be created. Firstly, JVM will not find any string object with the value "Welcome" in string constant pool that is why it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create a new object but will return the reference to the same instance.</p>
                            
                            <p>Why Java uses the concept of String literal?</p>
                            <p>To make Java more memory efficient (because no new objects are created if it exists already in the string constant pool).</p>


                            <p>2. By new Keyword</p>
                            <p>String s = new String("Welcome");</p>
                            <p>In such case, JVM will create a new string object in normal (non-pool) heap memory, and the literal "Welcome" will be placed in the string constant pool. The variable s will refer to the object in a heap (non-pool).</p>

                            {/* Example */}


                            <p>Java String class methods</p>
                            <p>The java.lang.String class provides many useful methods to perform operations on sequence of char values.</p>

                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Method</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <tr>1</tr>
                                        <tr>	char charAt(int index)</tr>
                                        <tr>It returns char value for the particular index</tr>
                                    </tr>
                                    <tr>
                                        <tr>2</tr>
                                        <tr>	int length()</tr>
                                        <tr>It returns string length</tr>
                                    </tr>
                                    <tr>
                                        <tr>3</tr>
                                        <tr>static String format(String format, Object... args)</tr>
                                        <tr>It returns a formatted string.</tr>
                                    </tr>
                                    <tr>
                                        <tr>4</tr>
                                        <tr>static String format(Locale l, String format, Object... args)</tr>
                                        <tr>It returns formatted string with given locale.</tr>
                                    </tr>
                                    <tr>
                                        <tr>5</tr>
                                        <tr>String substring(int beginIndex)</tr>
                                        <tr>It returns substring for given begin index.</tr>
                                    </tr>
                                    <tr>
                                        <tr>6</tr>
                                        <tr>	String substring(int beginIndex, int endIndex)</tr>
                                        <tr>It returns substring for given begin index and end index.</tr>
                                    </tr>
                                    <tr>
                                        <tr>7</tr>
                                        <tr>boolean contains(CharSequence s)</tr>
                                        <tr>It returns true or false after matching the sequence of char value.</tr>
                                    </tr>
                                    <tr>
                                        <tr>8</tr>
                                        <tr>static String join(CharSequence delimiter, CharSequence... elements)</tr>
                                        <tr>It returns a joined string.</tr>
                                    </tr>
                                    <tr>
                                        <tr>9</tr>
                                        <tr>	static String join(CharSequence delimiter, Iterable&lt;? extends CharSequence&gt; elements)</tr>
                                        <tr>It returns a joined string.</tr>
                                    </tr>
                                    <tr>
                                        <tr>10</tr>
                                        <tr>boolean equals(Object another)</tr>
                                        <tr>It checks the equality of string with the given object.</tr>
                                    </tr>
                                    <tr>
                                        <tr>11</tr>
                                        <tr>boolean isEmpty()</tr>
                                        <tr>	It checks if string is empty.</tr>
                                    </tr>
                                    <tr>
                                        <tr>12</tr>
                                        <tr>	String concat(String str)</tr>
                                        <tr>It concatenates the specified string.</tr>
                                    </tr>
                                    <tr>
                                        <tr>13</tr>
                                        <tr>String replace(char old, char new)</tr>
                                        <tr>It replaces all occurrences of the specified char value.</tr>
                                    </tr>
                                    <tr>
                                        <tr>14</tr>
                                        <tr>String replace(CharSequence old, CharSequence new)</tr>
                                        <tr>It replaces all occurrences of the specified CharSequence.</tr>
                                    </tr>
                                    <tr>
                                        <tr>15</tr>
                                        <tr>static String equalsIgnoreCase(String another)</tr>
                                        <tr>It compares another string. It doesn't check case.</tr>
                                    </tr>
                                    <tr>
                                        <tr>16</tr>
                                        <tr>String[] split(String regex)</tr>
                                        <tr>	It returns a split string matching regex.</tr>
                                    </tr>
                                    <tr>
                                        <tr>17</tr>
                                        <tr>String[] split(String regex, int limit)</tr>
                                        <tr>It returns a split string matching regex and limit.</tr>
                                    </tr>
                                    <tr>
                                        <tr>18</tr>
                                        <tr>String intern()</tr>
                                        <tr>It returns an interned string.</tr>
                                    </tr>
                                    <tr>
                                        <tr>19</tr>
                                        <tr>int indexOf(int ch)</tr>
                                        <tr>It returns the specified char value index.</tr>
                                    </tr>
                                    <tr>
                                        <tr>20</tr>
                                        <tr>int indexOf(int ch, int fromIndex)</tr>
                                        <tr>It returns the specified char value index starting with given index.</tr>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}