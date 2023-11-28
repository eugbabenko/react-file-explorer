import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react';

/**
 * SearchBar Component
 *
 * A component that provides a search input field (currently not implemented).
 *
 * @component
 * @returns {JSX.Element} - The rendered SearchBar component.
 */
const SearchBar = () => {
    // Chakra UI toast hook for displaying notifications
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
            {/* InputGroup containing a search input field */}
            <InputGroup mb={5}>
                <InputLeftElement pointerEvents="none">
                    <SearchIcon />
                </InputLeftElement>
                {/* Input field for searching */}
                <Input type="text" placeholder="Search" />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
