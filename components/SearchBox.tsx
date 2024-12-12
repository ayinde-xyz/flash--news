"use client";
import { SearchSchema, SearchSchemaTypes } from "@/schema";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { DateRange } from "react-day-picker";
import { format, subDays } from "date-fns";
import DateRangePicker from "./DateRangePicker";
import SortBy from "./SortBy";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const [isPending, startTransition] = useTransition();
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });
  const router = useRouter();
  const form = useForm<SearchSchemaTypes>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      term: term || "",
      sortBy: "publishedAt",
      dateRange: {
        from: date?.from,
        to: date?.to,
      },
    },
  });
  const handleSearch = (values: SearchSchemaTypes) => {
    startTransition(() => {
      router.push(
        `/search/?term=${values.term}&sortBy=${values.sortBy}&from=${format(
          values.dateRange.from,
          "yyyy-MM-dd"
        )}&to=${format(values.dateRange.to, "yyyy-MM-dd")}&pageSize=20&page=1`
      );
      router.refresh();
    });
  };
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Form {...form}>
      <form
        className="max-w-6xl flex-col md:flex-row space-x-0 space-y-3 md:space-x-3 mt-4 mx-auto flex justify-between items-center"
        onSubmit={form.handleSubmit(handleSearch)}>
        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="flex-1  rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
                  {...field}
                  placeholder="Search Keywords...."
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sortBy"
          render={({ field }) => <SortBy field={field} isPending={isPending} />}
        />

        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <DateRangePicker field={field} date={date} setDate={setDate} />
          )}
        />
        <Button
          className="w-full text-orange-400 disabled:text-gray-400"
          type="submit"
          disabled={isPending}>
          Search
        </Button>
      </form>
    </Form>
    // </Suspense>
  );
};

export default SearchBox;

{
  /* <input
          placeholder="Search Keywords...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-1 w-full rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
        /> */
}
{
  /* <button
          type="submit"
          disabled={!input}
          className="text-orange-400 disabled:text-gray-400">
          Search
        </button> */
}
