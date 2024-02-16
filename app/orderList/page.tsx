import React, { useState } from "react";
import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Container,
} from "@mui/material";
import OrderDetailsDialog from "../components/OrderDetailsDialog";
import { Order } from "../types/OrderTypes";

// Import or fetch your orders data
import { orders } from "../orderData";

export default function OrdersPage() {
	const [open, setOpen] = useState<boolean>(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

	const handleOpen = (order: Order) => {
		setSelectedOrder(order);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container maxWidth='lg'>
			<Typography
				variant='h4'
				gutterBottom
			>
				Order List
			</Typography>
			<Grid
				container
				spacing={2}
			>
				{orders.map((order) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={order.OrderID}
					>
						<CardActionArea onClick={() => handleOpen(order)}>
							<Card>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
									>
										Order #{order.OrderID}
									</Typography>
									<Typography variant='body2'>
										Items: {order.Items.length}
									</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>
			<OrderDetailsDialog
				open={open}
				order={selectedOrder}
				onClose={handleClose}
			/>
		</Container>
	);
}
