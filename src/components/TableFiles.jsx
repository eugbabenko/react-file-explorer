import { Table, TableCaption, TableContainer, Th, Thead, Tr } from '@chakra-ui/react';
import TableItem from './TableItem';

const TableFiles = () => {
    return (
        <>
            <TableContainer>
                <Table variant="simple">
                    <TableCaption>Table of content from Dropbox</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Modified</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <TableItem />
                    {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
        </>
    );
};

export default TableFiles;
