(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f96f1c","chunk-56830af9","chunk-2f6039ec","chunk-2d0dec69","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"86a6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板标题"}},[a("a-input",{attrs:{disabled:""},model:{value:e.templateName,callback:function(t){e.templateName=t},expression:"templateName"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[a("a-textarea",{attrs:{disabled:"",autosize:{minRows:5,maxRows:8}},model:{value:e.templateContent,callback:function(t){e.templateContent=t},expression:"templateContent"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"测试数据"}},[a("a-textarea",{attrs:{placeholder:"请输入json格式测试数据",autosize:{minRows:5,maxRows:8}},model:{value:e.testData,callback:function(t){e.testData=t},expression:"testData"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"消息类型"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择消息类型",dictCode:"msgType"},model:{value:e.msgType,callback:function(t){e.msgType=t},expression:"msgType"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"消息接收方"}},[a("a-input",{attrs:{placeholder:"请输入消息接收方"},model:{value:e.receiver,callback:function(t){e.receiver=t},expression:"receiver"}})],1)],1)],1)],1)},n=[],l=a("0fea"),r={name:"SysMessageTestModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,url:{send:"/message/sysMessageTemplate/sendMsg"},templateName:"",templateContent:"",receiver:"",msgType:"",testData:"",sendParams:{}}},methods:{open:function(e){this.sendParams.templateCode=e.templateCode,this.templateName=e.templateName,this.templateContent=e.templateContent,this.testData=e.templateTestJson,this.visible=!0},close:function(){this.receiver="",this.msgType="",this.sendParams={},this.visible=!1},handleOk:function(){var e=this,t=this.url.send,a="post";this.sendParams.testData=this.testData,this.sendParams.receiver=this.receiver,this.sendParams.msgType=this.msgType,Object(l["m"])(t,this.sendParams,a).then((function(t){t.success?e.$message.success(t.message):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.close()}}},o=r,i=a("2877"),c=Object(i["a"])(o,s,n,!1,null,"0a67d4a2",null);t["default"]=c.exports},"88bc":function(e,t,a){(function(t){var a=1/0,s=9007199254740991,n="[object Arguments]",l="[object Function]",r="[object GeneratorFunction]",o="[object Symbol]",i="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=i||c||Function("return this")();function m(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function u(e,t){var a=-1,s=e?e.length:0,n=Array(s);while(++a<s)n[a]=t(e[a],a,e);return n}function p(e,t){var a=-1,s=t.length,n=e.length;while(++a<s)e[n+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,g=f.toString,y=d.Symbol,b=f.propertyIsEnumerable,v=y?y.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,s,n){var l=-1,r=e.length;a||(a=k),n||(n=[]);while(++l<r){var o=e[l];t>0&&a(o)?t>1?C(o,t-1,a,s,n):p(n,o):s||(n[n.length]=o)}return n}function x(e,t){return e=Object(e),O(e,t,(function(t,a){return a in e}))}function O(e,t,a){var s=-1,n=t.length,l={};while(++s<n){var r=t[s],o=e[r];a(o,r)&&(l[r]=o)}return l}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,s=-1,n=w(a.length-t,0),l=Array(n);while(++s<n)l[s]=a[t+s];s=-1;var r=Array(t+1);while(++s<t)r[s]=a[s];return r[t]=l,m(e,this,r)}}function k(e){return E(e)||j(e)||!!(v&&e&&e[v])}function T(e){if("string"==typeof e||F(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return $(e)&&h.call(e,"callee")&&(!b.call(e,"callee")||g.call(e)==n)}var E=Array.isArray;function R(e){return null!=e&&P(e.length)&&!_(e)}function $(e){return N(e)&&R(e)}function _(e){var t=D(e)?g.call(e):"";return t==l||t==r}function P(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=s}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||N(e)&&g.call(e)==o}var M=S((function(e,t){return null==e?{}:x(e,u(C(t,1),T))}));e.exports=M}).call(this,a("c8ba"))},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("8e6e"),a("7f7f");var s=a("bd86"),n=(a("456d"),a("ac6a"),a("ca00")),l=a("0fea"),r=a("8bbf"),o=a.n(r),i=a("9fb0");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={data:function(){return{tokenHeader:{"X-Access-Token":o.a.ls.get(i["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(l["h"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(n["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(l["b"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(l["b"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=d({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(l["g"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var s=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=s,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(s)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,s=a.message,n=a.result,l=n.msg,r=n.fileUrl,o=n.fileName,i=window._CONFIG["domianURL"]+r;this.$warning({title:s,content:t("div",[t("span",[l]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:i,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},c382:function(e,t,a){},d579:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},n=[],l=(a("c5f6"),{name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}}),r=l,o=a("2877"),i=Object(o["a"])(r,s,n,!1,null,"4de15389",null);t["default"]=i.exports},e5ab:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:{xs:8,sm:16,md:24,lg:32}}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{"margin-right":"-35px"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板CODE"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateCode",e.validatorRules.templateCode],expression:"['templateCode', validatorRules.templateCode ]"}],attrs:{disabled:e.disable,placeholder:"请输入模板编码"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板类型"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateType",e.validatorRules.templateType],expression:"['templateType', validatorRules.templateType ]"}],attrs:{triggerChange:!0,dictCode:"msgType",placeholder:"请选择模板类型"},on:{change:e.handleChangeTemplateType}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"2"}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateName",e.validatorRules.templateName],expression:"['templateName', validatorRules.templateName]"}],staticStyle:{width:"122%"},attrs:{placeholder:"请输入模板标题"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"4"}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.useEditor,expression:"!useEditor"}],staticStyle:{"margin-left":"4px",width:"126%"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateContent",e.validatorRules.templateContent],expression:"['templateContent', validatorRules.templateContent ]"}],attrs:{placeholder:"请输入模板内容",autosize:{minRows:8,maxRows:8}}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"4"}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.useEditor,expression:"useEditor"}],staticStyle:{"margin-left":"4px",width:"126%"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[a("j-editor",{model:{value:e.templateEditorContent,callback:function(t){e.templateEditorContent=t},expression:"templateEditorContent"}})],1)],1)],1)],1)],1)],1)},n=[],l=a("0fea"),r=a("88bc"),o=a.n(r),i=a("4ec3"),c=a("a061"),d={name:"SysMessageTemplateModal",components:{JEditor:c["default"]},data:function(){return{title:"操作",visible:!1,disable:!0,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{templateCode:{rules:[{required:!0,message:"请输入模板CODE!"},{validator:this.validateTemplateCode}]},templateName:{rules:[{required:!0,message:"请输入模板标题!"}]},templateContent:{rules:[]},templateType:{rules:[{required:!0,message:"请输入模板类型!"}]}},url:{add:"/message/sysMessageTemplate/add",edit:"/message/sysMessageTemplate/edit"},useEditor:!1,templateEditorContent:""}},created:function(){},methods:{add:function(){this.disable=!1,this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.useEditor=2==e.templateType||4==e.templateType,this.useEditor?this.templateEditorContent=e.templateContent:this.templateEditorContent="",this.visible=!0,this.$nextTick((function(){t.useEditor?t.form.setFieldsValue(o()(t.model,"templateCode","templateName","templateTestJson","templateType")):t.form.setFieldsValue(o()(t.model,"templateCode","templateContent","templateName","templateTestJson","templateType"))}))},close:function(){this.$emit("close"),this.visible=!1,this.disable=!0},handleOk:function(){var e=this;this.model.templateType=this.templateType;var t=this;this.form.validateFields((function(a,s){if(!a){t.confirmLoading=!0;var n="",r="";e.model.id?(n+=e.url.edit,r="put"):(n+=e.url.add,r="post");var o=Object.assign(e.model,s);e.useEditor&&(o.templateContent=e.templateEditorContent),console.log(o),Object(l["m"])(n,o,r).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},validateTemplateCode:function(e,t,a){var s={tableName:"sys_sms_template",fieldName:"template_code",fieldVal:t,dataId:this.model.id};Object(i["m"])(s).then((function(e){e.success?a():a(e.message)}))},handleCancel:function(){this.close()},handleChangeTemplateType:function(e){this.useEditor=2==e||4==e}}},m=d,u=a("2877"),p=Object(u["a"])(m,s,n,!1,null,"d43351b2",null);t["default"]=p.exports},fb00:function(e,t,a){"use strict";var s=a("c382"),n=a.n(s);n.a},fd15:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"模板CODE"}},[a("a-input",{attrs:{placeholder:"请输入模板CODE"},model:{value:e.queryParam.templateCode,callback:function(t){e.$set(e.queryParam,"templateCode",t)},expression:"queryParam.templateCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"模板内容"}},[a("a-input",{attrs:{placeholder:"请输入模板内容"},model:{value:e.queryParam.templateContent,callback:function(t){e.$set(e.queryParam,"templateContent",t)},expression:"queryParam.templateContent"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"模板标题"}},[a("a-input",{attrs:{placeholder:"请输入模板标题"},model:{value:e.queryParam.templateName,callback:function(t){e.$set(e.queryParam,"templateName",t)},expression:"queryParam.templateName"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"模板类型"}},[a("a-input",{attrs:{placeholder:"请输入模板类型"},model:{value:e.queryParam.templateType,callback:function(t){e.$set(e.queryParam,"templateType",t)},expression:"queryParam.templateType"}})],1)],1)]:e._e(),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("消息模板")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"templateContent",fn:function(e){return a("span",{},[a("j-ellipsis",{attrs:{value:e,length:25}})],1)}},{key:"action",fn:function(t,s){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(s.id)}}},[a("a",[e._v("删除")])])],1),a("a-menu-item",[a("a",{on:{click:function(t){return e.handleTest(s)}}},[e._v("发送测试")])])],1)],1)],1)}}])})],1),a("sysMessageTemplate-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("sysMessageTest-modal",{ref:"testModal"})],1)},n=[],l=a("e5ab"),r=a("86a6"),o=a("b65a"),i=a("d579"),c={name:"SysMessageTemplateList",mixins:[o["a"]],components:{JEllipsis:i["default"],SysMessageTemplateModal:l["default"],SysMessageTestModal:r["default"]},data:function(){return{description:"消息模板管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"模板CODE",align:"center",dataIndex:"templateCode"},{title:"模板标题",align:"center",dataIndex:"templateName"},{title:"模板内容",align:"center",dataIndex:"templateContent",scopedSlots:{customRender:"templateContent"}},{title:"模板类型",align:"center",dataIndex:"templateType",customRender:function(e){return"1"==e?"短信":"2"==e?"邮件":"3"==e?"微信":"4"==e?"系统":void 0}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/message/sysMessageTemplate/list",delete:"/message/sysMessageTemplate/delete",deleteBatch:"/message/sysMessageTemplate/deleteBatch",exportXlsUrl:"message/sysMessageTemplate/exportXls",importExcelUrl:"message/sysMessageTemplate/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handleTest:function(e){this.$refs.testModal.open(e),this.$refs.testModal.title="发送测试"}}},d=c,m=(a("fb00"),a("2877")),u=Object(m["a"])(d,s,n,!1,null,"93db85d8",null);t["default"]=u.exports}}]);