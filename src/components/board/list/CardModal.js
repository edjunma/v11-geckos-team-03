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
                <div className="right-col">
                  <p>Add To Card</p>
                  <button></button>
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
