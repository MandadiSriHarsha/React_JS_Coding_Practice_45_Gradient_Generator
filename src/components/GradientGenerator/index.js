import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorBgContainer,
  GradientContentCard,
  MainHeading,
  TextOne,
  DirectionsButtonContainer,
  TextTwo,
  InputsContainer,
  InputContainerOne,
  InputOneLabel,
  InputOne,
  InputContainerTwo,
  InputTwoLabel,
  InputTwo,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeDirection = value => {
    this.setState({gradientDirection: value})
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  onGenerateBackground = () => {
    const {gradientDirection, colorOne, colorTwo} = this.state
    this.setState({
      gradientValue: `to ${gradientDirection}, ${colorOne}, ${colorTwo}`,
    })
  }

  render() {
    const {
      gradientDirection,
      colorOne,
      colorTwo,
      backgroundCheck,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorBgContainer
        gradientValue={gradientValue}
        backgroundCheck={backgroundCheck}
        data-testid="gradientGenerator"
      >
        <GradientContentCard>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <TextOne>Choose Direction</TextOne>
          <DirectionsButtonContainer>
            {gradientDirectionsList.map(eachitem => (
              <GradientDirectionItem
                key={eachitem.directionId}
                data={eachitem}
                isButtonChecked={eachitem.value === gradientDirection}
                onChangeDirection={this.onChangeDirection}
              />
            ))}
          </DirectionsButtonContainer>
          <TextTwo>Pick the Colors</TextTwo>
          <InputsContainer>
            <InputContainerOne>
              <InputOneLabel htmlFor="inputOne">
                {colorOne.toString()}
              </InputOneLabel>
              <InputOne
                value={colorOne}
                type="color"
                id="inputOne"
                onChange={this.onChangeColorOne}
              />
            </InputContainerOne>
            <InputContainerTwo>
              <InputTwoLabel htmlFor="inputTwo">
                {colorTwo.toString()}
              </InputTwoLabel>
              <InputTwo
                value={colorTwo}
                type="color"
                id="inputTwo"
                onChange={this.onChangeColorTwo}
              />
            </InputContainerTwo>
          </InputsContainer>
          <GenerateButton type="button" onClick={this.onGenerateBackground}>
            Generate
          </GenerateButton>
        </GradientContentCard>
      </GradientGeneratorBgContainer>
    )
  }
}

export default GradientGenerator
