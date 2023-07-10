import { ButtonLink, SButton } from './styles'

export type Props = {
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, onClick }: Props) => (
  <SButton>
    <ButtonLink to={to as string} onClick={onClick}>
      {children}
    </ButtonLink>
  </SButton>
)

export default Button
