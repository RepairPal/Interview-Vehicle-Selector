## Setup

**Recommended Versions**

Ruby: 3.1.3
Node: 16.19.1

After cloning this repository, run the following in the project directory.

0. Create a new branch with your name
1. Run bundler
2. Run yarn
3. Run the database migrations
4. Run the seed
5. Start the server and verify that it works

## Vehicle Selector

You will be creating a form to select a vehicle. Begin by generating a page to display the form.

1. Make a controller to serve the root path
2. Serve a page with the content `<%= react_component('VehicleSelector') %>`
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
