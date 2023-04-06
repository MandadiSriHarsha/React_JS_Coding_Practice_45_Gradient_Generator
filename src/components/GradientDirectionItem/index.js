import {GradientItem, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, isButtonChecked, onChangeDirection} = props
  const {value, displayText} = data
  const changeDirection = () => {
    onChangeDirection(value)
  }
  return (
    <GradientItem>
      <GradientButton
        isButtonChecked={isButtonChecked}
        onClick={changeDirection}
      >
        {displayText}
      </GradientButton>
    </GradientItem>
  )
}

export default GradientDirectionItem
