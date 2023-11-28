import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Button } from '@chakra-ui/react';

const InfoToInspector = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button bg="green.100" _hover={{ bg: 'green.200' }}>
                    Click me
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Info about test task</PopoverHeader>
                <PopoverBody>
                    The provided functionality covers essential file management actions and Dropbox integration. If additional functionality is
                    required or desired, I am open to implementing more features.
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default InfoToInspector;
