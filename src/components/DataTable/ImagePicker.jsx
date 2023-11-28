import { Image } from '@chakra-ui/react';

import FolderIcon from '../../assets/folder.svg';
import FileIcon from '../../assets/file.svg';

const ImagePicker = ({ itemType }) => {
    return (
        <>
            {itemType === 'folder' ? (
                <Image src={FolderIcon} alt="Folder Thumbnail" boxSize="3em" />
            ) : (
                <Image src={FileIcon} alt="File Thumbnail" boxSize="3em" />
            )}
        </>
    );
};

export default ImagePicker;
