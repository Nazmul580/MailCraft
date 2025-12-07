import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const CreateTemplatePage = () => {
  return (
    <section className="container mx-auto px-5 lg:px-0">
      <div className=" py-10 flex flex-col items-center">
        <h1 className=" text-primary font-bold text-lg sm:text-3xl capitalize ">
          Create Your Email Template
        </h1>

        <h5 className="text-center text-gray-500 sm:ont-semibold text-xs sm:text-sm">
          Use the power of AI to instantly generate a ready-to-use email
          template from your idea, or start from scratch and build a fully
          customized design exactly the way you want.
        </h5>
        <div className="mt-5 w-full lg:w-6/12 xl:w-5/12">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList>
              <TabsTrigger value="ai">Create with AI</TabsTrigger>
              <TabsTrigger value="custom">
                <Link href={"/editor"}>Start from scratch</Link>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className={"mt-2"}>
              <div className="space-y-2">
                <Label htmlFor="message-for-create-template">
                  Provide details about the email template you{"'"}d like to
                  create
                </Label>
                <Textarea
                  placeholder="Type your prompt here."
                  className={"min-h-32"}
                />
                <Button className={"w-full my-2"}>Send message</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CreateTemplatePage;
