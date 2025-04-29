"use client";
import { createContext, useState } from "react";

type CreateProjectContextType = {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
};

export const CreateProjectContext = createContext<CreateProjectContextType>({
  dialogOpen: false,
  setDialogOpen: () => {},
});

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <CreateProjectContext.Provider value={{ dialogOpen, setDialogOpen }}>
      {children}
    </CreateProjectContext.Provider>
  );
};
