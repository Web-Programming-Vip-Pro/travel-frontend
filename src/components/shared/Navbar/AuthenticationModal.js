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
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent borderRadius="16px">
        <ModalCloseButton />
        <ModalBody
          px={{ base: '16px', tablet: '96px' }}
          py={{ base: '36px', tablet: '72px' }}
        >
          {isSignIn ? (
            <SignInBox onClose={onClose} />
          ) : (
            <SignUpBox onClose={onClose} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthenticationModal
