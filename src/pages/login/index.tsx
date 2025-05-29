import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import loginLightAvif from '~/assets/images/login/login-bg.avif'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Input from '@mui/material/Input'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

type FormElements = {
  email: HTMLInputElement
  password: HTMLInputElement
  persistent: HTMLInputElement
} & HTMLFormControlsCollection

type SignInFormElement = {
  readonly elements: FormElements
} & HTMLFormElement

export default function Login() {
  return (
    <>
      <Box
        sx={() => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)'
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2
          }}
        >
          <Box component="header" sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AccountBalanceIcon />
              </IconButton>
              <Typography sx={{ display: 'block', fontWeight: 'bold' }}>后台管理系统</Typography>
            </Box>

            <Box
              component="main"
              sx={{
                my: 'auto',
                py: 2,
                pb: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 400,
                maxWidth: '100%',
                mx: 'auto',
                borderRadius: 'sm',
                '& form': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                },
                [`& .MuiFormLabel-asterisk`]: {
                  visibility: 'hidden'
                }
              }}
            >
              <Stack sx={{ gap: 4 }}>
                <Stack sx={{ gap: 1 }}>
                  <Typography component="h1">欢迎使用</Typography>
                </Stack>

                <Stack sx={{ gap: 4 }}>
                  <form
                    onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                      event.preventDefault()
                      const formElements = event.currentTarget.elements
                      const data = {
                        email: formElements.email.value,
                        password: formElements.password.value,
                        persistent: formElements.persistent.checked
                      }
                      alert(JSON.stringify(data, null, 2))
                    }}
                  >
                    <FormControl required>
                      <FormLabel>用户名</FormLabel>
                      <Input type="email" name="email" autoComplete="off" />
                    </FormControl>
                    <FormControl required>
                      <FormLabel>密 码</FormLabel>
                      <Input type="password" name="password" />
                    </FormControl>
                    <Stack sx={{ gap: 1, mt: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Checkbox aria-label="记住密码" name="persistent" />
                        <Link href="#replace-with-a-link">忘记密码?</Link>
                      </Box>
                      <Button type="submit" fullWidth>
                        登 录
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Stack>

              <Divider
                sx={() => ({
                  color: { xs: '#FFF', md: 'text.tertiary' }
                })}
              >
                其他登录方式
              </Divider>

              <Button fullWidth>Continue with Google</Button>

              <Box component="footer" sx={{ py: 3 }}>
                <Typography sx={{ textAlign: 'center' }}>© Edison.Cheung {new Date().getFullYear()}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={() => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition: 'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${loginLightAvif})`
        })}
      />
    </>
  )
}
