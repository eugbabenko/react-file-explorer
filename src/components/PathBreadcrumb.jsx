import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setPath } from '../redux/slice/pathSlice';

const PathBreadcrumb = () => {
    const dispatch = useDispatch();
    const path = useSelector((state) => state.pathSlice.path);
    const pathArray = path.split('/');

    const handleBreadcrumbClick = (link) => {
        const isLastItem = link === pathArray[pathArray.length - 1];

        if (!link) {
            dispatch(setPath(link));
            localStorage.setItem('path', link);
        } else if (!isLastItem) {
            dispatch(setPath(`/${link}`));
            localStorage.setItem('path', `/${link}`);
        }

        return null;
    };

    return (
        <Breadcrumb mb={5}>
            {pathArray?.map((link) => (
                <BreadcrumbItem key={link}>
                    <BreadcrumbLink onClick={() => handleBreadcrumbClick(link)}>{link ? link : 'All files'}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default PathBreadcrumb;
