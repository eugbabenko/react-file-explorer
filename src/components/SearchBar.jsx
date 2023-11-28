import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react';

const SearchBar = () => {
    const toast = useToast();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        toast({
            title: 'Not implemented',
            description: 'Search functionality will be available soon.',
            status: 'info',
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <InputGroup mb={5}>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon />
                </InputLeftElement>
                <Input type="text" placeholder="Search" />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
