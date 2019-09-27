import React from 'react';

class CardModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: ''
		};
	}

	render() {
		const { toggleModal } = this.props;
		const { description } = this.state;
		return (
			<div className='card-modal'>
				<div className='card-modal-content'>
					<div className='card-modal-content-title'>
						<h4>
							<span>Sample Card</span>
						</h4>
						<button onClick={toggleModal}>
							<i className='fas fa-times close-modal'></i>Close Card
						</button>
					</div>
					<div className='row'>
						<div className='left-col'>
							<div className='card-modal-details'>
								<section className='col double-col'>
									<div className='description'>
										<h3 className='description-title'>Descriptions</h3>
										<textarea
											rows='5'
											className='description-textarea'
											value={''}
											placeholder='Add a detailed description...'
										></textarea>
										<button>Save</button>
									</div>
								</section>
								<div className='right-col'>
									<aside className='col'>
										<p className='aside-modal-title'>Add To Card</p>
										<button>Checklist</button>
										<button>Label</button>

										<p className='aside-modal-title'>Actions</p>
										<button>
											<span>Delete Card</span>
										</button>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardModal;
