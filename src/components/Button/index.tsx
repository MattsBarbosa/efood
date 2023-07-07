import { ButtonLink, SButton } from './styles'

export type Props = {
  children: string
  to?: string
}

const Button = ({ children, to }: Props) => (
  <SButton>
    <ButtonLink to={to as string}>{children}</ButtonLink>
  </SButton>
)

export default Button
