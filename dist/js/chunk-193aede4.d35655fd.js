(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-193aede4"],{"15fd":function(t,e,s){"use strict";var o=s("d225"),l=s("b0b4"),n=s("308d"),a=s("6bb5"),r=s("4e2b"),c=s("9ab4"),i=s("60a3"),u=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(n["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.formItem={source:"",database:"",textarea:"",backup:1,text:"",idc:"",table:"",assigned:"",delay:null,tp:0,row:1,name:"",isquery:2,ip:"",add:"",username:"",password:"",port:"",id:0},t.wordList=[],t.page_number=1,t.current=1,t.find={picker:[],user:"",valve:!1},t.query={user:"",department:"",valve:!1,username:"",computer_room:"",connection_name:""},t.table_data=[],t.testResults=[],t.validate_gen=!0,t.loading=!1,t.is_open=!1,t.group_list=[],t.group_props=[],t.edit_password=!1,t.savePassLoading=!1,t}return Object(r["a"])(e,t),Object(l["a"])(e,[{key:"cancel_password",value:function(){this.edit_password=!1}}]),e}(i["d"]);u=Object(c["a"])([Object(i["a"])({components:{}})],u),e["a"]=u},"3f16":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",[s("Col",{attrs:{span:"24"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-bulb"}}),t._v("\n          审核规则\n        ")],1),s("div",[s("Row",[s("Col",{attrs:{span:"24"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-flower"}}),t._v("\n                  审核规则\n                ")],1),s("div",[s("Row",[s("Col",{attrs:{span:"6"}},[s("Form",{attrs:{"label-width":150}},[s("FormItem",{attrs:{label:"检查表注释"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLCheckTableComment,callback:function(e){t.$set(t.juno,"DDLCheckTableComment",e)},expression:"juno.DDLCheckTableComment"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查列注释"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDlCheckColumnComment,callback:function(e){t.$set(t.juno,"DDlCheckColumnComment",e)},expression:"juno.DDlCheckColumnComment"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查是否为not null"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLCheckColumnNullable,callback:function(e){t.$set(t.juno,"DDLCheckColumnNullable",e)},expression:"juno.DDLCheckColumnNullable"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查列默认值"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLCheckColumnDefault,callback:function(e){t.$set(t.juno,"DDLCheckColumnDefault",e)},expression:"juno.DDLCheckColumnDefault"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查时间字段默认值"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLTimeFieldDefault,callback:function(e){t.$set(t.juno,"DDLTimeFieldDefault",e)},expression:"juno.DDLTimeFieldDefault"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"是否允许跨库表迁移"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableAcrossDBRename,callback:function(e){t.$set(t.juno,"DDLEnableAcrossDBRename",e)},expression:"juno.DDLEnableAcrossDBRename"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"强制自增列初始值为1"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableAutoincrementInit,callback:function(e){t.$set(t.juno,"DDLEnableAutoincrementInit",e)},expression:"juno.DDLEnableAutoincrementInit"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"开启索引名称规范"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLIndexNameSpec,callback:function(e){t.$set(t.juno,"DDLIndexNameSpec",e)},expression:"juno.DDLIndexNameSpec"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"强制主键名为ID"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLPrimaryKeyMust,callback:function(e){t.$set(t.juno,"DDLPrimaryKeyMust",e)},expression:"juno.DDLPrimaryKeyMust"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"强制主键为自增列"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableAutoIncrement,callback:function(e){t.$set(t.juno,"DDLEnableAutoIncrement",e)},expression:"juno.DDLEnableAutoIncrement"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"开启最小化回滚语句生成"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DMLMinimalRollback,callback:function(e){t.$set(t.juno,"DMLMinimalRollback",e)},expression:"juno.DMLMinimalRollback"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1)],1),s("Col",{attrs:{span:"6"}},[s("Form",{attrs:{"label-width":150}},[s("FormItem",{attrs:{label:"检查关键词"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.CheckIdentifier,callback:function(e){t.$set(t.juno,"CheckIdentifier",e)},expression:"juno.CheckIdentifier"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查无符号标志unsigned"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableAutoincrementUnsigned,callback:function(e){t.$set(t.juno,"DDLEnableAutoincrementUnsigned",e)},expression:"juno.DDLEnableAutoincrementUnsigned"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许删除表"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableDropTable,callback:function(e){t.$set(t.juno,"DDLEnableDropTable",e)},expression:"juno.DDLEnableDropTable"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许删除库"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableDropDatabase,callback:function(e){t.$set(t.juno,"DDLEnableDropDatabase",e)},expression:"juno.DDLEnableDropDatabase"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许索引名为空"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLEnableNullIndexName,callback:function(e){t.$set(t.juno,"DDLEnableNullIndexName",e)},expression:"juno.DDLEnableNullIndexName"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许设置排列顺序"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.EnableSetCollation,callback:function(e){t.$set(t.juno,"EnableSetCollation",e)},expression:"juno.EnableSetCollation"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许设置字符集"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.EnableSetCharset,callback:function(e){t.$set(t.juno,"EnableSetCharset",e)},expression:"juno.EnableSetCharset"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许工单多条DDL"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLMultiToSubmit,callback:function(e){t.$set(t.juno,"DDLMultiToSubmit",e)},expression:"juno.DDLMultiToSubmit"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"打开OSC"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.IsOSC,callback:function(e){t.$set(t.juno,"IsOSC",e)},expression:"juno.IsOSC"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许字段类型转换"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLAllowColumnType,callback:function(e){t.$set(t.juno,"DDLAllowColumnType",e)},expression:"juno.DDLAllowColumnType"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1)],1),s("Col",{attrs:{span:"6"}},[s("Form",{attrs:{"label-width":150}},[s("FormItem",{attrs:{label:"允许主键类型非int/bigint"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLAllowPRINotInt,callback:function(e){t.$set(t.juno,"DDLAllowPRINotInt",e)},expression:"juno.DDLAllowPRINotInt"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查类型隐式转换"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DDLImplicitTypeConversion,callback:function(e){t.$set(t.juno,"DDLImplicitTypeConversion",e)},expression:"juno.DDLImplicitTypeConversion"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"单个索引指定字段上限"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.DDLMaxKeyParts,callback:function(e){t.$set(t.juno,"DDLMaxKeyParts",e)},expression:"juno.DDLMaxKeyParts"}})],1),s("FormItem",{attrs:{label:"单表索引数上限"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.DDLMaxKey,callback:function(e){t.$set(t.juno,"DDLMaxKey",e)},expression:"juno.DDLMaxKey"}})],1),s("FormItem",{attrs:{label:"char字段最大长度"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.DDLMaxCharLength,callback:function(e){t.$set(t.juno,"DDLMaxCharLength",e)},expression:"juno.DDLMaxCharLength"}})],1),s("FormItem",{attrs:{label:"表名最大长度"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.MaxTableNameLen,callback:function(e){t.$set(t.juno,"MaxTableNameLen",e)},expression:"juno.MaxTableNameLen"}})],1),s("FormItem",{attrs:{label:"DML最大影响行数"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.MaxAffectRows,callback:function(e){t.$set(t.juno,"MaxAffectRows",e)},expression:"juno.MaxAffectRows"}})],1),s("FormItem",{attrs:{label:"DDL最大影响行数"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.MaxDDLAffectRows,callback:function(e){t.$set(t.juno,"MaxDDLAffectRows",e)},expression:"juno.MaxDDLAffectRows"}})],1),s("FormItem",{attrs:{label:"允许的Collate范围"}},[s("Input",{model:{value:t.juno.SupportCollation,callback:function(e){t.$set(t.juno,"SupportCollation",e)},expression:"juno.SupportCollation"}})],1),s("FormItem",{attrs:{label:"允许的Charset范围"}},[s("Input",{model:{value:t.juno.SupportCharset,callback:function(e){t.$set(t.juno,"SupportCharset",e)},expression:"juno.SupportCharset"}})],1),s("FormItem",{attrs:{label:"建表必须拥有字段"}},[s("Input",{model:{value:t.juno.MustHaveColumns,callback:function(e){t.$set(t.juno,"MustHaveColumns",e)},expression:"juno.MustHaveColumns"}})],1)],1)],1),s("Col",{attrs:{span:"6"}},[s("Form",{attrs:{"label-width":150}},[s("FormItem",{attrs:{label:"OSCMinTableSize"}},[s("InputNumber",{attrs:{min:0,formatter:function(t){return t+"m"}},model:{value:t.juno.OscSize,callback:function(e){t.$set(t.juno,"OscSize",e)},expression:"juno.OscSize"}})],1),s("FormItem",{attrs:{label:"检查插入语句存在列名"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DMLInsertColumns,callback:function(e){t.$set(t.juno,"DMLInsertColumns",e)},expression:"juno.DMLInsertColumns"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"检查dml语句where条件"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DMLWhere,callback:function(e){t.$set(t.juno,"DMLWhere",e)},expression:"juno.DMLWhere"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"dml语句禁用order"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DMLOrder,callback:function(e){t.$set(t.juno,"DMLOrder",e)},expression:"juno.DMLOrder"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"dml语句禁用select"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.DMLSelect,callback:function(e){t.$set(t.juno,"DMLSelect",e)},expression:"juno.DMLSelect"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许创建视图"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.AllowCreateView,callback:function(e){t.$set(t.juno,"AllowCreateView",e)},expression:"juno.AllowCreateView"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许创建分区表"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.AllowCreatePartition,callback:function(e){t.$set(t.juno,"AllowCreatePartition",e)},expression:"juno.AllowCreatePartition"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"允许bit,enum,set类型"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.AllowSpecialType,callback:function(e){t.$set(t.juno,"AllowSpecialType",e)},expression:"juno.AllowSpecialType"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"Insert语句字段上限"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.DMLMaxInsertRows,callback:function(e){t.$set(t.juno,"DMLMaxInsertRows",e)},expression:"juno.DMLMaxInsertRows"}})],1)],1)],1)],1)],1)])],1)],1),s("br"),s("Row",[s("Col",{attrs:{span:"12"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-flower"}}),t._v("\n                  Pt-OSC设置\n                ")],1),s("div",[s("Row",[s("Col",{attrs:{span:"12"}},[s("Form",{attrs:{"label-width":180}},[s("FormItem",{attrs:{label:"OscDropNewTable"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.OscDropNewTable,callback:function(e){t.$set(t.juno,"OscDropNewTable",e)},expression:"juno.OscDropNewTable"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"OscDropOldTable"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.OscDropOldTable,callback:function(e){t.$set(t.juno,"OscDropOldTable",e)},expression:"juno.OscDropOldTable"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"OscCheckReplicationFilters"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.OscCheckReplicationFilters,callback:function(e){t.$set(t.juno,"OscCheckReplicationFilters",e)},expression:"juno.OscCheckReplicationFilters"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"OscCheckAlter"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.OscCheckAlter,callback:function(e){t.$set(t.juno,"OscCheckAlter",e)},expression:"juno.OscCheckAlter"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"OscPrintSql"}},[s("i-switch",{attrs:{size:"large"},model:{value:t.juno.OscPrintSql,callback:function(e){t.$set(t.juno,"OscPrintSql",e)},expression:"juno.OscPrintSql"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),s("FormItem",{attrs:{label:"OscAlterForeignKeysMethod"}},[s("Input",{model:{value:t.juno.OscAlterForeignKeysMethod,callback:function(e){t.$set(t.juno,"OscAlterForeignKeysMethod",e)},expression:"juno.OscAlterForeignKeysMethod"}})],1),s("FormItem",{attrs:{label:"OscChunkTime"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscChunkTime,callback:function(e){t.$set(t.juno,"OscChunkTime",e)},expression:"juno.OscChunkTime"}})],1)],1)],1),s("Col",{attrs:{span:"12"}},[s("Form",{attrs:{"label-width":200}},[s("FormItem",{attrs:{label:"OscBinDir"}},[s("Input",{model:{value:t.juno.OscBinDir,callback:function(e){t.$set(t.juno,"OscBinDir",e)},expression:"juno.OscBinDir"}})],1),s("FormItem",{attrs:{label:"OscMaxLag"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscMaxLag,callback:function(e){t.$set(t.juno,"OscMaxLag",e)},expression:"juno.OscMaxLag"}})],1),s("FormItem",{attrs:{label:"OscCheckInterval"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscCheckInterval,callback:function(e){t.$set(t.juno,"OscCheckInterval",e)},expression:"juno.OscCheckInterval"}})],1),s("FormItem",{attrs:{label:"OscMaxThreadConnected"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscMaxThreadConnected,callback:function(e){t.$set(t.juno,"OscMaxThreadConnected",e)},expression:"juno.OscMaxThreadConnected"}})],1),s("FormItem",{attrs:{label:"OscMaxThreadRunning"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscMaxThreadRunning,callback:function(e){t.$set(t.juno,"OscMaxThreadRunning",e)},expression:"juno.OscMaxThreadRunning"}})],1),s("FormItem",{attrs:{label:"OscCriticalThreadConnected"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscCriticalThreadConnected,callback:function(e){t.$set(t.juno,"OscCriticalThreadConnected",e)},expression:"juno.OscCriticalThreadConnected"}})],1),s("FormItem",{attrs:{label:"OscCriticalThreadRunning"}},[s("InputNumber",{attrs:{min:0},model:{value:t.juno.OscCriticalThreadRunning,callback:function(e){t.$set(t.juno,"OscCriticalThreadRunning",e)},expression:"juno.OscCriticalThreadRunning"}})],1),s("FormItem",{attrs:{label:"OscRecursionMethod"}},[s("Input",{model:{value:t.juno.OscRecursionMethod,callback:function(e){t.$set(t.juno,"OscRecursionMethod",e)},expression:"juno.OscRecursionMethod"}})],1)],1)],1)],1)],1)])],1),s("Col",{attrs:{span:"12"}},[s("Card",{staticClass:"margin-left-10"},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"md-flower"}}),t._v("\n                  保存\n                ")],1),s("div",[s("Alert",{staticClass:"margin-left-10",attrs:{"show-icon":"",type:"warning"}},[t._v("\n                    注意事项\n                    "),s("Icon",{attrs:{slot:"icon",type:"ios-bulb-outline"},slot:"icon"}),s("template",{slot:"desc"},[t._v("\n                      1.数值型规则0值都为不受限制。\n                      "),s("br"),t._v("\n                      2.开启检查时间字段默认值,所有时间类型字段都必须设置默认值且默认值必须为CURRENT_TIMESTAMP\n                      "),s("br"),t._v("\n                      3.osc相关规则请参考相关工具参数说明。\n                      "),s("br"),t._v("\n                      4.受制于各种条件影响, 影响行数判断并不一定准确,仅作为部分参考。\n                      "),s("br"),t._v("\n                      5.OSCMinTableSize当表体积大于该值时如果启动osc则走osc执行。\n                      "),s("br"),t._v("\n                      6.排序/字符集/建表必须拥有字段设置 请使用逗号分隔多个值\n                    ")])],2),s("Button",{staticClass:"margin-left-10",attrs:{type:"primary",long:""},on:{click:t.referRoles}},[t._v("保存")])],1)])],1)],1)],1)])],1)],1)],1)},l=[],n=s("d225"),a=s("b0b4"),r=s("308d"),c=s("6bb5"),i=s("4e2b"),u=s("9ab4"),p=s("bc3a"),m=s.n(p),b=s("60a3"),j=s("15fd"),D=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.juno={DMLMaxInsertRows:2},t}return Object(i["a"])(e,t),Object(a["a"])(e,[{key:"referRoles",value:function(){var t=this;m.a.post("".concat(this.$config.url,"/group/setting/roles"),{juno:this.juno}).then(function(e){t.$config.notice(e.data)}).catch(function(e){t.$config.err_notice(t,e)})}},{key:"mounted",value:function(){var t=this;m.a.get("".concat(this.$config.url,"/group/setting")).then(function(e){t.juno=e.data.AuditRole}).catch(function(e){t.$config.err_notice(t,e)})}}]),e}(Object(b["b"])(j["a"]));D=Object(u["a"])([b["a"]],D);var d=D,v=d,h=(s("6957"),s("2877")),I=Object(h["a"])(v,o,l,!1,null,"5ed217a1",null);e["default"]=I.exports},6957:function(t,e,s){"use strict";var o=s("c12a"),l=s.n(o);l.a},c12a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-193aede4.d35655fd.js.map