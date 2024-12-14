"use client";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";

const PaginationLink = () => {
  const [page, setPage] = useState(1);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const handleSearchParams = (pageNumber: string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber) {
      params.set("page", pageNumber);
      params.delete("pageSize");
    } else {
      params.delete("page");
    }
    push(`${pathname}?${params}&pageSize=20`, { scroll: true });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    setPage(page - 1);
                    console.log(page);
                    handleSearchParams((page - 1).toString());
                  }}
                />
              </PaginationItem>
            )}

            <PaginationItem>
              <Link href={""}>{page}</Link>
            </PaginationItem>

            {page < 5 && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    setPage(page + 1);
                    console.log(page);
                    handleSearchParams((page + 1).toString());
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Suspense>
  );
};

export default PaginationLink;
