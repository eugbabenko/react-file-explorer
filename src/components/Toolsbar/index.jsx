import { HStack } from '@chakra-ui/react';

import CreateFolderBtn from './CreateFolderBtn';
import UploadFileBtn from './uploadFileBtn';

const Toolbar = () => {
    return (
        <>
            <HStack spacing={4} mb={5}>
                <UploadFileBtn />
                <CreateFolderBtn />
            </HStack>
        </>
    );
};

export default Toolbar;
