import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setPath } from '../redux/pathSlice';

const PathBreadcrumb = () => {
    const dispatch = useDispatch();
    const path = useSelector((state) => state.pathSlice.path);
    const pathArray = path.split('/');

    const handleBreadcrumbClick = (link) => {
        const isLastItem = link === pathArray[pathArray.length - 1];

        if (!link) {
            dispatch(setPath(link));
        } else if (!isLastItem) {
            dispatch(setPath(`/${link}`));
        }

        return null;
    };

    return (
        <Breadcrumb>
            {pathArray?.map((link) => (
                <BreadcrumbItem key={link}>
                    <BreadcrumbLink onClick={() => handleBreadcrumbClick(link)}>{link ? link : 'All files'}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default PathBreadcrumb;
