import { Button, useToast } from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { updateFiles } from '../../redux/slice/updateItemsSlice';
import uploadFile from '../../redux/actions/uploadFile';

const UploadFileBtn = () => {
    const path = useSelector((state) => state.pathSlice.path);

    const dispatch = useDispatch();
    const toast = useToast();

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
        <Button as="label" leftIcon={<AiOutlineUpload />} colorScheme="blue">
            Upload
            <input type="file" hidden onChange={handleFileUpload} />
        </Button>
    );
};

export default UploadFileBtn;
