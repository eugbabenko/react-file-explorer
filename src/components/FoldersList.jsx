import { Box, SimpleGrid } from '@chakra-ui/react';

const FoldersList = ({ title, items }) => {
    return (
        <div>
            <h4>{title}</h4>
            <SimpleGrid columns={4} spacing={10} minChildWidth="100px">
                {items.map((item) => (
                    <Box bg="white" h="100px" border="1px solid" key={item}>
                        {item}
                    </Box>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default FoldersList;
