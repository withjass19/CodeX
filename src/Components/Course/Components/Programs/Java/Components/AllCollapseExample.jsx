import Accordion from 'react-bootstrap/Accordion';
import Button from './Button';
import {
  IntroData, Chapter2, Chapter3, Chapter4, Chapter5, Chapter6, Chapter7, Chapter8, Chapter9, Chapter10, Chapter11, Chapter12, Chapter13, Chapter14, Chapter15
} from './BtnData'

function displayBtn(val){
  return(
    <div>
      <Button topic={val.topic}  link={val.link}/>
    </div>
  )
}

function AllCollapseExample() {
  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction</Accordion.Header>
        <Accordion.Body>
          {
            IntroData.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Preparing and running a Java program</Accordion.Header>
        <Accordion.Body>
          {
            Chapter2.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Java Fundamentals</Accordion.Header>
        <Accordion.Body>
          {
            Chapter3.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Control Structure</Accordion.Header>
        <Accordion.Body>
        {
            Chapter4.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Classes, Objects and Methods</Accordion.Header>
        <Accordion.Body>
        {
            Chapter5.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Arrays and Strings</Accordion.Header>
        <Accordion.Body>
        {
            Chapter6.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Inheritance</Accordion.Header>
        <Accordion.Body>
        {
            Chapter7.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Packages</Accordion.Header>
        <Accordion.Body>
        {
            Chapter8.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>Exception handling</Accordion.Header>
        <Accordion.Body>
        {
            Chapter9.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Threads</Accordion.Header>
        <Accordion.Body>
        {
            Chapter10.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>Input/ Output in Java</Accordion.Header>
        <Accordion.Body>
        {
            Chapter11.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="11">
        <Accordion.Header>Creating GUI applications using AWT</Accordion.Header>
        <Accordion.Body>
        {
            Chapter12.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="12">
        <Accordion.Header>Event Handling</Accordion.Header>
        <Accordion.Body>
        {
            Chapter13.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header>Java Applets</Accordion.Header>
        <Accordion.Body>
        {
            Chapter14.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="14">
        <Accordion.Header>JDBC</Accordion.Header>
        <Accordion.Body>
        {
            Chapter15.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;