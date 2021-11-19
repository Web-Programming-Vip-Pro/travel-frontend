import ProtectedPage from '@/components/shared/ProtectedPage'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
import HeaderWish from '@/components/userpage/HeaderWish'
export default function WishList() {
  const serviceType = ['Stays', 'Flights', 'Cars', 'Thing to do']
  return (
    <ProtectedPage>
      <HeaderWish serviceType={serviceType} />
      <StayList>
        <UtilityNav />
      </StayList>
    </ProtectedPage>
  )
}
