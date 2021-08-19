import Icon from '@chakra-ui/icon'

export default function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props

  const d = isIndeterminate ? 'M1 5 L10 5' : 'M1 4.304L3.696 7l6-6'

  return (
    <Icon viewBox='-4.5 0 20 9' {...rest}>
      <path fill='none' stroke='currentColor' strokeWidth='2' d={d} />
    </Icon>
  )
}
