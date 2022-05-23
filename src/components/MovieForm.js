import React,{useState} from "react";
import InputField from "./InputField";

const MovieForm = ({addMovie}) =>{
    const [movieTitle,setMovieTitle] = useState("")
  const [movieYear,setMovieYear] = useState("")
  const [titleError,setTitleError] = useState("")
  const [yearError,setYearError] = useState("")
 

  //스테이트일때 랜더링이 되기 때문에 유즈이펙트 안에 콘솔먹음
  //밑에 배열은 스테이트가 아니기 때문에 랜더링 x
 
  const resetForm =(()=>{
    setMovieTitle("")
    setMovieYear("")
  })

  const validateForm = () => {
      let validated =true; //초기값
      if (!movieTitle) {
          //무비타이틀 없을때
        setTitleError("영화제목을 넣어주세요")
        validated =false
      }
      if (!movieYear) {
          //무비 이어 없을때 
        setYearError("개봉년도를 넣어주세요")
        validated =false
        //반대로 바꿔서 조건문 써먹으려고 하는행동임
    }

      return validated
  }

  const resetErrors = () =>{
    setTitleError("")
    setYearError("")
  }

 const onSubmit =((event)=>{
   event.preventDefault()
   if (validateForm()) {
       //if안에 validateFrom넣는이유 얘가 트루로써 성공했을때 
    addMovie({
        id: Date.now(),  
        title:movieTitle,
        year:movieYear
       })
       resetErrors()
       resetForm()
   }
 })
  return (
      <form onSubmit={onSubmit}>
          <InputField 
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e =>{
              setMovieTitle(e.target.value)
          }}
          errorMessage={titleError}
          />

        {/* <input className='input_title'
         type="text" 
         placeholder="영화제목" 
         value={movieTitle} 
          onChange={(e)=>{
       setMovieTitle(e.target.value)
        }}/>
        <br />
        <div style={{color:"red"}}>{titleError}</div> */}
          <InputField 
          type="number"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e =>{
              setMovieYear(e.target.value)
          }}
          errorMessage={yearError}
          />

        {/* <input className='input_year'
         type="number"
          placeholder="개봉년도"
           value={movieYear} 
           onChange={(e)=>{
       setMovieYear(e.target.value)
        }}/>
        <br />
        <div style={{color:"red" }}>{yearError}</div> */}
      <button className='addbtn' type='submit'>영화추가</button>
      </form>
  
  );

}
export default MovieForm