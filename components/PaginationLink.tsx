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
import { Suspense } from "react";
import { useRouter } from "next/navigation";

const PaginationLink = () => {
  // Derive page from the route search params so the component always
  // reflects the current URL. Keep pageSize=20 as default.
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pageParam = searchParams?.get("page");
  const page = pageParam ? Math.max(1, parseInt(pageParam, 10) || 1) : 1;

  const handleSearchParams = (pageNumber?: number) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber && pageNumber > 0) {
      params.set("page", String(pageNumber));
    } else {
      params.delete("page");
    }
    // Ensure pageSize is always set to 20
    params.set("pageSize", "20");
    push(`${pathname}?${params.toString()}`, { scroll: true });
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
                    handleSearchParams(page - 1);
                  }}
                />
              </PaginationItem>
            )}

            <PaginationItem>
              <Link
                href={`${pathname}?${new URLSearchParams({
                  ...Object.fromEntries(searchParams ?? []),
                  page: String(page),
                  pageSize: "20",
                }).toString()}`}>
                {page}
              </Link>
            </PaginationItem>

            {page < 5 && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    handleSearchParams(page + 1);
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
