// components/OrderDetailsDialog.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { Order } from "../types/OrderTypes";

interface OrderDetailsDialogProps {
  open: boolean;
  order: Order | null;
  onClose: () => void;
}

const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({
  open,
  order,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Order Details (Order #{order?.OrderID})</DialogTitle>
      <DialogContent dividers>
        {order?.Items.map((item, index) => (
          <React.Fragment key={item.ItemID}>
            <Typography gutterBottom variant="h6">
              {item.ItemDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <List>
                {item.Ingredients.map((ing) => (
                  <ListItem key={item.Ingredients.IngredientID}>
                    {ing.IngredientDescrption}
                  </ListItem>
                ))}
              </List>
            </Typography>
            {index < order.Items.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsDialog;
