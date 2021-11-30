import Setting from '@/components/shared/Setting'
import PersonalInfo from '@/components/userpage/PersonalInfo'
import ProtectedPage from '@/components/shared/ProtectedPage'
const Settings = () => {
  return (
    <ProtectedPage>
      <Setting>
        <PersonalInfo />
      </Setting>
    </ProtectedPage>
  )
}

Settings.title = 'Settings | Fleety'

export default Settings
