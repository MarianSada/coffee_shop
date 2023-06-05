import React from 'react'
import Button from '@mui/material/Button';

function Btn({children, variant, size, color, type, onClick}) {
  return (
      <Button 
        variant={variant} 
        size={size} 
        color={color} 
        type={type}
        onClick={onClick}
        sx={{ whiteSpace: 'nowrap' }}
      >
        {children}
      </Button>
  )
}

export default Btn
