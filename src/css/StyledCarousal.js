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
  border:10px solid white;
  box-shadow:0 2px 17px  0;
  overflow:hidden;

}
.imgNav{
 border-radius:50%;
 padding:20px;
 color:white;
 font-size:20px;
 background:rgba(0,0,0,0.1);
 cursor:pointer;
}
`

export default StyledCarousal;

