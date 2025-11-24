"use client";

import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LessonOverview from "./LessonOverview";
import LessonResources from "./LessonResources";
import LessonQA from "./LessonQA";
import { Lesson } from "@/types/student";

interface LessonTabsProps {
  lesson: Lesson;
}

const LessonTabs: FC<LessonTabsProps> = ({ lesson }) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid grid-cols-3 bg-gray-100 p-1 rounded-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="qa">Q & A</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <LessonOverview
          title={lesson.title}
          duration={lesson.duration}
          difficulty={lesson.difficulty}
          overview={lesson.overview}
          whatYouWillLearn={lesson.whatYouWillLearn}
        />
      </TabsContent>

      <TabsContent value="resources">
        <LessonResources resources={lesson.resources} />
      </TabsContent>

      <TabsContent value="qa">
        <LessonQA />
      </TabsContent>
    </Tabs>
  );
};

export default LessonTabs;
