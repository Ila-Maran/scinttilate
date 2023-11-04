import React, { useEffect, useState } from "react";
import { Button, HStack } from "@chakra-ui/react";

const Pagination = ({
  totalCounts,
  pages,
  currrentPage,
  setCurrentPage,
  circularValue,
  setCircularValue,
  load,
  setLoad,
}) => {
  console.log("totalCounts", totalCounts);

  return (
    <HStack
      spacing="4"
      mx={"auto"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      my={"4"}
    >
      {pages?.length > 0 &&
        pages?.map((item, i) => (
          <Button
            onClick={() => {
              setCurrentPage(item);
              setLoad(true);
              setCircularValue(0);
            }}
            variant="outline"
          >
            {item}
          </Button>
        ))}
      {/* Add more buttons based on the number of pages */}
    </HStack>
  );
};

export default Pagination;
