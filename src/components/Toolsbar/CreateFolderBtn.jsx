import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { AiFillFolderAdd } from 'react-icons/ai';

import createFolder from '../../redux/actions/createFolder';
import { updateFiles } from '../../redux/slice/updateItemsSlice';

const CreateFolderBtn = () => {
    const initialRef = useRef(null);
    const [folderName, setFolderName] = useState('');

    const path = useSelector((state) => state.pathSlice.path);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const toast = useToast();

    const handleCreateFolder = async () => {
        await dispatch(createFolder({ path, folderName })).then((response) => {
            if (response.payload.status === 'error') {
                toast({
                    title: 'Error creating folder',
                    description: response.payload.error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Folder created',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });
        dispatch(updateFiles());
        onClose();
    };

    return (
        <>
            <Button leftIcon={<AiFillFolderAdd />} onClick={onOpen}>
                Create Folder
            </Button>
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create folder</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} required placeholder="Folder Name" onChange={(e) => setFolderName(e.target.value)} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button isDisabled={!folderName} onClick={handleCreateFolder} colorScheme="blue" mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateFolderBtn;
