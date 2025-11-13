"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LessonResources from "./LessonResources";
import LessonQA from "./LessonQA";
import LessonOverview from "./LessonOverview";

const LessonTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1">
        <TabsTrigger value="overview" className="text-sm md:text-base">
          Overview
        </TabsTrigger>
        <TabsTrigger value="resources" className="text-sm md:text-base">
          Resources
        </TabsTrigger>
        <TabsTrigger value="notes" className="text-sm md:text-base">
          Q & A
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <LessonOverview />
      </TabsContent>
      <TabsContent value="resources">
        <LessonResources />
      </TabsContent>
      <TabsContent value="notes">
        <LessonQA />
      </TabsContent>
    </Tabs>
  );
};
export default LessonTabs;
