import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program92() {

    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>

            <div className="container-fluid">
                {/* <div className="row bg- dark text-white" style={{width:"100vw", height:"10vh"}}>
                    
                </div> */}

                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>92. Write a Java program to add two matrices of the same size.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AddMatrices &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[][] firstMatrix = &#123;&#123;1, 2, 3&#125;, &#123;4, 5, 6&#125;, &#123;7, 8, 9&#125;&#125;;<br />
                                int[][] secondMatrix = &#123;&#123;9, 8, 7&#125;, &#123;6, 5, 4&#125;, &#123;3, 2, 1&#125;&#125;;<br />
                                int[][] sum = new int[3][3];<br />

                                for (int i = 0; i &lt; firstMatrix.length; i++) &#123;<br />
                                for (int j = 0; j &lt; firstMatrix[i].length; j++) &#123;<br />
                                sum[i][j] = firstMatrix[i][j] + secondMatrix[i][j];<br />
                                &#125;<br />
                                &#125;<br />

                                System.out.println("The sum of the two matrices is:");<br />
                                for (int[] row : sum) &#123;<br />
                                for (int element : row) &#123;<br />
                                System.out.print(element + " ");<br />
                                &#125;<br />
                                System.out.println();<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;

                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Sum of Two numbers: 7
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}