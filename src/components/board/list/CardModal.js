import React from 'react';

class CardModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='card-modal'>
				<div className='card-modal-content'>
					<div className='card-modal-content-title'>
						<h4>
							<span>Sample Card</span>
						</h4>
						<button>Close Card</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CardModal;
