import { Span } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <Span>{children}</Span>

export default Tag
