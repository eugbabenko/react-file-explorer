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
} from '@chakra-ui/react';
import { AiFillFileAdd, AiFillFolder, AiFillFolderAdd, AiOutlineUpload } from 'react-icons/ai';

import { useRef } from 'react';

const Toolbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const finalRef = useRef(null);

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
                            <MenuItem icon={<AiOutlineUpload />}>Upload</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                <Button leftIcon={<AiOutlineUpload />} colorScheme="blue">
                    Upload
                </Button>
                <>
                    <Button leftIcon={<AiFillFolderAdd />} onClick={onOpen}>
                        Create Folder
                    </Button>
                    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create folder</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input ref={initialRef} placeholder="Folder Name" />
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="blue" mr={3}>
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
