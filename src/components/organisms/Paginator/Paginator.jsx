import React, { useMemo, useState } from "react";
import styles from "./paginator.module.css";
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import IconButton from "../../molecules/IconButton/IconButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../atoms/StyledSelect/StyledSelect";
const Paginator = ({
  onPageChange,
  onNumPageChange,
  totalElements,
  elementsPerPage,
  maxRows = 4,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
    onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === numPages) return;
    setCurrentPage((prev) => prev + 1);
    onPageChange(currentPage + 1);
  };
  const handleNumPageChange = (value) => {
    onNumPageChange(parseInt(value));
  };
  const calculateNumPages = () => {
    setCurrentPage(1);
    onPageChange(1);
    return Math.ceil(totalElements / elementsPerPage);
  };

  const numPages = useMemo(calculateNumPages, [elementsPerPage]);

  return (
    <div className={styles.paginator}>
      <div className={styles.rowPerPage}>
        <Text>Rows per page</Text>
        <Select defaultValue="5" onValueChange={handleNumPageChange}>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="5" defaultValue={"5"} />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={styles.pages}>
        <Text>
          page {currentPage} of {numPages}
        </Text>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <IconButton
              size={"24px"}
              icon={"doubleArrowLeft"}
              onClick={() => {
                if (currentPage === 1) return;
                setCurrentPage(1);
                onPageChange(1);
              }}
            />
          </div>
          <div className={styles.btn}>
            <IconButton
              size={"24px"}
              icon={"singleArrowLeft"}
              onClick={prevPage}
            />
          </div>
          <div className={styles.btn}>
            <IconButton
              size={"24px"}
              icon={"singleArrowRight"}
              onClick={nextPage}
            />
          </div>
          <div className={styles.btn}>
            <IconButton
              size={"24px"}
              icon={"doubleArrowRight"}
              onClick={() => {
                if (currentPage === numPages) return;
                setCurrentPage(numPages);
                onPageChange(numPages);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
