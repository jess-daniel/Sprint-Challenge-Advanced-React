- [ ] Why would you use class component over function components (removing hooks from the question)?

Per Dustin, you wouldn't use class components unless it was legacy code and you had to. Hooks are useful.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - The first step in the lifecylce and runs the initial rendering of the DOM one time.

componentDidUpdate - This is used when state or props are updated. UseEffect takes this role in functoinal components.

componentWillUnmount - this is the last step and is when the component is removed from the DOM.

- [ ] What is the purpose of a custom hook?

Custom hooks are used to abstract logic that is used in many different components and can be called in as needed.

- [ ] Why is it important to test our apps?

Testing apps while we develop them leads to less work later when the code is refactored. You test the functionality and not the implementation of the code.
