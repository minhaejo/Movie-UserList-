
import './App.css';

import React from "react";
import Navbar from './components/Navbar';
import routes from './routes';
import {BrowserRouter as Router ,
   Switch ,
    Route
    } from "react-router-dom"

 
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='container'>
      <Switch>
        {routes.map(route=>{
          return(
          <Route 
            key={route.path} 
            path={route.path}
            exact
           >
          <route.component />
         </Route>
          )
        })}
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//아이디 인풋 
//비번 인풋 
//버ㅌ
  // useEffect(()=>{
  //   console.log(count)
  //   },[count,kossie]) //[count]가 변경될때만 랜더링할때 유즈이펙트 함수 실행 count,kossie 두 부분 바뀔때마다 각각이라 
  //   //하나씩 바뀌어도 안에 함수 실행됨
  //   useEffect(()=>{
  //     console.log("first rendering")
  
  //   },[]) //한번만 실행하도록 제어하기 빈배열넣기 
    
  // 


    //스테이트일때 랜더링이 되기 때문에 유즈이펙트 안에 콘솔먹음
  //밑에 배열은 스테이트가 아니기 때문에 랜더링 x