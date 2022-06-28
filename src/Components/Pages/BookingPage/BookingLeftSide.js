import { Box, Card, CardContent, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import './BookingLeftSide.css';

const BookingLeftSide = ({data}) => {
    

    
    const { name, img, fees, location, rating,specialized } = data;
    return (
        
            <Card
                
                style={{ padding: "20px", borderRadius: "20px"}}
                className="booking-card"
            >
                <Box>
                    <img
                        src={img}
                        alt={`img of ${name}`}
                        width={"200rem"}
                        style={{ borderRadius: "20px" }}
                    />
                </Box>
                <CardContent>
                    <Typography
                        style={{ margin: "2px auto" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        <p style={{ margin: "2px auto" }}>{location}</p>
                        <Rating name="read-only" value={Number(rating)} precision={0.5} readOnly />
                        <h3 style={{ margin: "2px auto" }}> $ {fees} </h3>
                        <h3 style={{ margin: "2px auto",color:'#E95A7C' }}>{specialized} specialist</h3>
                    </Typography>
                </CardContent>
            </Card>
        
    );
};

export default BookingLeftSide;
