# internet-provider-ui

This is the service provider front-end for a little demonstration of my abilities to develop applications. They mock Internet service provider for customers to order Internet services.

Here are the other applications in this service provider project. These APIs are required for the UI to perform its function of allowing customers to order.

- https://github.com/krisbelangernelson/internet-services-api
- https://github.com/krisbelangernelson/internet-customers-api
- https://github.com/krisbelangernelson/internet-orders-api

Tech used:
- Typescript React with Webpack
- Node Express backend to serve the build
- Bootstrap for styling
- Formik for forms


## Vercel deployment

The work-in-progress can be viewed at https://internet-provider-ui-pearl.vercel.app/


## Payment testing
- From https://docs.stripe.com/testing

Testing interactively

When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.

# Troubleshooting

## Husky with GitHub Desktop on Windows

If you get errors for `/usr/bin/env: 'bash': No such file or directory`, install Git Bash for Windows with the `Use Git and optional Unix tools from the Command Prompt` option, as detailed [here](https://github.com/typicode/husky/issues/950).

If that's fixed and you try again with errors for `npm ERR! Cannot read properties of undefined (reading 'stdin')`, run this command `npm config set script-shell "C:\Program Files\Git\bin\bash.exe"`

Now GitHub Desktop will work with husky, and you don't have to use the command line to make commits.
