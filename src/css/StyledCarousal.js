import styled from 'styled-components'
const StyledCarousal = styled.div`
width:80%;
text-align:center;
margin:0 auto;
height:70vh;

.button{
  position:absolute;
  bottom:30px;
  border-radius:50%;
  padding:18px;
  background:rgba(0,0,0,0.6);
  cursor:pointer;
}
.prev{
  left:40px;
  z-index:1;
}
.next{
  right:40px
}
.imageDiv{
  position:relative;
  height:70vh;
  box-shadow:0 2px 17px  0;
  overflow:hidden;
  border-radius:10px;

}

   @media only screen and (max-width: 576px) {
     width:100%;



  }
`
export const ExtendStyles = styled(StyledCarousal)`

.imageDiv {
  text-align:left;
  overflow-y:scroll;
  color:maroon;
 h1{
   margin-bottom:8px;
 }
  &::-webkit-scrollbar {
    width: 0px;
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

