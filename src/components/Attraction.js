import React from 'react';
import styled from 'styled-components';
import { BgImage } from './Carousal';

const StyledAttraction = styled.div`
height:85%;
width:100%;
position:relative;

.text{
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background:rgba(0,0,0,0.75);
  overflow-x:scroll;
}
 .btn{
  position:absolute;
  bottom:40px;
  border-radius:50%;
  padding:18px;
  background:burlywood;
  cursor:pointer;
 }
.next{
  right:30px;
}
.previous{
  left:30px
}
.center{
  max-width:700px;
  text-align:center;
  color:burlywood;
  margin:0 auto;
}
}
.text::-webkit-scrollbar {
  width: 0px;
}
.text::-webkit-scrollbar-track {
  background: none;

}
.text::-webkit-scrollbar-thumb {
  background: burlywood;
  border-radius: 10px;
  height:100px;
}
.heading{
font-size:32px;
}
.p-text{
  font-size:18px;
  font-weight:200;
  text-shadow:0.2px 0.2px white;
}
`;


const Attraction = ({ h2, p, fluid }) => {
  return (
    <StyledAttraction >
      <BgImage style={{ zIndex: 0 }} fluid={fluid} />
      <div className="text">
        <div className="center">
          <h2 className="heading">{h2}</h2>
          <div
            style={{ padding: 20 }}
          >
            <p className="p-text">{p}</p>

          </div>
        </div>
      </div>
    </StyledAttraction>
  )
}
export default Attraction;