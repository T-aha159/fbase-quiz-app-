import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { setUserId } from 'firebase/analytics'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom'
import { checkUser, sendData } from '../firebase/firebasemethod'



const Home = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore]= useState(0)
    const [showScore, setShowScore] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
   

    let questions = [
        {
            Question: "Html Stands For _______________________",
           AnswerTex:[
           {Answer:"Hyper Text Makeup Language", isCorrect: false},
            {Answer:"html", isCorrect: false},
            {Answer:"Case Cading Style Sheet", isCorrect: false},
            {Answer:"Hypertext markup language", isCorrect: true}
           ]
        },
        {
            Question: 'Css Stands For _______________________',
            AnswerTex:[
                {Answer:"Casecading Style Sheet", isCorrect: true},
                {Answer:"Java", isCorrect: false},
                {Answer:"Hypertext markup language", isCorrect: false},
                {Answer:"RAM", isCorrect: false},
               ]
        },
        {
            Question: 'Js Stands For _______________________',
            AnswerTex:[
                {Answer:"HTML", isCorrect: false},
                {Answer:"CSS", isCorrect: false},
                {Answer:"Document Object Model", isCorrect: true},
                {Answer:"JAVA", isCorrect: false},
               ]
        },
        {
            Question: 'Ram Stands For ______________________',
            AnswerTex:[
                {Answer:"Tead only memory", isCorrect: false},
                {Answer:"Dom", isCorrect: false},
                {Answer:"Random Acccess Memory", isCorrect: true},
                {Answer:"For PC", isCorrect: false},
               ]
        },
        {
            Question: 'Rom Stands For _______________________',
            AnswerTex:[
                {Answer:"Dom", isCorrect: false},
                {Answer:"Ramdom Access Memory", isCorrect: false},
                {Answer:"Read Only Memory", isCorrect: true},
                {Answer:"For PC", isCorrect: false},
               ]
        },
      
    ]


    const handleAnswerResponse=(isCorrect)=>{
        if (isCorrect) {
            setScore(score+1)
            
        }

        const nextQuestion = currentQuestion+1;

        if (nextQuestion<questions.length) {
            setCurrentQuestion(nextQuestion)
            sendData({
                score: score,
                currentQuestion: currentQuestion,
                isCorrect: isCorrect,
              }, `answers/${currentQuestion}`).then((currentQuestion) => {
                console.log(currentQuestion)
              }).catch((err) => {
                console.log(err)
              })
        }else{
            setShowScore(true)
        }
    }

    const resetQuiz=()=>{
        window.location.reload(true)
    }


    //firebase methods

    useEffect(() => {
        checkUser().then((res) => {
          console.log(res)
          if (params.id == res) {
            setUserId(res);
      
    
          } else {
        
          }
        }).catch((err) => {
          console.log(err)
        })
      }, [])
    

  return (
    <>
    <Box className='sec01'>
        <Box >
<Box className='sec1'>
    <Box className='sec2'>


    
    {showScore?(
        <div>
            <div>

            You have score {score} out of {questions.length}
            </div>
            <div>
            <Button variant="contained" className='button' onClick={resetQuiz}>Play Again</Button>
            
            </div>
        </div>
    )
    :(
        <>
        <div className=''>
            <h1 className='question'>
                {questions[currentQuestion].Question} 
            </h1>
            <div className='Qindex'>
                <span>
                  Questions {currentQuestion} of {questions.length}
                </span>
            </div>
        </div>
        <div className=''>
            <Box sx={{mt:5}}>

            {questions[currentQuestion].AnswerTex.map((answer)=>
            (
                <Box className='answer' onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</Box>
                ))}
                </Box>
        </div>

        </>
    )}
    </Box>
    </Box>
    </Box>
    </Box>
    </>
  )
}

export default Home