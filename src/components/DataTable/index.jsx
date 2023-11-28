import { Table, TableCaption, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import TableBody from './TableBody';

/**
 * TableFiles Component
 *
 * A component that renders a table displaying content from Dropbox.
 *
 * @component
 * @returns {JSX.Element} - The rendered TableFiles component.
 */
const TableFiles = () => {
    return (
        <TableContainer overflowY="auto">
            <Table variant="simple">
                <TableCaption>Table of content from Dropbox</TableCaption>
                <Thead>
                    <Tr>
                        <Th></Th>
                        {/* Placeholder for thumbnail icon */}
                        <Th>Name</Th>
                        {/* Header for the file or folder name */}
                        <Th>Modified</Th>
                        {/* Header for the last modified date */}
                        <Th></Th>
                        {/* Placeholder for actions button */}
                    </Tr>
                </Thead>
                <TableBody />
            </Table>
        </TableContainer>
    );
};

export default TableFiles;
