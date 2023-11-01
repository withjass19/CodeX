import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program103() {

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
                            <p className='fs-5 fw-semibold'>103. Write a Java Program to Display Transpose Matrix.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class TransposeMatrix &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />

                                System.out.print("Enter the number of rows: ");<br />
                                int rows = scanner.nextInt();<br />

                                System.out.print("Enter the number of columns: ");<br />
                                int columns = scanner.nextInt();<br />

                                int[][] matrix = new int[rows][columns];<br />

                                System.out.println("Enter the elements of the matrix:");<br />
                                for (int i = 0; i &lt; rows; i++) &#123;<br />
                                for (int j = 0; j &lt; columns; j++) &#123;<br />
                                matrix[i][j] = scanner.nextInt();<br />
                                &#125;<br />
                                &#125;<br />

                                int[][] transpose = new int[columns][rows];<br />

                                for (int i = 0; i &lt; rows; i++) &#123;<br />
                                for (int j = 0; j &lt; columns; j++) &#123;<br />
                                transpose[j][i] = matrix[i][j];<br />
                                &#125;<br />
                                &#125;<br />

                                System.out.println("Original Matrix:");<br />
                                displayMatrix(matrix);<br />

                                System.out.println("Transpose Matrix:");<br />
                                displayMatrix(transpose);<br />

                                scanner.close();<br />
                                &#125;<br />
                                public static void displayMatrix(int[][] matrix) &#123;<br />
                                for (int[] row : matrix) &#123;<br />
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