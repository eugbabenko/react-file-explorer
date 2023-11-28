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

/**
 * CreateFolderBtn Component
 *
 * A component that provides a button to create a new folder, triggering a modal for user input.
 *
 * @component
 * @returns {JSX.Element} - The rendered CreateFolderBtn component.
 */
const CreateFolderBtn = () => {
    // Reference to the input field for focusing
    const initialRef = useRef(null);

    // State for managing the folder name input
    const [folderName, setFolderName] = useState('');

    // Redux state for the current path
    const path = useSelector((state) => state.pathSlice.path);

    // Chakra UI modal hook
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Chakra UI toast hook for displaying notifications
    const toast = useToast();
    const dispatch = useDispatch();

    /**
     * Handles the creation of a new folder.
     * Dispatches the createFolder action, displays a toast notification, updates the file list, and closes the modal.
     */
    const handleCreateFolder = async () => {
        await dispatch(createFolder({ path, folderName })).then((response) => {
            if (response.payload.status === 'error') {
                // Display an error toast if folder creation fails
                toast({
                    title: 'Error creating folder',
                    description: response.payload.error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            } else {
                // Display a success toast if folder creation is successful
                toast({
                    title: 'Folder created',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });

        // Update the file list and close the modal
        dispatch(updateFiles());
        onClose();
    };

    return (
        <>
            {/* Button to open the folder creation modal */}
            <Button leftIcon={<AiFillFolderAdd />} onClick={onOpen}>
                Create Folder
            </Button>
            {/* Modal for creating a new folder */}
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create folder</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {/* Form for entering the new folder name */}
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} required placeholder="Folder Name" onChange={(e) => setFolderName(e.target.value)} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        {/* Button to create the folder */}
                        <Button isDisabled={!folderName} onClick={handleCreateFolder} colorScheme="blue" mr={3}>
                            Save
                        </Button>
                        {/* Button to close the modal */}
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateFolderBtn;
