import styled from 'styled-components'
const StyledCarousal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:80%;
text-align:center;
margin:0 auto;
height:70vh;

.button{
 flex:1;
 align-self:center;
 height:100%;
 display:flex;
 align-items:center;
 justify-content:center;
}
.imageDiv{
  flex:15;
  position:relative;
  height:70vh;
  box-shadow:0 2px 17px  0;
  overflow:hidden;
  border-radius:10px;

}
.imgNav{
 border-radius:50%;
 padding:20px;
 color:white;
 font-size:20px;
 background:rgba(0,0,0,0.1);
 cursor:pointer;
}
   @media only screen and (max-width: 576px) {
     width:100%;
   .button{
     display:none;
   }


  }
`
export const ExtendStyles = styled(StyledCarousal)`
.imageDiv {
  text-align:left;
  padding:0 20px;
  overflow-y:scroll;
  color:maroon;
  &::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: none;

  }
 &::-webkit-scrollbar-thumb {
    background: burlywood;
    border-radius: 10px;
    height:100px;

  }

}

`;
export default StyledCarousal;

