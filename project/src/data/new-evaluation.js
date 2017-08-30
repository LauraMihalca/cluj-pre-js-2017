function getTextareaArray() {
    return {
        items: [
            {
                title: 'Should the candidate be hired?',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate',
            },
            {
                title: 'General Impression',
                placeholder: '*required',
            },
            {
                title: 'Workflow, Leadership & Soft Skills',
                placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience',
            },
        ],
    };
}

function getTechnicalLevelArray() {
    return {
        title: 'Technical Level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['Trainee'],
            },
            {
                inputLevels: ['Junior1', 'Junior2', 'Junior3'],
            },
            {
                inputLevels: ['Middle1', 'Middle2', 'Middle3'],
            },
            {
                inputLevels: ['Senior1', 'Senior2', 'Senior3'],
            },

        ] };
}


function getTechnicalAreaArray() {
    const optionsItems = ['0', '1', '2', '3'];
    const oopFieldset = [
        [
            {
                label: 'Classes',
                options: optionsItems,
            },
            {
                label: 'Exception Handling',
                options: optionsItems,
            },
            {
                label: 'Version Control',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Access Modifiers',
                options: optionsItems,
            },
            {
                label: 'Design Patterns',
                options: optionsItems,
            },
            {
                label: 'Issue Tracking',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Polymorphism',
                options: optionsItems,
            },
            {
                label: 'RegEx',
                options: optionsItems,
            },
        ],
    ];
    const httpFieldset = [
        [
            {
                label: 'Protocol',
                options: optionsItems,
            },
            {
                label: 'Response Codes',
                options: optionsItems,
            },
            {
                label: 'Rest',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Headers',
                options: optionsItems,
            },
            {
                label: 'Request Methods',
                options: optionsItems,
            },
            {
                label: 'Sessions & Cookies',
                options: optionsItems,
            },
        ],
    ];
    const htmlFieldset = [
        [
            {
                label: 'Doctype',
                options: optionsItems,
            },
            {
                label: 'Tags',
                options: optionsItems,
            },
            {
                label: 'Basic SEO',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Syntax Rules',
                options: optionsItems,
            },
            {
                label: 'Attributes',
                options: optionsItems,
            },
        ],
    ];
    const cssFieldset = [
        [
            {
                label: 'Usage',
                options: optionsItems,
            },
            {
                label: 'Box modeling',
                options: optionsItems,
            },
            {
                label: 'CSS 3.0',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Selectors',
                options: optionsItems,
            },
            {
                label: 'Styling',
                options: optionsItems,
            },
            {
                label: 'Dynamic Stylesheets',
                options: optionsItems,
            },
        ],
    ];
    const javascriptFieldset = [
        [
            {
                label: 'Data Types and Variables',
                options: optionsItems,
            },
            {
                label: 'Object manipulation',
                options: optionsItems,
            },
            {
                label: 'DOM manipulations',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Functions',
                options: optionsItems,
            },
            {
                label: 'Templating',
                options: optionsItems,
            },
            {
                label: 'Event Handling',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Prototype & OOP',
                options: optionsItems,
            },
            {
                label: 'Testing (Unit & E2E)',
                options: optionsItems,
            },
            {
                label: 'AJAX',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Debugging',
                options: optionsItems,
            },
            {
                label: 'Websockets',
                options: optionsItems,
            },
            {
                label: 'Tooling',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Libraries',
                options: optionsItems,
            },
            {
                label: 'Promises',
                options: optionsItems,
            },
            {
                label: 'Browser Engines',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Frameworks',
                options: optionsItems,
            },
        ],
    ];
    const nodejsFieldset = [
        [
            {
                label: 'Backend Frameworks',
                options: optionsItems,
            },
            {
                label: 'Templating',
                options: optionsItems,
            },
            {
                label: 'DOM manipulation',
                options: optionsItems,
            },
        ],
        [
            {
                label: 'Unit Testing',
                options: optionsItems,
            },
        ],
    ];

    return [
        {
            legend: 'OOP, Design Patterns',
            dropDownOptions: oopFieldset,
        },
        {
            legend: 'HTTP',
            dropDownOptions: httpFieldset,
        },
        {
            legend: 'HTML',
            dropDownOptions: htmlFieldset,
        },
        {
            legend: 'CSS',
            dropDownOptions: cssFieldset,
        },
        {
            legend: 'Javascript',
            dropDownOptions: javascriptFieldset,
        },
        {
            legend: 'NodeJS',
            dropDownOptions: nodejsFieldset,
        },
    ];
}

