(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var r=t(0),n=t(1),i=t.n(n),s=t(4),a=t.n(s),l=(t(10),t(2)),o=(t(11),function(e){var c=e.label,t=e.image,n=e.url,i=e.servings,s=e.calories,a=e.cookTime,l=e.ingredients,o=e.sourceLabel,j=e.sourceUrl,d=e.diets,b=e.healthLabels;return Object(r.jsxs)("div",{className:"recipe",children:[Object(r.jsx)("img",{src:t,alt:c}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("h2",{className:"title",children:c}),Object(r.jsx)("a",{className:"nutriInfo",href:n,target:"_blank",rel:" noreferrer noopener",children:"Nutrition Info"}),Object(r.jsxs)("div",{className:"cookInfo",children:[Object(r.jsxs)("span",{children:["Servings: ",i]}),Object(r.jsxs)("span",{children:["Calories: ",Math.round(s/i)]}),Object(r.jsxs)("span",{children:["Time (min): ",a]})]}),Object(r.jsx)("p",{className:"diet",children:d.map((function(e){return Object(r.jsx)("span",{children:e})}))}),Object(r.jsx)("h3",{children:"Ingredients"}),Object(r.jsx)("ul",{className:"ingredientList",children:l.map((function(e){return Object(r.jsx)("li",{children:e})}))}),Object(r.jsx)("a",{href:j,target:"_blank",rel:" noreferrer noopener",children:Object(r.jsxs)("div",{className:"btn",children:["View on ",o]})}),Object(r.jsx)("p",{className:"health",children:b.map((function(e){return Object(r.jsx)("span",{children:e})}))})]})]})}),j=function(){var e=Object(n.useState)([]),c=Object(l.a)(e,2),t=c[0],i=c[1],s=Object(n.useState)(""),a=Object(l.a)(s,2),j=a[0],d=a[1],b=Object(n.useState)("chicken"),h=Object(l.a)(b,2),p=h[0],u=h[1],m=Object(n.useState)(" "),O=Object(l.a)(m,2),x=O[0],f=O[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),N=v[0],k=v[1],L=function(e){console.log("Error: ".concat(e.message)),f("".concat(p,'" not found! Please try again.')),i([]),k(!0)},S=function(){f(""),k(!1)};Object(n.useEffect)((function(){fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=".concat(p),{method:"GET",headers:{"x-rapidapi-key":"".concat("382628e006msh445d2150702f661p16b8a1jsn50b0984d8709"),"x-rapidapi-host":"edamam-recipe-search.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){console.log("Fetching data..."),i(e.hits),S()}),(function(e){L(e)}))}),[p]);var y=function(){return Object(r.jsx)("div",{className:"errormsg",children:x})};return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:"Recipe Finder"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(j),d("")},children:[Object(r.jsx)("input",{type:"text",value:j,onChange:function(e){var c=e.target;d(c.value)}}),Object(r.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(r.jsxs)("div",{className:"recipeList",children:[N?Object(r.jsx)(y,{}):null,t.map((function(e,c){return Object(r.jsx)(o,{label:e.recipe.label,image:e.recipe.image,url:e.recipe.shareAs,servings:e.recipe.yield,calories:e.recipe.calories,cookTime:e.recipe.totalTime,ingredients:e.recipe.ingredientLines,sourceLabel:e.recipe.source,sourceUrl:e.recipe.url,diets:e.recipe.dietLabels,healthLabels:e.recipe.healthLabels},e.recipe.uri)}))]}),Object(r.jsx)("footer",{children:Object(r.jsx)("div",{id:"edamam-badge","data-color":"white"})})]})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6d5ae952.chunk.js.map