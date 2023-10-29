/** @format */

const showBooksButton = document.getElementById("show-books");
showBooksButton.addEventListener("click", (event) => {
	bookStore.handleClick(event);
});

const bookListItem = document.getElementsByClassName("books");
// Add the click event listener to all the html elements in the bookListItem array
for (let i = 0; i < bookListItem.length; i++) {
	const element = bookListItem[i];
	element.addEventListener("click", (event) => {
		shoppingCart.addItemIntoCart(event);
	});
}

const booksContainer = document.getElementById("books-in-store");
const cartContainer = document.getElementById("books-in-cart");

let clickCounter = 0;

const bookStore = {
	books: [
		"The Lord of the Rings",
		"The Kite Runner",
		"Harry Potter and the Philosopher's Stone",
		"Slaughterhouse-Five",
		"The Lion, the Witch, and the Wardrobe",
		"To Kill a Mockingbird",
		"The Book Thief",
		"The Holy Bible",
		"The Origin of Species",
		"The Name of the Wind",
		"The Code Breaker",
	],
	displayBookStore() {
		const renderTarget = booksContainer;
		const bookList = this.books.map((book) => {
			const mappedOutBooks = `<li class="books">
						<label>
							<input type="checkbox" name="books" />
						    ${book}
						</label>
					</li> `;
			return mappedOutBooks;
		});
		renderTarget.innerHTML = bookList.join("");
	},
	handleClick(action) {
		if (action.target.id == "show-books") {
			clickCounter++;

			if (clickCounter % 2 != 0) {
				if (clickCounter > 1) {
					booksContainer.style.display = "block";
				} else {
					this.displayBookStore();
				}
			} else {
				booksContainer.style.display = "none";
			}
		}
	},
};

const shoppingCart = {
	itemsinCart: [],
	displayCart() {
		const renderTarget = cartContainer;
		const bookList = this.itemsinCart.map((book) => {
			const mappedOutBooks = `<li class="books-in-cart">
						<label>
							<input type="checkbox" name="books" />
						    ${book}
						</label>
					</li> `;
			return mappedOutBooks;
		});
		renderTarget.innerHTML = bookList.join("");
	},
	addItemIntoCart(book) {
		let com;
	},
};

// Testing

let testingDiv = document.getElementById("test");

let testingChild = document.createElement("p");
testingChild.innerHTML = "Testing now";
console.log(testingChild);

testingDiv.appendChild(testingChild);
