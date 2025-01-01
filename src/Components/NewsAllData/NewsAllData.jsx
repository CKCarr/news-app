import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsAllData = ({data}) => {
    const {newsCategory, newsDescription, newsPreviewImage, newsTitle} = data;

  return (
    <Card className=" border-8  border-indigo-500 ">
        <CardHeader floated={false} color="blue-gray" className="relative h-56 border-x-8 border-t-8 border-indigo-500 ">
            <img
            src={newsPreviewImage}
            alt="News Preview Image"
            />
        </CardHeader>
        <CardBody >

            <Typography variant="h5" color="blue-gray" className="mb-2">{newsTitle}

            </Typography>

            <Typography>
            {newsDescription.slice(0, 145)}
            </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant='small'
            color="blue-gray" className="mb-2 capitalize">
                <span className='font-semibold'>Category: </span>
            {newsCategory}
            </Typography>
            <Button color='teal'>Read More</Button>
        </CardFooter>
    </Card>
  )
}

export default NewsAllData
