import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google'
import MuiCard from '@mui/material/Card'
import React from 'react'
import { styled } from '@mui/material/styles'

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px'
  },
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
  })
}))

export default function LoginCard() {
  const [phoneError, setPhoneError] = React.useState(false)
  const [phoneErrorMsg, setPhoneErrorMsg] = React.useState('')
  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('')

  return (
    <Card variant="outlined">
      <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
        欢迎使用
      </Typography>
      <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
        <FormControl>
          <TextField
            error={phoneError}
            helperText={phoneErrorMsg}
            id="phone"
            type="text"
            name="phone"
            label="手机号"
            autoComplete="off"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={phoneError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <TextField
            error={passwordError}
            helperText={passwordErrorMsg}
            name="password"
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="记住我" />
        <Button type="submit" fullWidth variant="contained">
          登录
        </Button>
      </Box>
      <Divider>其他登录方式</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button fullWidth variant="outlined" startIcon={<GoogleIcon />}>
          微信登录
        </Button>
      </Box>
    </Card>
  )
}
