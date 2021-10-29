import Country from './Country'
import StayList from './StayList'
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
      <StayList />
    </>
  )
}

export default CityPage
