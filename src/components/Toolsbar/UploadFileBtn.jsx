import { useDispatch, useSelector } from 'react-redux';

import { Button, useToast } from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';

import { updateFiles } from '../../redux/slice/updateItemsSlice';
import uploadFile from '../../redux/actions/uploadFile';

/**
 * UploadFileBtn Component
 *
 * A component that provides a button to trigger file upload functionality.
 *
 * @component
 * @returns {JSX.Element} - The rendered UploadFileBtn component.
 */
const UploadFileBtn = () => {
    // Redux state for the current path
    const path = useSelector((state) => state.pathSlice.path);

    // Chakra UI toast hook for displaying notifications
    const toast = useToast();
    const dispatch = useDispatch();

    /**
     * Handles the file upload process.
     *
     * - Retrieves the selected file from the file input.
     * - Constructs the full path for the file within the current directory.
     * - Dispatches the uploadFile action to initiate the file upload process.
     * - Displays a toast notification based on the success or failure of the upload.
     * - Triggers an update of the file list after a successful upload.
     *
     * @param {Event} e - The file input change event.
     */
    const handleFileUpload = async (e) => {
        // Retrieve the selected file from the file input
        const file = e.target.files[0];
        // Construct the full path for the file within the current directory
        const filePath = `${path}/${file.name}`;
        // Dispatch the uploadFile action to initiate the file upload process
        await dispatch(uploadFile({ path: filePath, file })).then((response) => {
            if (response.payload.status === 'error') {
                // Display an error toast if file upload fails
                toast({
                    title: 'Error uploading item',
                    description: response.payload.error,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                });
            } else {
                // Display a success toast if file upload is successful
                toast({
                    title: 'Item uploaded',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                });
            }
        });
        // Update the file list
        dispatch(updateFiles());
    };

    return (
        <Button as="label" leftIcon={<AiOutlineUpload />} colorScheme="blue">
            Upload
            {/* Hidden file input triggered by the button click */}
            <input type="file" hidden onChange={handleFileUpload} />
        </Button>
    );
};

export default UploadFileBtn;
