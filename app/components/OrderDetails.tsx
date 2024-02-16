"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { order } from "./orderData";

function OrderDetails({}) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Order Number: {order.OrderID}
        </Typography>
        {order.Items.map((item, index) => (
          <React.Fragment key={item.ItemID}>
            <Typography variant="h6" color="text.secondary">
              {item.ItemDescription}
            </Typography>
            <List dense>
              {item.Ingredients.map((ingredient) => (
                <ListItem key={ingredient.IngredientID}>
                  <ListItemText primary={ingredient.IngredientDescrption} />
                </ListItem>
              ))}
            </List>
            {index < order.Items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}

export default OrderDetails;
