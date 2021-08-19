import { Avatar, AvatarGroup } from '@chakra-ui/react'

export const AvatarTheming = (props) => {
  return (
    <AvatarGroup size='md' max={2} {...props}>
      <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
      <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
      <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
      <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
      <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
    </AvatarGroup>
  )
}
