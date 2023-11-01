import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java29() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Thread</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>What is Thread?</p>
                           <p>A thread is a lightweight subprocess, the smallest unit of processing. It is a separate path of execution.</p>
                           <p>Threads are independent. If there occurs exception in one thread, it doesn't affect other threads. It uses a shared memory area.</p>

                           <p>Thread class</p>
                           <p>Java provides Thread class to achieve thread programming. Thread class provides constructors and methods to create and perform operations on a thread. Thread class extends Object class and implements Runnable interface.</p>

                           <p>Thread Methods</p>
                           <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Modifier and Type</th>
                                    <th>Method</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>void</td>
                                    <td>start()</td>
                                    <td>It is used to start the execution of the thread.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>void</td>
                                    <td>run()</td>
                                    <td>It is used to do an action for a thread.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>static void</td>
                                    <td>sleep()</td>
                                    <td>It sleeps a thread for the specified amount of time.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>static Thread</td>
                                    <td>currentThread()</td>
                                    <td>	It returns a reference to the currently executing thread object.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>void</td>
                                    <td>join()</td>
                                    <td>It waits for a thread to die.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>int</td>
                                    <td>getPriority()</td>
                                    <td>	It returns the priority of the thread.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>void</td>
                                    <td>setPriority()</td>
                                    <td>It changes the priority of the thread.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>String</td>
                                    <td>getName()</td>
                                    <td>It returns the name of the thread.</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>void</td>
                                    <td>setName()</td>
                                    <td>It changes the name of the thread.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>long</td>
                                    <td>getId()</td>
                                    <td>It returns the id of the thread.</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>boolean</td>
                                    <td>isAlive()</td>
                                    <td>It tests if the thread is alive.</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>static void</td>
                                    <td>yield()</td>
                                    <td>It causes the currently executing thread object to pause and allow other threads to execute temporarily.</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>void</td>
                                    <td>suspend()</td>
                                    <td>It is used to suspend the thread.</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>void</td>
                                    <td>resume()</td>
                                    <td>It is used to resume the suspended thread.</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>void</td>
                                    <td>stop()</td>
                                    <td>It is used to stop the thread.</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>void</td>
                                    <td>destroy()</td>
                                    <td>It is used to destroy the thread group and all of its subgroups.</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>boolean</td>
                                    <td>isDaemon()</td>
                                    <td>It tests if the thread is a daemon thread.</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>void</td>
                                    <td>	setDaemon()</td>
                                    <td>It marks the thread as daemon or user thread.</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>void</td>
                                    <td>interrupt()</td>
                                    <td>It interrupts the thread.</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>boolean</td>
                                    <td>isinterrupted()</td>
                                    <td>	It tests whether the thread has been interrupted.</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>static boolean</td>
                                    <td>interrupted()</td>
                                    <td>It tests whether the current thread has been interrupted.</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>static int</td>
                                    <td>activeCount()</td>
                                    <td>It returns the number of active threads in the current thread's thread group.</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>void</td>
                                    <td>checkAccess()</td>
                                    <td>It determines if the currently running thread has permission to modify the thread.</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>	static boolean</td>
                                    <td>holdLock()</td>
                                    <td>It returns true if and only if the current thread holds the monitor lock on the specified object.</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>static void</td>
                                    <td>dumpStack()</td>
                                    <td>It is used to print a stack trace of the current thread to the standard error stream.</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>StackTraceElement[]</td>
                                    <td>getStackTrace()</td>
                                    <td>It returns an array of stack trace elements representing the stack dump of the thread.</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>static int</td>
                                    <td>enumerate()</td>
                                    <td>It is used to copy every active thread's thread group and its subgroup into the specified array</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>Thread.State</td>
                                    <td>getState()</td>
                                    <td>It is used to return the state of the thread.</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>ThreadGroup</td>
                                    <td>getThreadGroup()</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>String</td>
                                    <td>toString()</td>
                                    <td>It is used to return a string representation of this thread, including the thread's name, priority, and thread group.</td>
                                </tr>
                                <tr>
                                    <td>31</td>
                                    <td>void</td>
                                    <td>notify()</td>
                                    <td>It is used to give the notification for only one thread which is waiting for a particular object.</td>
                                </tr>
                                <tr>
                                    <td>32</td>
                                    <td>void</td>
                                    <td>notifyAll()</td>
                                    <td>It is used to give the notification to all waiting threads of a particular object.</td>
                                </tr>
                                <tr>
                                    <td>33</td>
                                    <td>void</td>
                                    <td>setContextClassLoader()</td>
                                    <td>It sets the context ClassLoader for the Thread.</td>
                                </tr>
                                <tr>
                                    <td>34</td>
                                    <td>ClassLoader</td>
                                    <td>getContextClassLoader()</td>
                                    <td>It returns the context ClassLoader for the thread</td>
                                </tr>
                                <tr>
                                    <td>35</td>
                                    <td>static Thread.UncaughtExceptionHandler</td>
                                    <td>getDefaultUncaughtExceptionHandler()</td>
                                    <td>It returns the default handler invoked when a thread abruptly terminates due to an uncaught exception.</td>
                                </tr>
                                <tr>
                                    <td>36</td>
                                    <td>static void</td>
                                    <td>setDefaultUncaughtExceptionHandler()</td>
                                    <td>It sets the default handler invoked when a thread abruptly terminates due to an uncaught exception.</td>
                                </tr>
                            </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}