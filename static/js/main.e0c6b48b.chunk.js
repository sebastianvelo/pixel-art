(this["webpackJsonppixel-art"]=this["webpackJsonppixel-art"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(3),r=n.n(i),a=n(18),o=n.n(a),l=n(2),c=n(4),u=n(8),h=n(7),d=n(19),b=(n(50),n(51),n(20)),j=n.n(b),v=n(1),g=n.n(v),f=function(){function e(t,n,s){Object(l.a)(this,e),this.r=t,this.g=n,this.b=s}return Object(c.a)(e,[{key:"getRGB",value:function(){return"rgb("+this.r+","+this.g+","+this.b+")"}},{key:"setRGB",value:function(e){var t=e.substring(4,e.length-1).split(",");t=3!==t.length?[255,255,255]:t,this.r=parseInt(t[0]),this.g=parseInt(t[1]),this.b=parseInt(t[2])}},{key:"equals",value:function(e){return this.getRGB()===e.getRGB()}}]),e}(),C=function(){function e(t,n,s,i){Object(l.a)(this,e),this.rows=t,this.columns=n,this.size=s,this.border=i}return Object(c.a)(e,[{key:"toString",value:function(){return"Rows: "+this.rows+" | Columns: "+this.columns+" | Size: "+this.size+" | Border: "+this.border+" | "}}]),e}(),x=new function e(){Object(l.a)(this,e),this.r={txt:"Rojo",range:"rangeR",label:"labelR",default:150,min:0,max:255},this.g={txt:"Verde",range:"rangeG",label:"labelG",default:50,min:0,max:255},this.b={txt:"Azul",range:"rangeB",label:"labelB",default:0,min:0,max:255}},m=[new f(0,0,0),new f(255,255,255),new f(255,0,0),new f(0,255,0),new f(0,0,255),new f(255,0,255),new f(255,255,0),new f(0,255,255),new f(100,255,100),new f(255,100,100),new f(100,100,255),new f(100,150,200),new f(200,150,100),new f(150,200,100)],p=new function e(){Object(l.a)(this,e),this.row={txt:"Alto",range:"height",label:"labelH",default:20,min:1,max:30},this.column={txt:"Ancho",range:"width",label:"labelW",default:15,min:1,max:30},this.cellSize={txt:"Celda",range:"size",label:"labelS",default:15,min:7,max:15},this.border={txt:"Borde",range:"border",label:"labelBorder",default:1,min:0,max:2},this.htmlSettings={idCanvas:"canvas",idSavedColors:"gridSavedColors",classCell:"cell"},this.htmlSettings.classCellCanvas=this.htmlSettings.classCell+this.htmlSettings.idCanvas,this.htmlSettings.classCellSavedColors=this.htmlSettings.classCell+this.htmlSettings.idSavedColors},O=function(e){return p.htmlSettings.classCell+e},S=function(e){return"#"+e},y=function(e){return"."+e};var w=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("center",{children:[Object(s.jsx)("button",{onClick:function(){return e.setMode(!0)},children:Object(s.jsx)("i",{className:"fas fa-paint-brush"})}),Object(s.jsx)("button",{onClick:function(){return e.setMode(!1)},children:Object(s.jsx)("i",{className:"fas fa-eye-dropper"})}),Object(s.jsx)("button",{onClick:function(){return e.eraser()},children:Object(s.jsx)("i",{className:"fas fa-eraser"})}),Object(s.jsx)("button",{onClick:function(){return e.resetCanvas()},children:Object(s.jsx)("i",{className:"fas fa-trash-alt"})}),Object(s.jsx)("a",{id:"saveImage",download:"pixel-art.png",children:Object(s.jsx)("button",{children:Object(s.jsx)("i",{className:"fas fa-save"})})})]})})};var k=function(){return Object(s.jsx)("div",{id:"selectedColor",children:" \xa0 "})};var z=function(e){return Object(s.jsxs)("div",{className:"range",children:[Object(s.jsx)("label",{className:"labelRange",children:e.item.txt})," ",Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"labelRangeValue",id:e.item.label})," ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"inputRange",id:e.item.range,type:"range",min:e.item.min,max:e.item.max,step:"1",onChange:function(){return e.funct()}})]})};var M=function(e){return Object(s.jsxs)("div",{className:"dropdown-content",children:[Object(s.jsx)(z,{item:x.r,funct:e.changeColor}),Object(s.jsx)(z,{item:x.g,funct:e.changeColor}),Object(s.jsx)(z,{item:x.b,funct:e.changeColor})]})};var G=function(e){return Object(s.jsxs)("div",{className:"dropdown",onMouseOver:function(){return N(.1)},onMouseOut:function(){return N(1)},children:[Object(s.jsx)(k,{}),Object(s.jsx)(M,{changeColor:e.changeColor})]})};function N(e){g()(".opaque").css("opacity",e)}var B=function(e){var t,n,i=(t=e.x,n=e.y,e.id+t+"-"+n);return Object(s.jsx)("td",{owner:e.id,id:i,className:O(e.id),onClick:function(){return e.funct(i)}})};var R=function(e){for(var t=[],n=0;n<e.columns;n++)t.push(Object(s.jsx)(B,{x:n,y:e.row,funct:e.funct,id:e.id},n));return Object(s.jsx)("tr",{children:t})};var I=function(e){for(var t=[],n=0;n<e.rows;n++)t.push(Object(s.jsx)(R,{columns:e.columns,row:n,funct:e.funct,id:e.id},n));return Object(s.jsx)("table",{id:e.id,className:"grid",children:Object(s.jsx)("tbody",{children:t})})};var D=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h5",{children:"Colores guardados"}),Object(s.jsx)("div",{children:Object(s.jsx)(I,{rows:4,columns:12,funct:e.copyColor,id:p.htmlSettings.idSavedColors})})]})};var A=function(e){return Object(s.jsx)("center",{children:Object(s.jsxs)("button",{id:"buttonSave",onClick:function(){return e.saveColor()},children:[Object(s.jsx)("i",{className:"fas fa-save"}),"\xa0\xa0Guardar color"]})})};n(52);var L=function(e){var t="bodyColorSettings";return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{onClick:function(){return g()(S(t)).slideToggle()},children:"Color"}),Object(s.jsxs)("div",{id:t,children:[Object(s.jsx)(G,{changeColor:e.changeColor}),Object(s.jsx)(A,{saveColor:e.saveColor}),Object(s.jsx)(D,{copyColor:e.copyColor})]})]})};var P=function(e){var t="bodySizeSettings",n=p.column;return n.max=e.isMobile?20:n.max,Object(s.jsxs)("div",{className:"opaque",children:[Object(s.jsx)("p",{onClick:function(){return g()(S(t)).slideToggle()},children:"Lienzo"}),Object(s.jsxs)("div",{id:t,children:[Object(s.jsx)(z,{item:p.column,funct:e.changeSize}),Object(s.jsx)(z,{item:p.row,funct:e.changeSize}),Object(s.jsx)(z,{item:p.cellSize,funct:e.changeSize}),Object(s.jsx)(z,{item:p.border,funct:e.changeSize})]})]})},q=(n(53),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={},s}return Object(c.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"sidenav",children:[Object(s.jsx)(w,{setMode:this.props.setMode,eraser:this.props.eraser,resetCanvas:this.props.resetCanvas}),Object(s.jsx)(L,{changeColor:this.props.changeColor,saveColor:this.props.saveColor,copyColor:this.props.copyColor}),Object(s.jsx)(P,{changeSize:this.props.changeSize,isMobile:this.props.isMobile}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})}}]),n}(i.Component)),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={selectedColor:new f(x.r.default,x.g.default,x.b.default),savedColors:[]},s}return Object(c.a)(n,[{key:"setMode",value:function(e){return e?this.props.setMode(this.colorizeCell.bind(this)):this.props.setMode(this.copyColor.bind(this))}},{key:"changeColorGeneric",value:function(e){var t=this.state;t.selectedColor=e,this.setState({state:t}),this.setColors()}},{key:"changeColor",value:function(){var e=g()(S(x.r.range)).val(),t=g()(S(x.g.range)).val(),n=g()(S(x.b.range)).val(),s=new f(e,t,n);this.changeColorGeneric(s)}},{key:"eraser",value:function(){var e=new f(255,255,255);this.changeColorGeneric(e)}},{key:"resetCanvas",value:function(){g()(y(p.htmlSettings.classCellCanvas)).css("background-color","white")}},{key:"colorizeCell",value:function(e){this.colorizeCellGeneric(e,this.state.selectedColor)}},{key:"colorizeCellGeneric",value:function(e,t){g()(S(e)).css("background-color",t.getRGB()),F()}},{key:"copyColor",value:function(e){var t=document.getElementById(e).style.backgroundColor,n=new f;n.setRGB(t),this.setMode(!0),this.changeColorGeneric(n)}},{key:"saveColor",value:function(){var e=this;if(!e.state.savedColors.find((function(t){return t.equals(e.state.selectedColor)}))){var t=this.getLastCellIDSavedColors();this.colorizeCell(t);var n=this.state;n.savedColors.push(this.state.selectedColor),this.setState({state:n})}}},{key:"getLastCellIDSavedColors",value:function(){for(var e,t,n=g()((e="owner",t=p.htmlSettings.idSavedColors,"["+e+"='"+t+"']")),s=0,i=0;i<n.length;i++)if(0===n[i].style.backgroundColor.length){s=i;break}return n[s].id}},{key:"fillDefaultSavedColors",value:function(){var e=this;m.forEach((function(t){var n=e.getLastCellIDSavedColors();e.colorizeCellGeneric(n,t)}));var t=this.state;Array.prototype.push.apply(t.savedColors,m),this.setState({state:t})}},{key:"setColors",value:function(){var e=this,t=function(t,n,s){var i=e.state.selectedColor[s];g()(S(n)).text(i),g()(S(t)).val(i)};t(x.r.range,x.r.label,"r"),t(x.g.range,x.g.label,"g"),t(x.b.range,x.b.label,"b"),this.colorizeCell("selectedColor")}},{key:"changeSize",value:function(){var e=g()(S(p.column.range)).val(),t=g()(S(p.row.range)).val(),n=g()(S(p.cellSize.range)).val(),s=g()(S(p.border.range)).val(),i=new C(t,e,n,s);this.props.changeGrid(i),this.setGridSize(i)}},{key:"setGridSize",value:function(e){var t=function(t,n,s){var i=e[s];g()(S(n)).text(i),g()(S(t)).val(i)};t(p.row.range,p.row.label,"rows"),t(p.column.range,p.column.label,"columns"),t(p.cellSize.range,p.cellSize.label,"size"),t(p.border.range,p.border.label,"border"),this.setCellSize(e),F()}},{key:"setCellSize",value:function(e){g()(y(p.htmlSettings.classCellCanvas)).css("width",e.size),g()(y(p.htmlSettings.classCellCanvas)).css("height",e.size),g()(y(p.htmlSettings.classCellCanvas)).css("border",e.border+"px solid black")}},{key:"componentDidMount",value:function(){this.setColors(),this.setGridSize(this.props.grid),this.setMode(!0),this.fillDefaultSavedColors()}},{key:"componentDidUpdate",value:function(e,t){this.props.grid.toString()!==e.grid.toString()&&this.setCellSize(this.props.grid)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(q,{changeSize:this.changeSize.bind(this),changeColor:this.changeColor.bind(this),saveColor:this.saveColor.bind(this),copyColor:this.copyColor.bind(this),isMobile:this.props.isMobile,setMode:this.setMode.bind(this),eraser:this.eraser.bind(this),resetCanvas:this.resetCanvas.bind(this)})})}}]),n}(i.Component);function F(){j()(document.querySelector(S(p.htmlSettings.idCanvas))).then((function(e){var t=e.toDataURL("image/png").replace("image/png","image/octet-stream");g()("#saveImage").attr("href",t)}))}var E=function(e){return Object(s.jsx)("div",{className:"main",children:Object(s.jsx)(I,{rows:e.grid.rows,columns:e.grid.columns,funct:e.funct,id:p.htmlSettings.idCanvas})})},W=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={funct:function(){},grid:new C(p.row.default,p.column.default,p.cellSize.default,p.border.default)},s}return Object(c.a)(n,[{key:"setMode",value:function(e){var t=this.state;t.funct=e,this.setState({state:t})}},{key:"changeGrid",value:function(e){var t=this.state;t.grid=e,this.setState({state:t})}},{key:"PixelArt",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(T,{isMobile:this.props.isTablet(),grid:this.state.grid,setMode:this.setMode.bind(this),changeGrid:this.changeGrid.bind(this)}),Object(s.jsx)(E,{grid:this.state.grid,funct:this.state.funct})]})}},{key:"Warning",value:function(){return Object(s.jsx)("div",{id:"warning",children:Object(s.jsx)("h1",{children:"Por favor, voltea el dispositivo para poder usar PixelArt"})})}},{key:"render",value:function(){return this.props.isMobile()?this.Warning():this.PixelArt()}}]),n}(i.Component),J=Object(d.withGetScreen)(W),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(J,{})}),document.getElementById("root")),U()}},[[54,1,2]]]);
//# sourceMappingURL=main.e0c6b48b.chunk.js.map