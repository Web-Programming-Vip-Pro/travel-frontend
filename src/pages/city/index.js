import Country from '@/components/page/City/Country'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
export default function City() {
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
