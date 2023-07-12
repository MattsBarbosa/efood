import { ButtonLink } from './styles'

export type Props = {
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, to, onClick }: Props) => (
  <ButtonLink to={to as string} onClick={onClick}>
    {children}
  </ButtonLink>
)

export default Button
