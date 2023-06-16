import { useEffect } from 'react';

/**
 * Custom hook to update the document title.
 *
 * @param {string} title - The new title for the document.
 */
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
