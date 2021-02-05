import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Noteable | Simple Notes";
    }
  }, [title]);
};

export default useDocumentTitle;
