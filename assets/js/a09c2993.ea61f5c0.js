"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"introduction",slug:"/"},s="Handbook",c={unversionedId:"introduction",id:"introduction",title:"Handbook",description:"We want to make it as easy as possible for users to become ODPF contributors, so we created this handbook to help you get started. The ODPF team handbook is the central repository for how we build the product within ODPF community. You will find step-by-step instructions to contribute to development, documentation, and design. Handbook is open to the world and we welcome feedback. Please make a merge request to suggest improvements or add clarifications. Please use issues to ask questions.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/handbook/",draft:!1,editUrl:"https://github.com/odpf/handbook/edit/master/docs/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",slug:"/"},sidebar:"docsSidebar",next:{title:"Merge Request (MR) Process",permalink:"/handbook/development/merge-request"}},m={},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Development",id:"development",level:2},{value:"Commit Messages",id:"commit-messages",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Metrics",id:"metrics",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handbook"},"Handbook"),(0,r.kt)("p",null,"We want to make it as easy as possible for users to become ODPF contributors, so we created this handbook to help you get started. The ODPF team handbook is the central repository for how we build the product within ODPF community. You will find step-by-step instructions to contribute to development, documentation, and design. Handbook is open to the world and we welcome feedback. Please make a merge request to suggest improvements or add clarifications. Please use issues to ask questions."),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"Roadmap is tracked in each repository documentation. Check ",(0,r.kt)("a",{parentName:"p",href:"https://odpf.github.io/optimus/roadmap/"},"Optimus roadmap")," as an example."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"We follow following guidelines during development."),(0,r.kt)("h3",{id:"commit-messages"},"Commit Messages"),(0,r.kt)("p",null,"Use conventional commits format for all commits across repository. Ideally, bot commits shpuld follow conventional format. The ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Format")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n\nfeat: allow overriding of the application config\n^--^  ^------------^\n|     |\n|     +-> Summary in present tense.\n|\n+-------\x3e Type: chore, docs, feat, fix, refactor, style, or test.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"feat: allow provided config object to extend other configs\nrefactor!: drop support for Node 6\ndocs: correct spelling of CHANGELOG\nfeat(lang): add polish language\n")),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"Each of the configs should be namespaced according to the role/usage/context that they have followed by the type/implementation of it. For example - for statsd url - statsd is an implementation for metric collection hence the config would look like metric.statsd.url\nAny delimiters depending on the language/framework can be used. Like \u201c.\u201d or \u201c","_","\u201d or \u201c/\u201d etc. Default would be ",(0,r.kt)("inlineCode",{parentName:"p"},".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("th",{parentName:"tr",align:null},"Type (optional)"),(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric.statsd.url"),(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"statsd"),(0,r.kt)("td",{parentName:"tr",align:null},"url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema.proto.name"),(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"proto"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dlq.kafka.brokers"),(0,r.kt)("td",{parentName:"tr",align:null},"dlq"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"brokers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dlq.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"dlq"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"enable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source.kafka.consumer.config.auto.commit.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"consumer.config.auto.commit.enable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema.registry.stencil.urls"),(0,r.kt)("td",{parentName:"tr",align:null},"schema.registry"),(0,r.kt)("td",{parentName:"tr",align:null},"stencil"),(0,r.kt)("td",{parentName:"tr",align:null},"urls")))),(0,r.kt)("p",null,"These are just guidelines and might not be extensive enough to cover all use-cases. Please use this to give it a thought."),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"The metrics and labels must be compliant with the ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels"},"Prometheus data model"),".\nThe metric and label conventions presented in this document serve as both a;",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/"},"style-guide")," and a collection of best practices."))}d.isMDXComponent=!0}}]);