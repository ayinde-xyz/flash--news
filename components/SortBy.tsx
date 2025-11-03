import { FormControl, FormItem, FormMessage } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ControllerRenderProps } from "react-hook-form";
import { SearchSchemaTypes } from "@/schema";

type Props = {
  field: ControllerRenderProps<SearchSchemaTypes, "sortBy">;
  isPending: boolean;
};

const SortBy = ({ field, isPending }: Props) => {
  return (
    <FormItem className="w-full">
      <Select
        disabled={isPending}
        onValueChange={field.onChange}
        defaultValue="relevancy">
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value={"relevancy"}>Relevancy</SelectItem>
          <SelectItem value={"popularity"}>Popularity</SelectItem>
          <SelectItem value={"publishedAt"}>Date Published</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};

export default SortBy;
