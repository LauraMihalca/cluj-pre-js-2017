const newEvaluationsPage = function () {
    return `
        ${NAV()}
        <div class="new-eval">
            <form>
                ${CandidateDetailsForm()}
                ${TechnicalLevelPicker()}
                ${Textarea()}
                ${TechnicalAreaPicker()}
            </form>
        </div>
        ${Footer()}
        
    `;
}

const CandidateDetailsForm = function() {
    return `
    <section> 
        <input type="text" placeholder="Candidate" name="candidate">
        <input type="text" placeholder="Interviewer" name="interviewer">
        <input type="date" name="date">
    </section>
    `;
}

const TechnicalLevelPicker = function() {
    return `
    <section>
        <h2 class="h2-skin">Technical Level</h2>
        <table>
        <tr>
            <th>Trainee</th>
            <th>Junior</th>
            <th>Middle</th>
            <th>Senior</th>
        </tr>
        <tr class="border-lists-skin">
            <td>
            <input type="radio" id="T"/>
            </td>
            <td>
            <input type="radio" id="J1"/>
            <input type="radio" id="J2"/>
            <input type="radio" id="J3"/>
            </td>
            <td>
            <input type="radio" id="M1"/>
            <input type="radio" id="M2"/>
            <input type="radio" id="M3"/>
            </td>
            <td>
            <input type="radio" id="S1"/>
            <input type="radio" id="S2"/>
            <input type="radio" id="S3"/>
            </td>
        </tr>
        </table>
    </section>
    `;
}

const Textarea = function(options){
    return `
    <section>
        <h2 class="h2-skin">Should the candidate be hired?</h2>
        <textarea rows="6" placeholder="The type of project that is suitable for the candidate
        Is guidance required for the candidate"></textarea>
    </section>

    <section>
        <h2  class="h2-skin">General Impression</h2>
        <textarea rows="6" required placeholder="*required"></textarea>
    </section>

    <section>
        <h2 class="h2-skin">Workflow, Leadership &amp; Soft Skills</h2>
        <textarea rows="6" required placeholder="Describe the environment in which the candidate works.
        Describe any guidance or management experience"></textarea>
    </section>  
    `;
}

