import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";
import { TbFolderCode } from "react-icons/tb";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Hello, {session?.user?.name}</h2>
        <Link href={"/create"}>
          <Button className={"cursor-pointer"}>
            Create New Email Template
          </Button>
        </Link>
      </div>
      <h3 className="text-primary mt-5 text-lg">Workspace</h3>

      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <TbFolderCode />
          </EmptyMedia>
          <EmptyTitle>No Template Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any template yet. Get started by creating
            your first template.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link href={"/create"}>
            <Button className={"cursor-pointer"}>Create Template</Button>
          </Link>
        </EmptyContent>
      </Empty>
    </section>
  );
};

export default DashboardPage;
