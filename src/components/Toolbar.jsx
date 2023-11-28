import { AddIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
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
import { AiFillFileAdd, AiFillFolder, AiFillFolderAdd, AiOutlineUpload } from 'react-icons/ai';

import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFolder } from '../redux/createFolderSlice';
import { updateFiles } from '../redux/updateItemsSlice';
import { uploadFile } from '../redux/uploadFileSlice';

const Toolbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const [folderName, setFolderName] = useState('');

    const dispatch = useDispatch();
    const path = useSelector((state) => state.pathSlice.path);
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

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const filePath = `${path}/${file.name}`;
        await dispatch(uploadFile({ path: filePath, file })).then((response) => {
            if (response.payload.status === 'error') {
                toast({
                    title: 'Error uploading item',
                    description: response.payload.error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Item uploaded',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });
        dispatch(updateFiles());
    };

    return (
        <>
            <HStack spacing={4}>
                <Menu>
                    <MenuButton leftIcon={<AddIcon />} as={Button} colorScheme="pink">
                        Create
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title="Create">
                            <MenuItem icon={<AiFillFolder />}>Folder</MenuItem>
                            <MenuItem icon={<AiFillFileAdd />}>Document</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Add">
                            <MenuItem type="file" icon={<AiOutlineUpload />}>
                                Upload
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                <Button as="label" leftIcon={<AiOutlineUpload />} colorScheme="blue">
                    Upload
                    <input type="file" hidden onChange={handleFileUpload} />
                </Button>
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
            </HStack>
        </>
    );
};

export default Toolbar;
