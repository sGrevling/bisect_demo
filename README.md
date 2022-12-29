# Git Bisect Demo Project

## Project setup
- clone repo
- run ```npm i``` or ```yarn``` to install dependencies.
- run ```npm start to run on localhost:1337```

The fantastic button does nothing in the latest version; this is a bug.
If we can find out when the bug was introduced it might make it easier to fix it!
Enter git bisect.

## Git bisect
Git bisect uses a binary search to help you find an evil comit ASAP.
Starting out the scope of the search must be defined: a bad commit (where the bug exists), and the latest known good commit (where it didn't).

### Setup
- Checkout a bad commit (e.g. the latest one)
- ```git bisect start``` to start the process
- ```git bisect bad``` to define one end of the binary search
- ```git bisect good ###``` with ### as a commit where the bug did not exist (e.g. ```b3bdc59c```, v1 of the app)


### The cycle
The bisector will now checkout a new commit and you need to tell it if this is a good commit where the bug does not exist or a bad one where it does:

```git bisect good``` or ```git bisect bad```

This can be automated using tests:
```git bisect run <test-script>```

The test script must return ```0``` for good commits and not for bad ones. This is standard behaviour for testing libraries.

If the tests were already in place you shouldn't end up in this situation in the first place. 
Luckily you can add a test now, try adding this to `App.test.js`:
```
test('fantastic_button_works', () => {
  render(<App />);
  const button = screen.getByText(/Gjør mer fantastisk/i);
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(screen.getByTestId('amount-fantastic')).toHaveTextContent('2 fantastisk!');
});
```

Then, after the bisect process is started and the scope defined we can run:

```git bisect run jest -t  "fantastic_button_works"```

The cycle should end by telling us which commit introduced the bug.
