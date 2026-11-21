
import React, { useState } from 'react'
import './MySpace.styles.scss'

import {
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

function MySpace() {
  const [open, setOpen] = useState(false)

  return (
    <div className='login-main'>
      <div className='login-page'>

        <CardMedia
          component='img'
          image='https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/feature/myspace/my_space_login_in_jv.png'
          alt='login-name'
          className='login-img'
        />

        <div className='login-content'>
          <Typography variant='h5'>
            Login To JIO Hotstar
          </Typography>

          <Typography>
            Start watching from where you left off, personalise for kids and more
          </Typography>

          <Button
            className='login-btn'
            variant='contained'
            onClick={() => setOpen(true)}
          >
            Log In
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className='login-dialog'
      >
        <DialogTitle className='dialog-title'>
          <div>
            <Typography variant='h6'>
              Login or SignUp to continue
            </Typography>

            <Typography variant='body2'>
              Scan QR code or enter phone number to login
            </Typography>
          </div>

          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className='dialog-content'>
          <div className='qr-code'>

          <img
            src='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=JioHotstarLoginDemo'
            alt='QR Code'
          />

          <Typography variant='h6'>
            Scan QR Code to Login
          </Typography>

          <Typography variant='body2'>
            Open the JioHotstar mobile app and scan the QR code.
          </Typography>
</div>
<div className='number-login'>
          <TextField
            fullWidth
            label='Enter Your Mobile Number'
            placeholder='Enter Your Mobile Number'
            variant='outlined'
            className='mobile-input'
            margin='normal'
          />

          <Button
            className='login-btn'
            variant='contained'
            fullWidth
          >
            Get OTP
          </Button>
</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MySpace
