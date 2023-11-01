// import logo from './logo.svg';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {BrowserRouter, Router,Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/Contact/Contact';
import Course from './Components/Course/Course';
import Chapter1 from './Components/Course/Components/Programs/Java/pages/Chapter1';
import Java from './Components/Course/Components/Programs/Java/java';
import Java2 from './Components/Course/Components/Programs/Java/pages/Chapter1/Java2';
import Java3 from './Components/Course/Components/Programs/Java/pages/Chapter1/Java3';
import Java4 from './Components/Course/Components/Programs/Java/pages/Chapter1/Java4';
import Java5 from './Components/Course/Components/Programs/Java/pages/Chapter2/Java5';
import PHP from './Components/Course/Components/Programs/PHP/PHP';
import Java7 from './Components/Course/Components/Programs/Java/pages/Chapter2/Java7';
import Java8 from './Components/Course/Components/Programs/Java/pages/Chapter2/Java8';
import Java11 from './Components/Course/Components/Programs/Java/pages/Chapter3/Java11';
import Java12 from './Components/Course/Components/Programs/Java/pages/Chapter3/Java12';
import Java13 from './Components/Course/Components/Programs/Java/pages/Chapter3/Java13';
import Java14 from './Components/Course/Components/Programs/Java/pages/Chapter3/Java14';
import Java15 from './Components/Course/Components/Programs/Java/pages/Chapter3/Java15';
import Java16 from './Components/Course/Components/Programs/Java/pages/Chapter4/Java16';
import Java17 from './Components/Course/Components/Programs/Java/pages/Chapter4/Java17';
import Java18 from './Components/Course/Components/Programs/Java/pages/Chapter4/Java18';
import Coming from './Components/error/Coming';
import Java19 from './Components/Course/Components/Programs/Java/pages/Chapter5/Java19';
import Java20 from './Components/Course/Components/Programs/Java/pages/Chapter5/Java20';
import Java21 from './Components/Course/Components/Programs/Java/pages/Chapter5/Java21';
import Java22 from './Components/Course/Components/Programs/Java/pages/Chapter5/Java22';
import Java23 from './Components/Course/Components/Programs/Java/pages/Chapter5/Java23';
import Java24 from './Components/Course/Components/Programs/Java/pages/Chapter6/Java24';
import Java25 from './Components/Course/Components/Programs/Java/pages/Chapter6/Java25';
import Java26 from './Components/Course/Components/Programs/Java/pages/Chapter7/Java26';
import Java27 from './Components/Course/Components/Programs/Java/pages/Chapter8/Java27';
import Java28 from './Components/Course/Components/Programs/Java/pages/Chapter9/Java28';
import Java29 from './Components/Course/Components/Programs/Java/pages/Chapter10/Java29';
import Java30 from './Components/Course/Components/Programs/Java/pages/Chapter11/Java30';
import Java31 from './Components/Course/Components/Programs/Java/pages/Chapter12/Java31';
import Java32 from './Components/Course/Components/Programs/Java/pages/Chapter13/Java32';
import Java33 from './Components/Course/Components/Programs/Java/pages/Chapter14/Java33';
import Java34 from './Components/Course/Components/Programs/Java/pages/Chapter15/Java34';
import Error4 from './Components/error/Error4';
// import Compiler from './Components/Course/Components/Programs/Java/Components/Compiler';
import Program1 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program1';
import Program2 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program2';
import Program3 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program3';
import Program4 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program4';
import Program5 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program5';
import Program6 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program6';
import Program7 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program7';
import Program8 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program8';
import Program9 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program9';
import Program10 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program10';
import Program12 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program12';
import Program13 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program13';
import Program14 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program14';
import Program15 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program15';
import Program16 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program16';
import Program17 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program17';
import Program18 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program18';
import Program19 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program19';
import Program20 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program20';
import Program21 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program21';
import Program22 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program22';
import Program23 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program23';
import Program24 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program24';
import Program26 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program26';
import Program27 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program27';
import Program28 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program28';
import Program29 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program29';
import Program30 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program30';
import Program31 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program31';
import Program32 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program32';
import Program33 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program33';
import Program34 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program34';
import Program35 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program35';
import Program36 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program36';
import Program37 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program37';
import Program38 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program38';
import Program39 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program39';
import Program40 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program40';
import Program41 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program41';
import Program42 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program42';
import Program43 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program43';
import Program44 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program44';
import Program45 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program45';
import Program46 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program46';
import Program47 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program47';
import Program48 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program48';
import Program49 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program49';
import Program50 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program50';
import Program51 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program51';
import Program52 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program52';
import Program53 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program53';
import Program54 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program54';
import Program55 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program55';
import Program56 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program56';
import Program57 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program57';
import Program58 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program58';
import Program60 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program60';
import Program61 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program61';
import Program62 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program62';
import Program63 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program63';
import Program64 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program64';
import Program65 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program65';
import Program67 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program67';
import Program68 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program68';
import Program69 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program69';
import Program70 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program70';
import Program71 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program71';
import Program72 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program72';
import Program73 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program73';
import Program74 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program74';
import Program75 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program75';
import Program76 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program76';
import Program78 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program78';
import Program77 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program77';
import Program79 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program79';
import Program81 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program81';
import Program82 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program82';
import Program83 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program83';
import Program84 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program84';
import Program85 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program85';
import Program86 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program86';
import Program87 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program87';
import Program88 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program88';
import Program89 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program89';
import Program90 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program90';
import Program91 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program91';
import Program92 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program92';
import Program93 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program93';
import Program94 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program94';
import Program95 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program95';
import Program96 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program96';
import Program97 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program97';
import Program98 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program98';
import Program99 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program99';
import Program100 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program100';
import Program101 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program101';
import Program102 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program102';
import Program103 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program103';
import Program104 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program104';
import Program105 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program105';
import Program106 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program106';
import Program107 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program107';
import Program109 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program109';
import Program110 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program110';
import Program113 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program113';
import Program115 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program115';
import Program116 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program116';
import Program117 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program117';
import Program118 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program118';
import Program120 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program120';
import Program121 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program121';
import Program122 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program122';
import Program123 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program123';
import Program127 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program127';
import Program128 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program128';
import Program130 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program130';
import Program131 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program131';
import Program132 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program132';
import Program133 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program133';
import Program134 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program134';
import Program135 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program135';
import Program136 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program136';
import Program137 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program137';
import Program138 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program138';
import Program139 from './Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program139';
// import Error404 from './Components/error/error404';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        

        <Route path='/' element={<Home/>} />
        
        <Route path='/about' element={<About/>} />

        {/* Courses */}
        <Route path='/courses' element={<Course/>}/>
        <Route path="/courses/java" element={<Java/>} />
        <Route path='/courses/java/intro' element={<Chapter1/>} />
        <Route path='/courses/java/features-of-java' element={<Java2/>} />
        <Route path='/courses/java/Java-Development-Kit' element={<Java3/>} />
        <Route path='/courses/java/Applications-of-Java' element={<Java4/>}/>
        <Route path='/courses/java/Structure-of-Java-Program' element={<Java5/>} />
        <Route path='/courses/java/Java-Virtual-Machine' element={<Java7/>} />
        <Route path='/courses/java/Bytecode' element={<Java8/>} />
        <Route path='/courses/java/variables' element={<Java11/>} />
        <Route path='/courses/java/Data-Types' element={<Java12/>} />
        <Route path='/courses/java/Type-Casting' element={<Java13/>} />
        <Route path='/courses/java/Operators' element={<Java14/>} />
        <Route path='/courses/java/Mathematical-functions' element={<Java15/>} />
        <Route path='/courses/java/if-else-statements' element={<Java16/>} />
        <Route path='/courses/java/switch-statement' element={<Java17/>} />
        <Route path='/courses/java/loops' element={<Java18/>} />
        <Route path='/courses/java/OOPs-concepts' element={<Java19/>} />
        <Route path='/courses/java/objext-and-class' element={<Java20/>} />
        <Route path='/courses/java/methods' element={<Java21/>} />
        <Route path='/courses/java/constructors' element={<Java22/>} />
        <Route path='/courses/java/method-overloading-and-Overriding' element={<Java23/>} />
        <Route path='/courses/java/arrays' element={<Java24/>} />
        <Route path='/courses/java/strings' element={<Java25/>} />
        <Route path='/courses/java/inheritance' element={<Java26/>} />
        <Route path='/courses/java/packages' element={<Java27/>} />
        <Route path='/courses/java/exception-handling' element={<Java28/>} />
        <Route path='/courses/java/threads' element={<Java29/>} />
        <Route path='/courses/java/input-output' element={<Java30/>} />
        <Route path='/courses/java/awt' element={<Java31/>} />
        <Route path='/courses/java/event-handling' element={<Java32/>} />
        <Route path='/courses/java/applets' element={<Java33/>} />
        <Route path='/courses/java/jdbc' element={<Java34/>} />

        <Route path='/courses/java/programs/program1' element={<Program1/>} />
        <Route path='/courses/java/programs/program2' element={<Program2/>} />
        <Route path='/courses/java/programs/program3' element={<Program3/>} />
        <Route path='/courses/java/programs/program4' element={<Program4/>} />
        <Route path='/courses/java/programs/program5' element={<Program5/>} />
        <Route path='/courses/java/programs/program6' element={<Program6/>} />
        <Route path='/courses/java/programs/program7' element={<Program7/>} />
        <Route path='/courses/java/programs/program8' element={<Program8/>} />
        <Route path='/courses/java/programs/program9' element={<Program9/>} />
        <Route path='/courses/java/programs/program10' element={<Program10/>} />
        {/* <Route path='/courses/java/programs/program11' element={<Program11/>} /> */}
        <Route path='/courses/java/programs/program12' element={<Program12/>} />
        <Route path='/courses/java/programs/program13' element={<Program13/>} />
        <Route path='/courses/java/programs/program14' element={<Program14/>} />
        <Route path='/courses/java/programs/program15' element={<Program15/>} />
        <Route path='/courses/java/programs/program16' element={<Program16/>} />
        <Route path='/courses/java/programs/program17' element={<Program17/>} />
        <Route path='/courses/java/programs/program18' element={<Program18/>} />
        <Route path='/courses/java/programs/program19' element={<Program19/>} />
        <Route path='/courses/java/programs/program20' element={<Program20/>} />
        <Route path='/courses/java/programs/program21' element={<Program21/>} />
        <Route path='/courses/java/programs/program22' element={<Program22/>} />
        <Route path='/courses/java/programs/program23' element={<Program23/>} />
        <Route path='/courses/java/programs/program24' element={<Program24/>} />
        {/* <Route path='/courses/java/programs/program25' element={} /> */}
        <Route path='/courses/java/programs/program26' element={<Program26/>} />
        <Route path='/courses/java/programs/program27' element={<Program27/>} />
        <Route path='/courses/java/programs/program28' element={<Program28/>} />
        <Route path='/courses/java/programs/program29' element={<Program29/>} />
        <Route path='/courses/java/programs/program30' element={<Program30/>} />
        <Route path='/courses/java/programs/program31' element={<Program31/>} />
        <Route path='/courses/java/programs/program32' element={<Program32/>} />
        <Route path='/courses/java/programs/program33' element={<Program33/>} />
        <Route path='/courses/java/programs/program34' element={<Program34/>} />
        <Route path='/courses/java/programs/program36' element={<Program35/>} />
        <Route path='/courses/java/programs/program36' element={<Program36/>} />
        <Route path='/courses/java/programs/program37' element={<Program37/>} />
        <Route path='/courses/java/programs/program38' element={<Program38/>} />
        <Route path='/courses/java/programs/program39' element={<Program39/>} />
        <Route path='/courses/java/programs/program40' element={<Program40/>} />
        <Route path='/courses/java/programs/program41' element={<Program41/>} />
        <Route path='/courses/java/programs/program42' element={<Program42/>} />
        <Route path='/courses/java/programs/program43' element={<Program43/>} /> 
        <Route path='/courses/java/programs/program44' element={<Program44/>} />
        <Route path='/courses/java/programs/program45' element={<Program45/>} />
        <Route path='/courses/java/programs/program46' element={<Program46/>} />
        <Route path='/courses/java/programs/program47' element={<Program47/>} />
        <Route path='/courses/java/programs/program48' element={<Program46/>} />
        <Route path='/courses/java/programs/program47' element={<Program47/>} />
        <Route path='/courses/java/programs/program48' element={<Program48/>} />
        <Route path='/courses/java/programs/progra49' element={<Program49/>} />
        <Route path='/courses/java/programs/program50' element={<Program50/>} />
        <Route path='/courses/java/programs/program51' element={<Program51/>} />
        <Route path='/courses/java/programs/program52' element={<Program52/>} />
        <Route path='/courses/java/programs/program53' element={<Program53/>} />
        <Route path='/courses/java/programs/program54' element={<Program54/>} />
        <Route path='/courses/java/programs/program55' element={<Program55/>} />
        <Route path='/courses/java/programs/program56' element={<Program56/>} />
        <Route path='/courses/java/programs/program57' element={<Program57/>} />
        <Route path='/courses/java/programs/program58' element={<Program58/>} />
        {/* <Route path='/courses/java/programs/program59' element={} /> */}
        <Route path='/courses/java/programs/program60' element={<Program60/>} />
        <Route path='/courses/java/programs/program61' element={<Program61/>} />
        <Route path='/courses/java/programs/program62' element={<Program62/>} />
        <Route path='/courses/java/programs/program63' element={<Program63/>} />
        <Route path='/courses/java/programs/program64' element={<Program64/>} />
        <Route path='/courses/java/programs/program65' element={<Program65/>} />
        {/* <Route path='/courses/java/programs/program66' element={} /> */}
        <Route path='/courses/java/programs/program67' element={<Program67/>} />
        <Route path='/courses/java/programs/program68' element={<Program68/>} />
        <Route path='/courses/java/programs/program69' element={<Program69/>} />
        <Route path='/courses/java/programs/program70' element={<Program70/>} />
        <Route path='/courses/java/programs/program71' element={<Program71/>} />
        <Route path='/courses/java/programs/program72' element={<Program72/>} />
        <Route path='/courses/java/programs/program73' element={<Program73/>} />
        <Route path='/courses/java/programs/program74' element={<Program74/>} />
        <Route path='/courses/java/programs/program75' element={<Program75/>} />
        <Route path='/courses/java/programs/program76' element={<Program76/>} />
        <Route path='/courses/java/programs/program77' element={<Program77/>} />
        <Route path='/courses/java/programs/program78' element={<Program78/>} />
        <Route path='/courses/java/programs/program79' element={<Program79/>} />
        {/* <Route path='/courses/java/programs/program80' element={} /> */}
        <Route path='/courses/java/programs/program81' element={<Program81/>} />
        <Route path='/courses/java/programs/program82' element={<Program82/>} />
        <Route path='/courses/java/programs/program83' element={<Program83/>} />
        <Route path='/courses/java/programs/program84' element={<Program84/>} />
        <Route path='/courses/java/programs/program85' element={<Program85/>} />
        <Route path='/courses/java/programs/program86' element={<Program86/>} />
        <Route path='/courses/java/programs/program87' element={<Program87/>} />
        <Route path='/courses/java/programs/program88' element={<Program88/>} />
        <Route path='/courses/java/programs/program89' element={<Program89/>} />
        <Route path='/courses/java/programs/program90' element={<Program90/>} />
        <Route path='/courses/java/programs/program91' element={<Program91/>} />
        <Route path='/courses/java/programs/program92' element={<Program92/>} />
        <Route path='/courses/java/programs/program93' element={<Program93/>} />
        <Route path='/courses/java/programs/program94' element={<Program94/>} />
        <Route path='/courses/java/programs/program95' element={<Program95/>} />
        <Route path='/courses/java/programs/program96' element={<Program96/>} />
        <Route path='/courses/java/programs/program97' element={<Program97/>} />
        <Route path='/courses/java/programs/program98' element={<Program98/>} />
        <Route path='/courses/java/programs/program99' element={<Program99/>} />
        <Route path='/courses/java/programs/program100' element={<Program100/>} />
        <Route path='/courses/java/programs/program101' element={<Program101/>} />
        <Route path='/courses/java/programs/program102' element={<Program102/>} />
        <Route path='/courses/java/programs/program103' element={<Program103/>} />
        <Route path='/courses/java/programs/program104' element={<Program104/>} />
        <Route path='/courses/java/programs/program105' element={<Program105/>} />
        <Route path='/courses/java/programs/program106' element={<Program106/>} />
        <Route path='/courses/java/programs/program107' element={<Program107/>} />
        {/* <Route path='/courses/java/programs/program108' element={} /> */}
        <Route path='/courses/java/programs/program109' element={<Program109/>} />
        <Route path='/courses/java/programs/program110' element={<Program110/>} />
        {/* <Route path='/courses/java/programs/program111' element={} /> */}
        {/* <Route path='/courses/java/programs/program112' element={} /> */}
        <Route path='/courses/java/programs/program113' element={<Program113/>} />
        {/* <Route path='/courses/java/programs/program114' element={} /> */}
        <Route path='/courses/java/programs/program115' element={<Program115/>} />
        <Route path='/courses/java/programs/program116' element={<Program116/>} />
        <Route path='/courses/java/programs/program117' element={<Program117/>} />
        <Route path='/courses/java/programs/program118' element={<Program118/>} />
        {/* <Route path='/courses/java/programs/program119' element={} /> */}
        <Route path='/courses/java/programs/program120' element={<Program120/>} />
        <Route path='/courses/java/programs/program121' element={<Program121/>} />
        <Route path='/courses/java/programs/program122' element={<Program122/>} />
        <Route path='/courses/java/programs/program123' element={<Program123/>} />
        {/* <Route path='/courses/java/programs/program124' element={} /> */}
        {/* <Route path='/courses/java/programs/program125' element={} /> */}
        {/* <Route path='/courses/java/programs/program126' element={} /> */}
        <Route path='/courses/java/programs/program127' element={<Program127/>} />
        <Route path='/courses/java/programs/program128' element={<Program128/>} />
        {/* <Route path='/courses/java/programs/program129' element={} /> */}
        <Route path='/courses/java/programs/program130' element={<Program130/>} />
        <Route path='/courses/java/programs/program131' element={<Program131/>} />
        <Route path='/courses/java/programs/program132' element={<Program132/>} />
        <Route path='/courses/java/programs/program133' element={<Program133/>} />
        <Route path='/courses/java/programs/program134' element={<Program134/>} />
        <Route path='/courses/java/programs/program135' element={<Program135/>} />
        <Route path='/courses/java/programs/program136' element={<Program136/>} />
        <Route path='/courses/java/programs/program137' element={<Program137/>} />
        <Route path='/courses/java/programs/program138' element={<Program138/>} />
        <Route path='/courses/java/programs/program139' element={<Program139/>} />
        {/* <Route path='/courses/java/programs/program' element={} /> */}
        
        <Route path='/courses/php' element={<PHP/>} />

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/sign-in' element={<SignIn/>} />

        <Route path='sign-up' element={<SignUp/>} />

        <Route path='/courses/coming-soon' element={<Coming/>} />

        {/* <Route path='/java' element={<Java/>}/> */}
        <Route path='*'  element={<Error4/>}/>
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;
