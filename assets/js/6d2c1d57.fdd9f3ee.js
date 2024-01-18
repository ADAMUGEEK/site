"use strict";(self.webpackChunkgeekink=self.webpackChunkgeekink||[]).push([[6218],{4850:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(5893),s=r(1151);const i={sidebar_position:2},l="project 1",o={id:"C/ass",title:"project 1",description:"Algorithm",source:"@site/docs/C/ass.mdx",sourceDirName:"C",slug:"/C/ass",permalink:"/docs/C/ass",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C Language",permalink:"/docs/category/c-language"},next:{title:"project 2",permalink:"/docs/C/ass1"}},a={},u=[{value:"Algorithm",id:"algorithm",level:2},{value:"Flowchart",id:"flowchart",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"project-1",children:"project 1"}),"\n",(0,t.jsx)(e.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Start"}),"\n",(0,t.jsx)(e.li,{children:"Input num1"}),"\n",(0,t.jsx)(e.li,{children:"Input operator"}),"\n",(0,t.jsx)(e.li,{children:"Input num2"}),"\n",(0,t.jsxs)(e.li,{children:["Switch on operator","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Case '+': result = num1 + num2"}),"\n",(0,t.jsx)(e.li,{children:"Case '-': result = num1 - num2"}),"\n",(0,t.jsx)(e.li,{children:"Case '*': result = num1 * num2"}),"\n",(0,t.jsx)(e.li,{children:"Case '/':"}),"\n",(0,t.jsxs)(e.li,{children:["If num2 is not equal to 0, result = num1 / num2","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Else, print an error message and return 1"}),"\n",(0,t.jsx)(e.li,{children:"Default: Print an error message and return 1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"Print the result: num1, operator, num2, result"}),"\n",(0,t.jsx)(e.li,{children:"End"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"flowchart",children:"Flowchart"}),"\n",(0,t.jsx)(e.mermaid,{value:"flowchart TD\n    A([Start]) --\x3e B[/input num1 /]\n    B --\x3e C[/ operations /]\n    C --\x3e D[/ input num2 /]\n    D --\x3e E{ +, -, *, / ?}\n    E --\x3e G[ Sum ] --\x3e J[/ Result /]\n    E --\x3e F[ multiple ] --\x3e J[/ Result /]\n    E --\x3e H[ subtract ] --\x3e J[/ Result /]\n    E --\x3e I[ Divide ] --\x3e J[/ Result /]\n    E --\x3e|invalid| K([End])\n    J --\x3e K"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    double num1, num2, result;\n    char operator;\n\n    // Get user input\n    printf("Enter first number: ");\n    scanf("%lf", &num1);\n\n    printf("Enter operator (+, -, *, /): ");\n    scanf(" %c", &operator);  // Note the space before %c to consume any whitespace characters\n\n    printf("Enter second number: ");\n    scanf("%lf", &num2);\n\n    // Perform arithmetic operations\n    switch (operator) {\n        case \'+\':\n            result = num1 + num2;\n            break;\n        case \'-\':\n            result = num1 - num2;\n            break;\n        case \'*\':\n            result = num1 * num2;\n            break;\n        case \'/\':\n            if (num2 != 0) {\n                result = num1 / num2;\n            } else {\n                printf("Error: Division by zero is not allowed.\\n");\n                return 1;  // Exit with an error code\n            }\n            break;\n        default:\n            printf("Error: Invalid operator.\\n");\n            return 1;  // Exit with an error code\n    }\n\n    // Display the result\n    printf("Result: %.2lf %c %.2lf = %.2lf\\n", num1, operator, num2, result);\n\n    return 0;  // Exit successfully\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>l});var t=r(7294);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);