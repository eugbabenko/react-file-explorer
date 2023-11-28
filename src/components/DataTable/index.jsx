import { Table, TableCaption, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import TableBody from './TableBody';

const TableFiles = () => {
    return (
        <TableContainer overflowY="auto">
            <Table variant="simple">
                <TableCaption>Table of content from Dropbox</TableCaption>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Name</Th>
                        <Th>Modified</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <TableBody />
            </Table>
        </TableContainer>
    );
};

export default TableFiles;
