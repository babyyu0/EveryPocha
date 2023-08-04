"use client"
import { useEffect, useState, useRef } from 'react'
import BoardMap from './../BoardMap.js'
import DiceBox from './../DiceBox.js'
import './../../css/Map.css'
import { styled } from 'styled-components'
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import axios from 'axios'
import { Transition } from 'react-transition-group'

///// 임시 작업중 
/// 해야할 것: 모듈 창 꾸미기, 모듈 자동으로 차차 사라지게 하기
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Apply the opacity here */
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: visibility 0.5s ease-out; */
  `;
  
  const ModalContent = styled.div`
  background-color: white;
  padding: 70px;
  /* transition: visibility 0.5s ease-out; */
  border-radius: 20px;
  `;
  
  
  /////
  
  
  
export default function Board( props ) {
  /* 제정 : 룸에서 시작버튼 눌렀을 시 roomId 전달 */
  const info = JSON.parse(props.searchParams.roomInfo)
  
  let [roomId, setRoomId] = useState(info.roomId); // 현재 방 ID (임의 삽입)
  let [includeMini, setIncludeMini] = useState(true); // 미니게임 진행 여부
  let [dice, setDice] = useState(0); // 주사위
  let [pin, setPin] = useState(1); // 현재 위치
  let [lab, setLab] = useState(0); // 바퀴 수
  let [client, setClient] = useState({});
  let [currentCell, setCurrentCell] = useState('')
  let [showModal, setShowModal] = useState(false);

  let videoRef=useRef(null);

  const getUserCamera=()=>{
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream)=>{
      let video=videoRef.current;
      video.srcObject=stream;
      video.play();
    })
    .catch((error)=>{
      console.log("WEBCAM ERROR");
    })
  }

  useEffect(()=>{
    getUserCamera();
  },[videoRef])
 
  // 현재 방의 맵 불러오는 함수
  const createMap = async() => {
    console.log("before axios roomId", roomId)
    axios({
      url : "http://localhost:80/board/cell",
      header : {
        "Accept" : "application/json",
        "Content-type" : "application/json;charset=UTF-8"
        },
        method : "POST",
        data : {
          "id" : roomId, // RoomRequestDto에 id 삽입
          "includeMini" : includeMini // 미니게임 여부
        }
    }).then((response) => {
      console.log(response.data);
      /*
        TO DO :: Cell 색에 맞춰 배합
      */
    });
  };
    
  const connectSocket = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS("http://localhost:80/ws")
      return sock;
    });
  }
  
  const subscribeSocket = () => {
    client.current.connect({}, () => {
      // callback 함수 설정, 대부분 여기에 sub 함수 씀
      client.current.subscribe(`/topic/move/${roomId}`, (response) => {
        let data = JSON.parse(response.body);
        let currentCell = data.cell.name
        
        setDice(data.dice);
        setPin(data.pin);
        setLab(data.lab);
        setCurrentCell(data.cell.name)
        
        console.log(data.cell);
        console.log(data.cell.name)
        console.log('*********');
        console.log(data.pin);
      });
    });
  }


  useEffect(() => {
    // 최초 한 번 CellList 불러오기
    createMap();
    connectSocket();
    subscribeSocket();    
  }, []);
  
  /////////////////////    모달 연습 (미완)
  
  let handleRollDiceClick = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000)
    setTimeout(() => {
      setShowModal(false);
    }, 2500)
    // setShowModal(false)
  };
  
  const ModalPage = ({ currentCell, pin }) => {

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [showModal]);


  return (
    <>
      {showModal && (
        <ModalContainer id='modalContainer'>
          <ModalContent id='modalContent'>
            <p>{currentCell}</p>
            <p>{pin}</p>
            {/* <button onClick={onCloseModal}>Close</button> */}
          </ModalContent>
        </ModalContainer>
      )}
      
    </>
  )};

//////////////////////
  return (
    <div>
      <nav className='infobar'>
        <h2>주사위 눈 : { dice }, 현재 { pin }번 블록에 위치</h2><h2>{ lab }바퀴</h2>
      <button value="innerHTML" onClick={()=>{
        var sendData = {
          "dice" : dice,
          "pin" : pin,
          "lab" : lab,
        };

        client.current.send("/move/" + roomId, {}, JSON.stringify(sendData));
        handleRollDiceClick();
      }}>주사위 굴리기</button>
      </nav>
      <div style={{display: "flex",flexDirection:"column", justifyContent:"center"}}>
      <div className='upper_container'>
      <video className='cam' style={{paddingLeft:"20px"}} ref={videoRef}/> {/* WEBCAM 화면 */}
      <video className='cam' style={{paddingRight:"20px"}} ref={videoRef}/> {/* WEBCAM 화면 */}    
      </div>

      <div style={{position:"relative"}}>
          <div style={{display:"flex", justifyContent:"center"}}>
            <DiceBox dice={ dice } />
          </div>
        <div className='lower_container' >
          <video className='cam' style={{paddingLeft:"20px"}} ref={videoRef}/> {/* WEBCAM 화면 */}
          <video className='cam' style={{paddingRight:"20px"}} ref={videoRef}/> {/* WEBCAM 화면 */}    
        </div>
        <div style={{position:"absolute"}}>
        <BoardMap pin={ pin } style={{bottom: "0"}}/>
        </div>
      </div>
      </div>
      <>
      <ModalPage currentCell={currentCell} pin={pin} />
      </>
    </div>
  )
}