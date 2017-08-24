const getTextareas = function(){
    return  {
        items: [
            {
                title: "Should the candidate be hired?",
                placeholder: "The type of project that is suitable for the candidate Is guidance required for the candidate"
            },
            {
                title: "General Impression",
                placeholder: "*required"
            },
            {
                title: "Workflow, Leadership &amp; Soft Skills",
                placeholder: "Describe the environment in which the candidate works. Describe any guidance or management experience"
            }
        ]
    }
}

const getTechnicalLevels = function() {
    return {
        title: "Technical Level",
        headers: ["Trainee", "Junior", "Middle", "Senior"],
        columnData: [
            {
                inputLevels: ["T"]
            },
            {
                inputLevels: ["J1","J2", "J3"]
            },
            {
                inputLevels: ["M1", "M2", "M3"]
            },
            {
                inputLevels: ["S1", "S2", "S3"]
            }
            
        ]};
}


const getTechnicalAreas = function(){
    const optionsItems = ["0", "1", "2", "3"];
    const dropdownOptions1 = [
        [
            {
                label: "Classes",
                options: optionsItems
            },
            {
                label: "Exception Handling",
                options: optionsItems
            },
            {
                label: "Version Control",
                options: optionsItems
            }
        ],
        [
            {
                label: "Access Modifiers",
                options: optionsItems
            },
            {
                label: "Design Patterns",
                options: optionsItems
            },
            {
                label: "Issue Tracking",
                options: optionsItems
            }
        ],
        [
            {
                label: "Polymorphism",
                options: optionsItems
            },
            {
                label: "RegEx",
                options: optionsItems
            }
    ]
    ];
    const dropdownOptions2 = [
        [
            {
                label: "Protocol",
                options: optionsItems
            },
            {
                label: "Response Codes",
                options: optionsItems
            },
            {
                label: "Rest",
                options: optionsItems
            }
        ],
        [
            {
                label: "Headers",
                options: optionsItems
            },
            {
                label: "Request Methods",
                options: optionsItems
            },
            {
                label: "Sessions & Cookies",
                options: optionsItems
            }
        ]
    ];
    const dropdownOptions3 = [
        [
            {
                label: "Doctype",
                options: optionsItems
            },
            {
                label: "Tags",
                options: optionsItems
            },
            {
                label: "Basic SEO",
                options: optionsItems
            }
        ],
        [
            {
                label: "Syntax Rules",
                options: optionsItems
            },
            {
                label: "Attributes",
                options: optionsItems
            }
        ]
    ];
    const dropdownOptions4 = [
        [
            {
                label: "Usage",
                options: optionsItems
            },
            {
                label: "Box modeling",
                options: optionsItems
            },
            {
                label: "CSS 3.0",
                options: optionsItems
            }
        ],
        [
            {
                label: "Selectors",
                options: optionsItems
            },
            {
                label: "Styling",
                options: optionsItems
            },
            {
                label: "Dynamic Stylesheets",
                options: optionsItems
            }
        ]
    ];
    const dropdownOptions5 = [
        [
            {
                label: "Data Types and Variables",
                options: optionsItems
            },
            {
                label: "Object manipulation",
                options: optionsItems
            },
            {
                label: "DOM manipulations",
                options: optionsItems
            }
        ],
        [
            {
                label: "Functions",
                options: optionsItems
            },
            {
                label: "Templating",
                options: optionsItems
            },
            {
                label: "Event Handling",
                options: optionsItems
            }
        ],
        [
            {
                label: "Prototype & OOP",
                options: optionsItems
            },
            {
                label: "Testing(Unit & E2E)",
                options: optionsItems
            },
            {
                label: "AJAX",
                options: optionsItems
            }
        ],
        [
            {
                label: "Debugging",
                options: optionsItems
            },
            {
                label: "Websockets",
                options: optionsItems
            },
            {
                label: "Tooling",
                options: optionsItems
            }
        ],
        [
            {
                label: "Libraries",
                options: optionsItems
            },
            {
                label: "Promises",
                options: optionsItems
            },
            {
                label: "Browser Engines",
                options: optionsItems
            }
        ],
        [
            {
                label: "Frameworks",
                options: optionsItems
            }
        ]
    ];
    const dropdownOptions6 = [
        [
            {
                label: "Backend Frameworks",
                options: optionsItems
            },
            {
                label: "Templating",
                options: optionsItems
            },
            {
                label: "DOM manipulation",
                options: optionsItems
            }
        ],
        [
            {
                label: "Unit Testing",
                options: optionsItems
            },
        ]
    ];

    return [
        {
            legend: "OOP, Design Patterns",
            dropdownOptions: dropdownOptions1
        },
        {
            legend: "HTTP",
            dropdownOptions: dropdownOptions2
        },
        {
            legend: "HTML",
            dropdownOptions: dropdownOptions3
        },
        {
            legend: "CSS",
            dropdownOptions: dropdownOptions4
        },
        {
            legend: "Javascript",
            dropdownOptions: dropdownOptions5
        },
        {
            legend: "NodeJS",
            dropdownOptions: dropdownOptions6
        }
    ]
}
