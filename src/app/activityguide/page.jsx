"use client";
import React, { useState, useEffect } from "react";
import { getDataActivityGuide } from "@/lib/getdata";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ActivityGuide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataActivityGuide();
      setData(result);
    };
    fetchData();
  }, []);

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="w-full  h-full container py-10">
      <div className="flex flex-wrap items-center justify-center md:justify-start w-full gap-10 ">
        {data.map((item, index) => (
          <Card key={index} className="mt-6 w-80">
            <CardHeader color="blue-gray" className="relative ">
              <img src={item.img} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.tittle}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => handleButtonClick(item.pdf)}>
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ActivityGuide;
