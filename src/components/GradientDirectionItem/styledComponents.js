import styled from 'styled-components'

export const GradientItem = styled.li`
  list-style-type: none;
  padding: 20px 25px 20px 25px;
  font-family: 'Roboto';
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const GradientButton = styled.button`
    background-color:#ffffff;
    opacity:${props => (props.isButtonChecked ? 1 : 0.5)};
    padding:12px 14px 12px 14px;
    color #014f7b;
    font-weight:bold;
    font-size:16px;
    border:none;
    min-width:100%;
    border-radius:8px;
    cursor:pointer;
    outline:none;
    margin:10px 13px 10px 13px;
    @media screen and (min-width:768px){
        font-size:18px;
    }
`
