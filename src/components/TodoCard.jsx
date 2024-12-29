import { Button, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TodoCard = ({ id, todo, getTodoDetails }) => {
	// console.log(todoItem);

	return (
		<div>
			<section>
				<Card
					sx={{
						background: "#999",
					}}
				>
					<CardContent>
						<Typography variant="h6">{todo}</Typography>
						<Button onClick={() => getTodoDetails(id)} variant="contained">
							View Details
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default TodoCard;

TodoCard.propTypes = {
	id: PropTypes.number,
	todo: PropTypes.string,
	getTodoDetails: PropTypes.node,
};
