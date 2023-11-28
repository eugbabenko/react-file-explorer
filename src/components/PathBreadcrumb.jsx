import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setPath } from '../redux/slice/pathSlice';

/**
 * PathBreadcrumb Component
 *
 * A component that displays breadcrumbs for the current path and allows navigation through them.
 *
 * @component
 * @returns {JSX.Element} - The rendered PathBreadcrumb component.
 */
const PathBreadcrumb = () => {
    // Redux state for the current path
    const path = useSelector((state) => state.pathSlice.path);
    const dispatch = useDispatch();

    // Split the path into an array of breadcrumb links
    const pathArray = path.split('/');

    /**
     * Handles the click event on a breadcrumb link.
     * Updates the path based on the clicked link and stores it in localStorage.
     *
     * @param {string} link - The clicked breadcrumb link.
     * @returns {null} - Always returns null.
     */
    const handleBreadcrumbClick = (link) => {
        // Check if the clicked link is the last item in the path to avoid fetching items if user stay in current path
        const isLastItem = link === pathArray[pathArray.length - 1];
        if (!isLastItem) {
            // If the link is not the last item, update the path accordingly.
            const indexPath = pathArray.indexOf(link);
            const newPath = pathArray.slice(0, indexPath + 1).join('/');
            dispatch(setPath(newPath));
            localStorage.setItem('path', newPath);
        }
    };

    return (
        <Breadcrumb mb={5}>
            {/* Map through the pathArray to generate breadcrumb items */}
            {pathArray?.map((link) => (
                <BreadcrumbItem key={link}>
                    {/* Display the link or 'All files' if it's empty (user in root directory) */}
                    <BreadcrumbLink onClick={() => handleBreadcrumbClick(link)}>{link ? link : 'All files'}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default PathBreadcrumb;
