import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";
import PropTypes from "prop-types";

const TodoDetails = ({
	todoDetails,
	openModal,
	setOpenModal,
	setTodoDetails,
}) => {
	return (
		<Fragment>
			<Dialog open={openModal} onClose={() => setOpenModal(false)}>
				<DialogTitle>{todoDetails?.todo}</DialogTitle>
				<DialogActions>
					<Button
						onClick={() => {
							setTodoDetails(false);
							setOpenModal(false);
						}}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default TodoDetails;

TodoDetails.propTypes = {
	openModal: PropTypes.bool,
	todoDetails: PropTypes.bool,
	setOpenModal: PropTypes.bool,
	setTodoDetails: PropTypes.bool,
};
