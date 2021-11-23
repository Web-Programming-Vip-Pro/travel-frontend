import ProtectedPage from '@/components/shared/ProtectedPage'
import Setting from '@/components/shared/Setting'
import Security from '@/components/userpage/Security'
const Login = () => {
  return (
    <ProtectedPage>
      <Setting>
        <Security />
      </Setting>
    </ProtectedPage>
  )
}

export default Login
