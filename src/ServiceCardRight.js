import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function ServiceCardRight(props) {
    return (
      <Card className="flex-row w-full max-w-full my-10">
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">{props.category}</Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {props.title}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 px-0">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-l-none">
          <img 
            src= {props.image}
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
      </Card>
    );
  }