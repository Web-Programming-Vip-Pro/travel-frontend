import BackgroundUser from '@/components/userpage/BackgroundUser'
import UserReviews from '@/components/userpage/UserReviews'
import ProtectedPage from '@/components/shared/ProtectedPage'

const User = () => {
  return (
    <ProtectedPage>
      <BackgroundUser />
      <UserReviews />
    </ProtectedPage>
  )
}

export default User
