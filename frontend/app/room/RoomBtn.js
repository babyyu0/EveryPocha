'use client'

import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import { useState, useNavigate } from "react"

export default function RoomBtn( props ) {
  const roomInfo = props.info
  console.log(`Room Button Info: ${roomInfo.roomId}`)
  
  let CopyBtn = styled.button`
  width: 219px;
  height: 158px;
  background: #43BEF2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  `

  let StartBtn = styled.button`
  width: 325px;
  height: 158px;
  background: #FF285C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  `

  let [setting, setSetting] = useState(true)
  
  /* 희진 : JS 클립보드 API 시작 */
  let url = usePathname()
  let urls = `http://localhost:3000${url}`
  
  const clipBoard = () => {
    navigator.clipboard.writeText(urls)
    alert("클립보드에 URL이 복사되었습니다.")
  }
  /* 희진 : JS 클립보드 API 끝 */

  /* 제정 : 시작 버튼 클릭 시 메인 게임 이동 시작 */
  const startGame = () => {
    const pathname = `/game/${roomInfo.roomId}`
    const query = { roomInfo: JSON.stringify(roomInfo) }
    window.location.href = `${pathname}?${new URLSearchParams(query).toString()}`
  }
  /* 제정 : 시작 버튼 클릭 시 메인 게임 이동 끝 */

  return (
    <div>
      <button className="setting-btn" onClick={() => { setSetting(!setting); }}>
        { setting == true ? ('기본 모드 ON') : '미니게임 ON' }
      </button>

      <CopyBtn className="copy-url" onClick={() => { clipBoard() }}>
        친구 초대
      </CopyBtn>

      <StartBtn className="startBtn" onClick={startGame}>
        시작
      </StartBtn>
    </div>
  )
}