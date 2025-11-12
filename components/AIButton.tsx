"use client";
import { SiGooglegemini } from "react-icons/si";
import { Button } from "./ui/button";
import { genkitPrompt } from "@/actions/genkit/menuSuggestionFlow";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  article: ArticlesEntry;
};

const AIButton = ({ article }: Props) => {
  const [response, setResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const aiResponse = await genkitPrompt(article.content);
      console.log("AI Response:", aiResponse);
      setResponse(aiResponse.summary);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error generating response");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button onClick={handleClick} variant="outline" size="icon">
          <SiGooglegemini className="h-5 w-5 text-orange-400" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h2 className="font-bold mb-4">AI Summary</h2>
          {isLoading ? (
            <div className="text-gray-500 flex space-y-2 flex-col">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : response ? (
            <div className="whitespace-pre-wrap text-sm">{response}</div>
          ) : (
            <div className="text-gray-500">
              Click the button to generate a response
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AIButton;
