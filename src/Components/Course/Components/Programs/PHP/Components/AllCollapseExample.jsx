import Accordion from 'react-bootstrap/Accordion';
import Button from './Button';
import {
  Chapter1, Chapter2, Chapter3, Chapter4, Chapter5, Chapter6, Chapter7, Chapter8, Chapter9,
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
        <Accordion.Header>Introduction to Web Applications</Accordion.Header>
        <Accordion.Body>
          {
            Chapter1.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>PHP Basics</Accordion.Header>
        <Accordion.Body>
          {
            Chapter2.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Control Structures</Accordion.Header>
        <Accordion.Body>
          {
            Chapter3.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Functions</Accordion.Header>
        <Accordion.Body>
        {
            Chapter4.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>String Handling</Accordion.Header>
        <Accordion.Body>
        {
            Chapter5.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Arrays</Accordion.Header>
        <Accordion.Body>
        {
            Chapter6.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Integrating Php and Database</Accordion.Header>
        <Accordion.Body>
        {
            Chapter7.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Maintaining user state</Accordion.Header>
        <Accordion.Body>
        {
            Chapter8.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>Working with file system</Accordion.Header>
        <Accordion.Body>
        {
            Chapter9.map(displayBtn)
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;