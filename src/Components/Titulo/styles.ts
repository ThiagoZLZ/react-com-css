import styled from 'styled-components'

import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;

  @media (max-width: 760px) {
    text-align: center;
    margin-top: 20px;
  }
`
