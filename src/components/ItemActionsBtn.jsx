import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { Divider, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { AiOutlineMore } from 'react-icons/ai';

const ItemActionsBtn = () => {
    return (
        <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<AiOutlineMore />} variant="outline" />
            <MenuList>
                <MenuItem icon={<AddIcon />}>Item Info</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>Share</MenuItem>
                <MenuItem icon={<RepeatIcon />}>Copy Link</MenuItem>
                <MenuItem icon={<EditIcon />}>Download</MenuItem>
                <Divider />
                <MenuItem icon={<AddIcon />}>Delete</MenuItem>
                <MenuItem icon={<AddIcon />}>Rename</MenuItem>
                <MenuItem icon={<AddIcon />}>Move</MenuItem>
                <MenuItem icon={<AddIcon />}>Copy</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ItemActionsBtn;
