"use client";
import { SearchSchema, SearchSchemaTypes } from "@/schema";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { DateRange } from "react-day-picker";
import { format, subDays } from "date-fns";
import DateRangePicker from "./DateRangePicker";
import SortBy from "./SortBy";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Search } from "lucide-react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const [isPending, startTransition] = useTransition();
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });
  const router = useRouter();
  const form = useForm<z.infer<typeof SearchSchema>>({
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
    router.refresh();
    startTransition(() => {
      router.push(
        `/search/?term=${values.term}&sortBy=${values.sortBy}&from=${format(
          values.dateRange.from,
          "yyyy-MM-dd"
        )}&to=${format(values.dateRange.to, "yyyy-MM-dd")}&pageSize=20&page=1`
      );
    });
  };
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Form {...form}>
      <form
        className="max-w-6xl flex-col space-y-3 mt-4 mx-auto"
        onSubmit={form.handleSubmit(handleSearch)}>
        {/* Mobile View (Accordion) */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem value="search">
              <FormField
                control={form.control}
                name="term"
                render={({ field }) => (
                  <FormItem className="w-full flex space-x-2 ">
                    <FormControl>
                      <Input
                        className="grow rounded-sm placeholder-gray-500 text-gray-500 outline-hidden bg-transparent dark:text-orange-400"
                        {...field}
                        placeholder="Search Keywords...."
                        type="text"
                      />
                    </FormControl>

                    <Button
                      className="flex-none text-orange-400 disabled:text-gray-400"
                      variant={"outline"}
                      size={"icon"}
                      type="submit"
                      disabled={isPending}>
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button
                      asChild
                      variant={"outline"}
                      size={"icon"}
                      className="flex-none text-orange-400 ">
                      <AccordionTrigger />
                    </Button>
                  </FormItem>
                )}
              />

              <AccordionContent>
                <FormField
                  control={form.control}
                  name="sortBy"
                  render={({ field }) => (
                    <SortBy field={field} isPending={isPending} />
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateRange"
                  render={({ field }) => (
                    <DateRangePicker
                      field={field}
                      date={date}
                      setDate={setDate}
                    />
                  )}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop View (No Accordion) */}
        <div className="hidden lg:flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="term"
            render={({ field }) => (
              <FormItem className="w-full flex space-x-2">
                <FormControl>
                  <Input
                    className="flex-1 rounded-sm placeholder-gray-500 text-gray-500 outline-hidden bg-transparent dark:text-orange-400"
                    {...field}
                    placeholder="Search Keywords...."
                    type="text"
                  />
                </FormControl>
                <Button
                  className="flex-none bg-orange-400 disabled:text-gray-400"
                  variant={"outline"}
                  type="submit"
                  disabled={isPending}>
                  Search
                </Button>
              </FormItem>
            )}
          />
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="sortBy"
              render={({ field }) => (
                <SortBy field={field} isPending={isPending} />
              )}
            />

            <FormField
              control={form.control}
              name="dateRange"
              render={({ field }) => (
                <DateRangePicker field={field} date={date} setDate={setDate} />
              )}
            />
          </div>
        </div>
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
          className="flex-1 w-full rounded-sm placeholder-gray-500 text-gray-500 outline-hidden bg-transparent dark:text-orange-400"
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
