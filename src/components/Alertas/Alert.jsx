import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Alert = ({ title, text, icon }) => {
  MySwal.fire({
    title: <h6>{title}</h6>,
    html: <p>{text}</p>,
    icon: icon,
    iconColor: '#57792B',
    confirmButtonColor: '#57792B',
  })
}

export default Alert
