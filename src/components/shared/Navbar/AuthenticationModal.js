import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import SignInBox from './SignInBox'
import SignUpBox from './SignUpBox'

const AuthenticationModal = ({ isOpen, onClose, isSignIn = false }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent borderRadius="16px">
        <ModalCloseButton />
        <ModalBody px="96px" py="72px">
          {isSignIn ? <SignInBox /> : <SignUpBox />}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthenticationModal
