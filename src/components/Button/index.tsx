import { ButtonLink } from './styles'

export type Props = {
  children: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({ children, to, onClick, type }: Props) => (
  <ButtonLink to={to as string} onClick={onClick} type={type}>
    {children}
  </ButtonLink>
)

export default Button
