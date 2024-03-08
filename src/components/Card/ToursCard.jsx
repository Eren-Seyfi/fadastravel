"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
const ToursCard = ({ props }) => {
  return (
    <Link href={props.Link} className="hover:scale-105 transition ">
      <Card className="w-96 shadow-lg">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={props.Image} alt={props.Headers} />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h6" color="gray" className="font-medium">
              Private Tours
            </Typography>
          </div>
          <Typography variant="h5" color="black">
            {props.Headers}
          </Typography>
        </CardBody>
        <CardFooter className="py-10">
          <div className="text-end">
            <span>From </span>
            <span className="text-black font-bold text-xl">
              {props.Currency}
              {props.Price}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ToursCard;
