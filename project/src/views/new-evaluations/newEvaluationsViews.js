const NewEvaluationsPage = function () {
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
        <textarea rows="6" placeholder=bla></textarea>
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


const DropdownSelector = function(options = {}) {
    const finalArr = [];

    options.forEach(function(el){
        let val = 0;
        const dropdownOptions = [];
        el.items.forEach(function(op){
            const generatedEl = `<option value="${val}">${op}</option>`;
            val++;
            dropdownOptions.push(generatedEl);
        });
        const dropdownEl = dropdownOptions.join('');
        const aux = el.label.split(' ').join('_');
        finalArr.push(`
            <label for="${aux}" class="default-label default-label-skin default-font-label">${options.label}</label>
            <select name="classes" id="${aux}">
            ${dropdownEl}
            </select>    
        `);

    })
    return finalArr.join('');    
}




const TechnicalAreaPicker = function(options){
    return `
    <fieldset>
    <legend>OOP, Design Patterns</legend>
    <ul>
      <li>
        ${DropdownSelector([
            {
                label: "Classes",
                items: ["0", "1", "2", "3"]
            },
            {
                label: "Exception Handling",
                items: ["0", "1", "2", "3"]
            },
            {
                label: "Version Control",
                items: ["0", "1", "2", "3"]
            }
        ])}
      </li>

      <li>
      ${DropdownSelector([
          {
        label: "Access Modifiers",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Design Patterns",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Issue Tracking",
        options: ["0", "1", "2", "3"]
    }
    ])},

      <li>
      ${DropdownSelector([
    {
        label: "Polymorphism",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "RegEx",
        options: ["0", "1", "2", "3"]
    }
])}
      </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>HTTP</legend>
    <ul>
      <li>
      ${DropdownSelector([
        {
        label: "Protocol",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Response Codes",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Rest",
        options: ["0", "1", "2", "3"]
    }


])}
      </li>
      <li>
      ${DropdownSelector([
          {
        label: "Headers",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Request Methods",
        options: ["0", "1", "2", "3"]
    },
    {
        label: "Sessions & Cookies",
        options: ["0", "1", "2", "3"]
    }
])}
      </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>HTML</legend>
    <ul>
      <li>
      ${DropdownSelector({
        label: "Doctype",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "Tags",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "Basic SEO",
        options: ["0", "1", "2", "3"]
    })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Syntax Rules",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Attributes",
            options: ["0", "1", "2", "3"]
        })}
       </li>
    </ul>
  </fieldset>

  <fieldset>
    <legend>CSS</legend>
    <ul>
      <li>
      ${DropdownSelector({
        label: "Usage",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "Box modeling",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "CSS 3.0",
        options: ["0", "1", "2", "3"]
    })}
        </li>
            <li>
            ${DropdownSelector({
                label: "Selectors",
                options: ["0", "1", "2", "3"]
            })}
            ${DropdownSelector({
                label: "Styling",
                options: ["0", "1", "2", "3"]
            })}
            ${DropdownSelector({
                label: "Dynamic Stylesheets",
                options: ["0", "1", "2", "3"]
            })}
            </li>
      </ul>
  </fieldset>

  <fieldset>
    <legend>Javascript</legend>
    <ul>
      <li>
      ${DropdownSelector({
        label: "Data Types and Variables",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "Object manipulation",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "DOM manipulations",
        options: ["0", "1", "2", "3"]
    })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Functions",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Templating",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Event Handling",
            options: ["0", "1", "2", "3"]
        })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Prototype & OOP",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Testing(Unit & E2E)",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "AJAX",
            options: ["0", "1", "2", "3"]
        })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Debugging",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Websockets",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Tooling",
            options: ["0", "1", "2", "3"]
        })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Libraries",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Promises",
            options: ["0", "1", "2", "3"]
        })}
        ${DropdownSelector({
            label: "Browser Engines",
            options: ["0", "1", "2", "3"]
        })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Frameworks",
            options: ["0", "1", "2", "3"]
        })}
        </li>
    </ul>
  </fieldset>


  <fieldset>
    <legend>NodeJS</legend>
    <ul>
      <li>
      ${DropdownSelector({
        label: "Backend Frameworks",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "Templating",
        options: ["0", "1", "2", "3"]
    })}
    ${DropdownSelector({
        label: "DOM manipulation",
        options: ["0", "1", "2", "3"]
    })}
        </li>
        <li>
        ${DropdownSelector({
            label: "Unit Testing",
            options: ["0", "1", "2", "3"]
        })}
        </li>
      </ul>
  </fieldset>
<button class="new-eval-button new-eval-button-skin default-font">SUBMIT</button>
    `;
}

const newEvaluationsHTML = NewEvaluationsPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = newEvaluationsHTML;
}
