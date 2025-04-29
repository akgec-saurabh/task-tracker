import Header from "@/components/header";
import ProjectDialogForm from "@/components/project-dialog-form";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container">
        <div className="flex flex-col gap-4 my-4">
          {children}
          <ProjectDialogForm />
        </div>
      </main>
    </>
  );
}
