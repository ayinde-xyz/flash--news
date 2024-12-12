import { FormControl, FormItem, FormMessage } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { ControllerRenderProps } from "react-hook-form";
import { SearchSchemaTypes } from "@/schema";

type Props = {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  field: ControllerRenderProps<SearchSchemaTypes, "dateRange">;
};

const DateRangePicker = ({ date, setDate, field }: Props) => {
  return (
    <>
      <FormItem className="w-full">
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
                field.onChange(newDate);
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default DateRangePicker;
