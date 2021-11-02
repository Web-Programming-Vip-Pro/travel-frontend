import Country from './Country'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
const CityPage = () => {
  const Bgdata = [
    {
      imgSrc: '/assets/citypage/Bg City.jpg',
      location: 'South Island',
      nation: 'New Zealand',
      flag: '/assets/citypage/flag.png',
    },
  ]
  return (
    <>
      <Country data={Bgdata} />
      <StayList>
        <UtilityNav />
      </StayList>
    </>
  )
}

export default CityPage
