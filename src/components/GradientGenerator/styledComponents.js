import styled from 'styled-components'

export const GradientGeneratorBgContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const GradientContentCard = styled.div`
  width: 80%;
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 27px;
  margin: 0px;
  padding: 40px 0px 40px 0px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const TextOne = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  opacity: 1;
  text-align: center;
  margin: 0px;
  padding: 0px 0px 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const TextTwo = styled(TextOne)``

export const DirectionsButtonContainer = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 630px;
  display: flex;
  margin: auto;
  padding: 30px 0px 30px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 650px;
  margin: 30px 0px 20px 0px;
  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const InputContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 20px 0px;
`

export const InputContainerTwo = styled(InputContainerOne)``

export const InputOneLabel = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  opacity: 1;
  text-align: center;
  margin: 0px;
  padding: 0px 0px 7px 0px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const InputTwoLabel = styled(InputOneLabel)``

export const InputOne = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  height: 50px;
  width: 100px;
  background: none;
  border-radius: 8px;
  margin: 0px 0px 15px 0px;
`

export const InputTwo = styled(InputOne)``

export const GenerateButton = styled.button`
  border: none;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-weight: none;
  padding: 14px 20px 14px 20px;
  color: #1e293b;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  margin: 0px 0px 30px 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
