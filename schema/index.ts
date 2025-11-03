import * as z from "zod";
export const SearchSchema = z.object({
  term: z
    .string()
    .min(1, { message: "Search term must be at least 1 character" }),
  sortBy: z.enum(["relevancy", "popularity", "publishedAt"]),
  dateRange: z
    .object({
      from: z
        .date({ error: "Please select a start date" })
        .max(new Date(), { message: "Start date must be before today" }),
      to: z.date({ error: "Please select an end date" }),
    })
    .refine((dateRange) => dateRange.from <= dateRange.to, {
      message: "Start date must be before end date",
      path: ["to"],
    }),
  page: z.number().int().positive().default(1).optional(),
  pageSize: z.number().int().positive().default(20).optional(),
});

export type SearchSchemaTypes = z.infer<typeof SearchSchema>;
