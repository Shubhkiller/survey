import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div>
  <header>
    <h1 id="title">Survey Form</h1>
    <p id="description">Please fill out the survey form below:</p>
  </header>
  <form id="survey-form">
    <label htmlFor="name" id="name-label">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required />
    <label htmlFor="email" id="email-label">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required />
    <label htmlFor="number" id="number-label">Number:</label>
    <input type="number" id="number" name="number" placeholder="Enter a number" min={1} max={100} required />
    <label htmlFor="dropdown">Select an option:</label>
    <select id="dropdown" name="dropdown" required>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <fieldset>
      <legend>Choose an option:</legend>
      <label><input type="radio" name="radio-group" defaultValue="radio1" /> Radio 1</label>
      <label><input type="radio" name="radio-group" defaultValue="radio2" /> Radio 2</label>
    </fieldset>
    <fieldset>
      <legend>Choose multiple options:</legend>
      <label><input type="checkbox" name="checkbox-group" defaultValue="checkbox1" /> Checkbox 1</label>
      <label><input type="checkbox" name="checkbox-group" defaultValue="checkbox2" /> Checkbox 2</label>
    </fieldset>
    <label htmlFor="comments">Additional Comments:</label>
    <textarea id="comments" name="comments" placeholder="Enter your comments" defaultValue={""} />
    <button type="submit" id="submit">Submit</button>
  </form>
  );
</div>
  )}
export default App;
