import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import App from './App';
import * as BooksAPI from './BooksAPI'; // mocked
import { diffByKey as ArrayDiffByKey } from './utils/ArrayUtils';
import { TShelfKey } from './shared/types';

describe('App', () => {
  const fn = {};

  const withRouter = Component => (
    <MemoryRouter>
      {Component}
    </MemoryRouter>
  );

  beforeEach(() => {
    BooksAPI.resetBooks();
  });

  it('triggers componentDidMount and fetchAllBooks when mounted', async () => {
    const componentDidMount = jest.spyOn(App.prototype, 'componentDidMount');
    const fetchAllBooks = jest.spyOn(App.prototype, 'fetchAllBooks');

    const wrapper = shallow(<App />);
    const component = wrapper.instance();

    expect(componentDidMount).toHaveBeenCalledTimes(1);
    expect(fetchAllBooks).toHaveBeenCalledTimes(1);

    await component.async.fetchAllBooks;
    componentDidMount.mockRestore();
    fetchAllBooks.mockRestore();
  });


  it('renders without crashing', (done) => {
    const div = document.createElement('div');
    let component;
    ReactDOM.render(
      withRouter(<App ref={c => component = c} />), div, // eslint-disable-line no-return-assign
      async () => {
        await component.async.fetchAllBooks;
        ReactDOM.unmountComponentAtNode(div);
        done();
      },
    );
  });


  it('renders correctly', async () => {
    const testRenderer = TestRenderer.create(
      withRouter(<App />),
    );
    const { root } = testRenderer;
    const component = root.findByType(App).instance;
    const tree = testRenderer.toJSON();

    await component.async.fetchAllBooks;
    expect(tree).toMatchSnapshot();
  });


  it('retrieves the correct shelf associated with a given book', async () => {
    const wrapper = shallow(<App />);
    const component = wrapper.instance();
    await component.async.fetchAllBooks;

    const expectedArr = [
      { id: 'nggnmAEACAAJ', shelf: TShelfKey.CURRENTLY_READING },
      { id: 'evuwdDLfAyYC', shelf: TShelfKey.WANT_TO_READ },
      { id: 'jAUODAAAQBAJ', shelf: TShelfKey.READ },
      { id: 'tXrPCgAAQBAJ', shelf: TShelfKey.NONE },
    ];

    expect.assertions(8);

    const promises = expectedArr.map(expected => new Promise(async (resolve) => {
      // 1. The shelf retrieved with getBookShelf matches the expected one
      const shelf = component.getBookShelf(expected.id);
      expect(shelf).toBe(expected.shelf);

      // 2. Double checking that the stored book contains the expected shelf
      const book = await BooksAPI.get(expected.id);
      expect(book).toEqual(expect.objectContaining(expected));

      resolve();
    }));

    await Promise.all(promises);
  });


  describe('state behaviour', () => {
    describe('state status behaviour', () => {
      const { STATUS } = App;

      let wrapper;
      let component;
      let calls;

      // The tests below are designed to be executed in sequence.
      // Test 1/4
      it('should contain BookLoader as a child when the status is INITIAL', () => {
        fn.render = jest.spyOn(App.prototype, 'render');
        calls = fn.render.mock.calls.length;
        wrapper = shallow(<App />);
        component = wrapper.instance();

        expect(fn.render.mock.calls).toHaveLength(calls += 1);
        expect(wrapper.state().status).toBe(STATUS.INITIAL);

        expect(wrapper.find('BookLoader')).toHaveLength(1);
        expect(wrapper.find('PanelError')).toHaveLength(0);
        expect(wrapper.find('Navigation')).toHaveLength(0);
      });

      // Test 2/4
      it('should contain Navigation as a child when the status is READY', async () => {
        await component.async.fetchAllBooks;

        expect(fn.render.mock.calls).toHaveLength(calls += 1);
        expect(wrapper.state().status).toBe(STATUS.READY);

        expect(wrapper.find('BookLoader')).toHaveLength(0);
        expect(wrapper.find('PanelError')).toHaveLength(0);
        expect(wrapper.find('Navigation')).toHaveLength(1);
      });

      // Test 3/4
      it('should not trigger a render when the status is BUSY', () => {
        wrapper.setState({ status: STATUS.BUSY });
        expect(fn.render.mock.calls).toHaveLength(calls);
        expect(wrapper.state().status).toBe(STATUS.BUSY);
      });

      // Test 4/4
      it('should contain PanelError as a child when the status is ERROR', async () => {
        const update = jest.spyOn(BooksAPI, 'update')
          .mockImplementation(() => new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('testing: STATUS.ERROR'));
            }, 50);
          }));

        const book = await BooksAPI.get('nggnmAEACAAJ');
        const shelf = TShelfKey.WANT_TO_READ;
        await component.updateBookShelf(book, shelf);

        expect(fn.render.mock.calls).toHaveLength(calls += 1);
        expect(wrapper.state().status).toBe(STATUS.ERROR);

        expect(wrapper.find('BookLoader')).toHaveLength(0);
        expect(wrapper.find('PanelError')).toHaveLength(1);
        expect(wrapper.find('Navigation')).toHaveLength(0);

        update.mockRestore();
        fn.render.mockRestore();
      });
    });


    describe('state booksInShelves behaviour', () => {
      it('fetches the books correctly when the App is mounted and stores them as state', async () => {
        const expected = {
          books: await BooksAPI.getAll(),
        };
        const wrapper = shallow(<App />);
        const component = wrapper.instance();
        await component.async.fetchAllBooks;

        const diffArr = ArrayDiffByKey('id', expected.books, wrapper.state().booksInShelves);
        expect(diffArr).toHaveLength(0);
      });

      it('should contain PanelError as a child if an exception is thrown when fetching the books initially', async () => {
        const { STATUS } = App;
        const getAll = jest.spyOn(BooksAPI, 'getAll')
          .mockImplementation(() => new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('testing: fetchAllBooks error'));
            }, 50);
          }));

        const wrapper = shallow(<App />);
        const component = wrapper.instance();
        const books = await component.async.fetchAllBooks;

        expect(books).toHaveLength(0);
        expect(wrapper.state().status).toBe(STATUS.ERROR);
        expect(wrapper.find('BookLoader')).toHaveLength(0);
        expect(wrapper.find('PanelError')).toHaveLength(1);
        expect(wrapper.find('Navigation')).toHaveLength(0);

        getAll.mockRestore();
      });

      it('properly removes a book and updates the state accordingly', async () => {
        const wrapper = shallow(<App />);
        const component = wrapper.instance();
        await component.async.fetchAllBooks;
        const initialBooksInShelves = wrapper.state().booksInShelves;

        const book = initialBooksInShelves[0]; // will remove the first book
        await component.updateBookShelf(book, TShelfKey.NONE);
        const { booksInShelves } = wrapper.state();
        {
          // 1. One book has ben removed
          expect(booksInShelves).toHaveLength(initialBooksInShelves.length - 1);

          // 2. The expected book has been removed
          const diffArr = ArrayDiffByKey('id', booksInShelves, initialBooksInShelves);
          const removedBook = diffArr[0];
          const expected = {
            id: book.id,
          };
          expect(removedBook).toEqual(expect.objectContaining(expected));
        }
        {
          // 3. The removed book is now stored as NOT associated with any shelf
          const removedBook = await BooksAPI.get(book.id);
          const expected = {
            id: book.id,
            shelf: TShelfKey.NONE,
          };
          expect(removedBook).toEqual(expect.objectContaining(expected));
        }
      });


      it('properly adds a new book and updates the state accordingly', async () => {
        const wrapper = shallow(<App />);
        const component = wrapper.instance();
        await component.async.fetchAllBooks;
        const initialBooksInShelves = wrapper.state().booksInShelves;

        // A new book is added
        const expected = {
          id: '1OJ8EhvuPXAC',
          shelf: TShelfKey.WANT_TO_READ, // Moving from NONE
        };
        const book = await BooksAPI.get(expected.id);
        await component.updateBookShelf(book, expected.shelf);
        const { booksInShelves } = wrapper.state();

        expect.assertions(3);
        {
          // 1. One book has ben added
          expect(booksInShelves).toHaveLength(initialBooksInShelves.length + 1);

          // 2. The expected book has been added
          const diffArr = ArrayDiffByKey('id', booksInShelves, initialBooksInShelves);
          const addedBook = diffArr[0];
          expect(addedBook).toEqual(expect.objectContaining(expected));
        }
        {
          // 3. The added book is now stored as expected
          const addedBook = await BooksAPI.get(expected.id);
          expect(addedBook).toEqual(expect.objectContaining(expected));
        }
      });


      it('properly moves a book to a different shelf and updates the state accordingly', async () => {
        const wrapper = shallow(<App />);
        const component = wrapper.instance();
        await component.async.fetchAllBooks;
        const initialBooksInShelves = wrapper.state().booksInShelves;

        // A book needs to move to a different shelf
        const expected = {
          id: 'nggnmAEACAAJ',
          shelf: TShelfKey.READ, // moving from CURRENTLY_READING
        };
        const book = await BooksAPI.get(expected.id);
        await component.updateBookShelf(book, expected.shelf);
        const { booksInShelves } = wrapper.state();

        // 1. No book has been added or removed
        expect(booksInShelves).toHaveLength(initialBooksInShelves.length);

        // 2. The expected book has been moved
        const movedBook = await BooksAPI.get(expected.id);
        expect(movedBook).toEqual(expect.objectContaining(expected));
      });
    });
  });
});
