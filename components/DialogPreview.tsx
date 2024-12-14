"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  children: React.ReactNode;
  article: ArticlesEntry;
};

const DialogPreview = ({ children, article }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{article.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{article.description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPreview;
