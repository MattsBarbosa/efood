import Button from '../Button'
import {
  Form,
  Title,
  OrderMessage,
  OrderContainer,
  CardNumber,
  Cvv
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Overlay, SideBar } from '../Cart/styles'
import { closeOrder, open } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const { isOrderOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseMutation()
  const [continuarPagamento, setContinuarPagamento] = useState(false)
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Nome inválido')
        .required('Nome obrigatório'),
      address: Yup.string()
        .min(10, 'Endereço inválido')
        .required('Endereço obrigatório'),
      city: Yup.string()
        .min(5, 'Endereço inválido')
        .required('Endereço obrigatório'),
      zipCode: Yup.string()
        .min(9, 'Cep inválido')
        .max(9, 'Cep inválido')
        .required('Cep obrigatório'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Numero obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement,
            number: Number(values.number)
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const closeOrderAndCart = () => {
    dispatch(closeOrder())
    setPagamentoConcluido(false)
  }

  const addToCart = () => {
    dispatch(open())
    dispatch(closeOrder())
  }

  const payment = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setContinuarPagamento(true)
      }
    })
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <OrderContainer className={isOrderOpen ? 'is-open' : ''}>
        <Overlay />
        <SideBar>
          <Form onSubmit={form.handleSubmit}>
            {!pagamentoConcluido ? (
              !continuarPagamento ? (
                <section>
                  <Title>Entrega</Title>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                  <div>
                    <div>
                      <label htmlFor="zipCode">CEP</label>
                      <input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </div>
                  </div>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input
                    id="complement"
                    type="text"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                  <Button type="button" onClick={payment}>
                    Continuar com o pagamento
                  </Button>
                  <Button onClick={addToCart}>Voltar para o carrinho</Button>
                </section>
              ) : (
                <section>
                  <Title>Pagamento - Valor a pagar R$ {getTotalPrice()}</Title>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                  <div>
                    <div>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <CardNumber
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCode">CVV</label>
                      <Cvv
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        id="expiresMonth"
                        name="expiresMonth"
                        type="text"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        id="expiresYear"
                        name="expiresYear"
                        type="text"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </div>
                  </div>
                  <Button type="submit" onClick={form.handleSubmit}>
                    Finalizar pagamento
                  </Button>
                  <Button onClick={() => setContinuarPagamento(false)}>
                    Voltar para a edição de endereço
                  </Button>
                </section>
              )
            ) : (
              <section>
                <Title>Pedido realizado - {data?.orderId}</Title>
                <OrderMessage>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <br />
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <br />
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <br />
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </OrderMessage>
                <Button onClick={closeOrderAndCart}>Concluir</Button>
              </section>
            )}
          </Form>
        </SideBar>
      </OrderContainer>
    </>
  )
}

export default Checkout
