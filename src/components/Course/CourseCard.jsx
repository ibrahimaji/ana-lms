"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const CourseCard = ({tema, subtema, judul}) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{tema}</p>
        <small className="text-default-500">{subtema}</small>
        <h4 className="font-bold text-large">{judul}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/writing.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};
