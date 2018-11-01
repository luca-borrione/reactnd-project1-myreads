
import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import { makeTitle, ucWords } from './utils/StringUtils'
import PropTypes from 'prop-types'
import { TBook } from './types'


class Book extends React.Component {

	static propTypes = {
		book: PropTypes.shape(TBook).isRequired,
		updateBookShelf: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.onShelfChange = this.onShelfChange.bind(this);
	}

	onShelfChange(shelf) {
		const { book, updateBookShelf } = this.props;
		updateBookShelf(book, shelf);
	}

	render() {
		const { book } = this.props;
		let thumbnail = 'https://books.google.co.uk/googlebooks/images/no_cover_thumb.gif';
		if (book.imageLinks && book.imageLinks.thumbnail) {
			thumbnail = book.imageLinks.thumbnail;
		}

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: 128,
							height: 193,
							backgroundSize: 'cover',
							backgroundImage: 'url('+ thumbnail +')'
						}}></div>
						<div className="book-shelf-changer">

							<BookShelfChanger
								shelf={book.shelf}
								onShelfChange={this.onShelfChange} />

						</div>
					</div>
					<div className="book-title">{makeTitle(book.title)}</div>
					<div className="book-authors">
						{(book.authors || []).map( (author, index) => (
							<span className="author" key={index}>{ucWords(author)}</span>
						))}
					</div>
				</div>
			</li>
		);
	}
}


export default Book;
