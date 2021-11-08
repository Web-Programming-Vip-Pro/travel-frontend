import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
import HeaderWish from '@/components/userpage/HeaderWish'
export default function WishList() {
  const serviceType = ['Stays', 'Flights', 'Cars', 'Thing to do']
  return (
    <>
      <HeaderWish serviceType={serviceType} />
      <StayList>
        <UtilityNav />
      </StayList>
    </>
  )
}
