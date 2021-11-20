import { useSession } from 'next-auth/react'

const ProtectedPage = ({ children }) => {
  const { data, status } = useSession()
  if (status === 'loading') return <p>Loading...</p>
  if (status === 'unauthenticated') {
    window.location.href = '/'
  } else {
    return children
  }
}

export default ProtectedPage
