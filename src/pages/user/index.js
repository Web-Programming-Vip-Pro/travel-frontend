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

User.title = 'User | Fleety'

export default User
