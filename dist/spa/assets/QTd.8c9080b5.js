import{c as d,h as n}from"./render.3d38f399.js";import{c as u,h as s,g as v}from"./index.9d8ba1a3.js";var m=d({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(t,{slots:e}){const l=v(),a=u(()=>"q-td"+(t.autoWidth===!0?" q-table--col-auto-width":"")+(t.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(t.props===void 0)return s("td",{class:a.value},n(e.default));const c=l.vnode.key,o=(t.props.colsMap!==void 0?t.props.colsMap[c]:null)||t.props.col;if(o===void 0)return;const{row:r}=t.props;return s("td",{class:a.value+o.__tdClass(r),style:o.__tdStyle(r)},n(e.default))}}});export{m as Q};
