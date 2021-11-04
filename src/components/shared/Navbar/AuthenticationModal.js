import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import SignInBox from './SignInBox'
import SignUpBox from './SignUpBox'

const AuthenticationModal = ({ isOpen, onClose, isSignIn = true }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="16px">
        <ModalCloseButton />
        <ModalBody px="96px" pt="72px">
          {isSignIn ? <SignInBox /> : <SignUpBox />}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthenticationModal
