import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../Components/Comments";
import Card from "../Components/Card"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from "../utils/axios"
import { fetchSuccess } from '../redux/videoSlice';
import {format} from 'timeago.js'

const Container = styled.div`
display:flex;
gap:24px;
`;
const Content = styled.div`
flex:3.5;
`;
const VideoWrapper = styled.div`

`;
const Title = styled.h1`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color: ${({ theme }) => theme.text};
`;

const Details= styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
color: ${({ theme }) => theme.textSoft};
`;

const Buttons =styled.div`
display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};

`;

const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.7px solid ${({ theme }) => theme.bgLighter};
`;

const Reccomendation =  styled.div`
flex:2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
 margin-top:-10px;
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;


function Video() {
   const {currentUser} = useSelector((state)=>state.user)
   const {currentVideo} = useSelector((state)=> state.video)
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2]

  
  const [channel , setChannel] = useState({})
   
   useEffect(()=>{
    const fetchData = async() =>{
      try{
        const videoRes = await axios.get(`/videos/find/${path}`)
        const channelRes = await axios.get(`/users/find/${videoRes.userId}`)
        
        setChannel(channelRes.data)
        dispatch(fetchSuccess(videoRes.data))
      }
      catch(err){

      }
    }
    fetchData();
   },[path,dispatch])
  


  return (
    <Container>
        <Content>
       <VideoWrapper>
       <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/9WyZWvpZiB4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
       </VideoWrapper>
       <Title>{currentVideo.title}</Title>
       <Details>
        <Info>{currentVideo.views} • {format(currentVideo.createdAt)}</Info>
        <Buttons>
        <Button><ThumbUpOutlinedIcon /> {currentVideo.likes?.length}</Button>
        <Button><ThumbDownOffAltOutlinedIcon /> {currentVideo.disLikes}</Button>
        <Button><ReplyOutlinedIcon /> Share</Button>
          <Button><AddTaskOutlinedIcon /> Save</Button>
        </Buttons>
       </Details>
       <Hr/>
       <Channel>
          <ChannelInfo>
            <Image src={channel.imgUrl} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>
                {currentVideo.description}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
        
        </Content>
        {/* <Reccomendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        
        </Reccomendation> */}
    </Container>
  )
}

export default Video