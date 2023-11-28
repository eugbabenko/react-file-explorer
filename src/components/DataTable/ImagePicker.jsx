import { Image } from '@chakra-ui/react';

// Importing custom icons
import FolderIcon from '../../assets/folder.svg';
import FileIcon from '../../assets/file.svg';

/**
 * ImagePicker Component
 *
 * A component that displays a thumbnail image based on the item type.
 * Used to represent either a folder or a file.
 *
 * @component
 * @param {string} itemType - The type of the item ('folder' or 'file').
 * @returns {JSX.Element} - The rendered ImagePicker component.
 */

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
