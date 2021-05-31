import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return <Modal
    onClose={onClose}
    isOpen={isOpen}
  >
    <ModalOverlay />
    <ModalContent
      display="flex"
      maxH={600}
      maxWidth={900}
    >
      <Image
      alignSelf="center"
        src={imgUrl}
      />

      <ModalFooter
        justifyContent="flex-start"
        bg="pGray.800"
        h="32px"
        borderRadius="0 0 5px 5px"
        color="pGray.100"
        fontFamily="Roboto"
        fontWeight="normal"
        fontSize="14px"
      >
        <Link href={imgUrl} isExternal={true} >
          Abrir original
          </Link>
      </ModalFooter>
    </ModalContent>
  </Modal>;
}
