import { HStack } from '@chakra-ui/react';

import CreateFolderBtn from './CreateFolderBtn';
import UploadFileBtn from './uploadFileBtn';
import InfoToInspector from './InfoToInspector';

/**
 * Toolbar Component
 *
 * A component that represents the toolbar containing buttons for creating folders and uploading files.
 *
 * @component
 * @returns {JSX.Element} - The rendered Toolbar component.
 */
const Toolbar = () => {
    return (
        <>
            {/* Horizontal stack of buttons with spacing */}
            <HStack spacing={4} mb={5}>
                {/* Button to upload files */}
                <UploadFileBtn />
                {/* Button to create folders */}
                <CreateFolderBtn />
                {/* Button to show info about test task */}
                <InfoToInspector />
            </HStack>
        </>
    );
};

export default Toolbar;
