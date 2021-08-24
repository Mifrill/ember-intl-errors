ember-intl-errors
==============================================================================

This addon is [ember-i18n-errors](https://github.com/cibernox/ember-i18n-errors) implementation for [ember-intl](https://github.com/ember-intl/ember-intl).

It adds to your app a handy helper `{{t-error error}}` for translating errors in the context of
the current route, but also takes advantage of Ember's route nesting to lookup translations in fallback on
parent routes.

Installation
------------------------------------------------------------------------------

```
ember install ember-intl-errors
```


Usage
------------------------------------------------------------------------------

This is better explained with an example.

Let's say we have a validation error with the mandatory shape (`{ attribute: 'email', message: 'invalid' }`) and
some nested routes with this structure:

```
parent
└── child
    └── grandchild
```

If within the `grandchild.hbs` template we use the helper `{{t-error error}}` the helper will try to
find the most especific translation key for it based on the route hierarchy.

It follows a set of conventions very similar to how [rails-i18n handles ActiveRecord errors](http://guides.rubyonrails.org/i18n.html#error-message-scopes).

The fallback chain for that error will be:

```
parent.child.grandchild.errors.email.invalid
parent.child.grandchild.errors.invalid
parent.child.errors.email.invalid
parent.child.errors.invalid
parent.errors.email.invalid
parent.errors.invalid
errors.email.invalid
errors.invalid
```

If none of those keys is defined in your translations the missing translation message will point you to the most
specific translation: `Missing translation: parent.child.grandchild.errors.email.invalid`.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone git@github.com:Mifrill/ember-intl-errors.git`
* `cd ember-intl-errors`
* `npm install`

### Linting

* `yarn lint:js`
* `yarn lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
