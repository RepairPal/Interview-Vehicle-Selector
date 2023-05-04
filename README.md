## Setup

**Recommended Versions**

Ruby: 3.1.3
Node: 16.19.1

After cloning this repository, run the following in the project directory.

0. `git checkout -b yourname`
1. `bundle` (install bundler if needed: `gem install bundler`)
2. `yarn` (install yarn if needed: `npm install -g yarn`)
3. `rails db:migrate`
4. `rails db:seed`
5. `rails s` and visit `localhost:3000` to verify

## Vehicle Selector

You will be creating a form to select a vehicle. Begin by generating a page to display the form.

1. `rails g controller VehicleSelector`
2. Create `app/views/vehicle_selector/index.html.erb` and add `<%= react_component('VehicleSelector') %>`
3. `rails g react:component VehicleSelector`
4. Verify that the component loads to the page.

From here, we will add a select dropdown to choose a make from the list of makes.

1. Make the path `/vehicle_makes`, which will render a JSON serialized list of makes.
2. Add a select dropdown to the React component.
3. Make a fetch request to the JSON endpoint to get the list of makes. Parse this and store in the component's state.
4. Render each make as an option in the select dropdown.
5. Allow the user to select a make and have it stored in the component's state.

Once that is verified working, implement one of the following:

- A vehicle model select dropdown, which appears when a make is selected, and only shows vehicle models for the selected make.
- A Capybara test to verify the component is working.
- CSS styles for the form.
