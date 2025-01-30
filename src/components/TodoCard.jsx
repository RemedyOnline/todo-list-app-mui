import {
	Button,
	Card,
	CardContent,
	Typography,
	CardActions,
} from "@mui/material";
import PropTypes from "prop-types";

const TodoCard = ({ id, todo, getTodoDetails }) => {
	// console.log(todoItem);

	return (
		<div>
			<section>
				<Card
					sx={{
						background: "#999",
						display: "flex",
						maxWidth: "500px",
						minHeight: "100px",
					}}
				>
					<CardContent
						sx={{
							width: "300px",
						}}
					>
						<Typography>{todo}</Typography>
					</CardContent>
					<CardActions>
						<Button onClick={() => getTodoDetails(id)} variant="contained">
							View Details
						</Button>
					</CardActions>
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