const TechnicalAreaPicker = function(options){
    return `
    <fieldset>
    <legend>OOP, Design Patterns</legend>
    <ul>
      <li>
        <label for="classes" class="default-label default-label-skin default-font-label">Classes</label>
        <select name="classes" id="classes">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="exception" class="default-label default-label-skin default-font-label">Exception Handling</label>
        <select name="exception" id="exception">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="vcs" class="default-label default-label-skin default-font-label">Version Control</label>
        <select name="vcs" id="vcs">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </li>
      <li>
        <label for="access" class="default-label default-label-skin default-font-label">Access Modifiers</label>
        <select name="access" id="access">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="patterns" class="default-label default-label-skin default-font-label">Design Patterns</label>
        <select name="patterns" id="patterns">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="issue" class="default-label default-label-skin default-font-label">Issue Tracking</label>
        <select name="issue" id="issue">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </li>
      <li>
        <label for="poly" class="default-label default-label-skin default-font-label">Polymorphism</label>
        <select name="poly" id="poly">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label for="regex" class="default-label default-label-skin default-font-label">RegEx</label>
        <select name="regex" id ="regex">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>HTTP</legend>
    <ul>
      <li>
          <label for="protocol" class="default-label default-label-skin default-font-label">Protocol</label>
          <select name="protocol" id="protocol">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        <label for="codes" class="default-label default-label-skin default-font-label">Response codes</label>
          <select name="codes" id="codes">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        <label for="rest" class="default-label default-label-skin default-font-label">REST</label>
          <select name="rest" id="rest">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
      </li>
      <li>
        <label for="headers" class="default-label default-label-skin default-font-label">Headers</label>
          <select name="headers" id="headers">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        <label for="request" class="default-label default-label-skin default-font-label">Request Methods</label>
          <select name="request" id="request">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        <label for="session" class="default-label default-label-skin default-font-label">Sessions and Cookies</label>
          <select name="sessions" id="session">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
      </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>HTML</legend>
    <ul>
      <li>
          <label for="doctype" class="default-label default-label-skin default-font-label">Doctype</label>
              <select name="doctype" id="doctype">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          <label for="tags" class="default-label default-label-skin default-font-label">Tags</label>
              <select name="tags" id="tags">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          <label for="seo" class="default-label default-label-skin default-font-label">Basic SEO</label>
              <select name="seo" id="seo">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
        </li>
        <li>
            <label for="syntax" class="default-label default-label-skin default-font-label">Syntax Rules</label>
              <select name="syntax" id="syntax">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
           <label for="attr" class="default-label default-label-skin default-font-label">Attributes</label>
              <select name="attr" id="attr">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
       </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>CSS</legend>
    <ul>
      <li>
          <label for="usage" class="default-label default-label-skin default-font-label">Usage</label>
          <select name="usage" id="usage">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="modeling" class="default-label default-label-skin default-font-label">Box modeling</label>
          <select name="modeling" id="modeling">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="css3" class="default-label default-label-skin default-font-label">CSS 3.0</label>
          <select name="css3" id="css3">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
            <li>
              <label for="sel" class="default-label default-label-skin default-font-label">Selectors</label>
              <select name="sel" id="sel">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label for="style" class="default-label default-label-skin default-font-label">Styling</label>
              <select name="style" id="style">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label for="dynamic" class="default-label default-label-skin default-font-label">Dynamic Stylesheets</label>
              <select name="dynamic" id="dynamic">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </li>
      </ul>
  </fieldset>

  <fieldset>
    <legend>Javascript</legend>
    <ul>
      <li>
          <label for="data" class="default-label default-label-skin default-font-label">Data types and variables</label>
            <select name="data" id="data">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          <label for="object" class="default-label default-label-skin default-font-label">Object manipulation</label>
            <select name="object" id="object">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          <label for="dom" class="default-label default-label-skin default-font-label">DOM manipulation</label>
            <select name="dom" id="dom">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </li>
        <li>
          <label for="funct" class="default-label default-label-skin default-font-label">Functions</label>
            <select name="funct" id="funct">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          <label for="temp" class="default-label default-label-skin default-font-label">Templating</label>
            <select name="temp" id="temp">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          <label for="eventh" class="default-label default-label-skin default-font-label">Event Handling</label>
          <select name="eventh" id="eventh">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
        </li>
        <li>
          <label for="prot" class="default-label default-label-skin default-font-label">Prototype &amp; OOP</label>
          <select name="prot" id="prot">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="test" class="default-label default-label-skin default-font-label">Testing (Unit &amp; E2E)</label>
          <select name="test" id="test">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="ajax" class="default-label default-label-skin default-font-label">AJAX</label>
          <select name="ajax" id="ajax">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <label for="debug" class="default-label default-label-skin default-font-label">Debugging</label>
          <select name="debug" id="debug">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="webs" class="default-label default-label-skin default-font-label">Websockets</label>
          <select name="webs" id="webs">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="tool" class="default-label default-label-skin default-font-label">Tooling</label>
          <select name="tool" id="tool">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <label for="lib" class="default-label default-label-skin default-font-label">Libraries</label>
          <select name="lib" id="lib">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="prom" class="default-label default-label-skin default-font-label">Promises</label>
          <select name="prom" id="prom">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="brow" class="default-label default-label-skin default-font-label">Browser Engines</label>
          <select name="brow" id="brow">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <label for="frame" class="default-label default-label-skin default-font-label">Frameworks</label>
          <select name="frame" id="frame">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
    </ul>
  </fieldset>


  <fieldset>
    <legend>NodeJS</legend>
    <ul>
      <li>
          <label for="back" class="default-label default-label-skin default-font-label">Backend Frameworks</label>
          <select name="back" id="back">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="templ" class="default-label default-label-skin default-font-label">Templating</label>
          <select name="templ" id="templ">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label for="domm" class="default-label default-label-skin default-font-label">DOM manipulation</label>
          <select name="domm" id="domm">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <label for="unit" class="default-label default-label-skin default-font-label">Unit Testing</label>
          <select name="unit" id="unit">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
      </ul>
  </fieldset>
<button class="new-eval-button new-eval-button-skin default-font">SUBMIT</button>
    `;
}

const newEvaluationsHTML = newEvaluationsPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = newEvaluationsHTML;
}
