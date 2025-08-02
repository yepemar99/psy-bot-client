import { useState } from "react";
import useChats from "./swr/useChats";

const usePaginationChats = ({ userId = "" }) => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const { data, isLoading, error } = useChats(page, perPage, userId);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    /* mutate(); */
  };

  return {
    data: data?.data || [],
    isLoading: isLoading,
    error,
    page,
    handlePageChange,
  };
};

export default usePaginationChats;
