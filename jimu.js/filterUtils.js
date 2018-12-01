// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/date/locale dojo/number esri/lang dojo/data/ItemFileWriteStore jimu/utils moment/moment".split(" "),function(w,l,m,v,u,r,x,p,t){var g=w([],{_stringFieldType:"esriFieldTypeString",_dateFieldType:"esriFieldTypeDate",_numberFieldTypes:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_supportFieldTypes:[],dayInMS:86399E3,MinuteInMS:59E3,SecInMS:1E3,fieldsStore:null,isHosted:!1,
constructor:function(){String.prototype.startsWith=function(a){return 0===this.indexOf(a)};String.prototype.endsWith=function(a){return this.substring(this.length-a.length)===a};String.prototype.count=function(a){return this.split(a).length-1};String.prototype.trim||(String.prototype.trim=l.trim);this._supportFieldTypes=[];this._supportFieldTypes.push(this._stringFieldType);this._supportFieldTypes.push(this._dateFieldType);this._supportFieldTypes=this._supportFieldTypes.concat(this._numberFieldTypes)},
OPERATORS:{stringOperatorIs:"stringOperatorIs",stringOperatorIsNot:"stringOperatorIsNot",stringOperatorStartsWith:"stringOperatorStartsWith",stringOperatorEndsWith:"stringOperatorEndsWith",stringOperatorContains:"stringOperatorContains",stringOperatorDoesNotContain:"stringOperatorDoesNotContain",stringOperatorIsAnyOf:"stringOperatorIsAnyOf",stringOperatorIsNoneOf:"stringOperatorIsNoneOf",stringOperatorIsBlank:"stringOperatorIsBlank",stringOperatorIsNotBlank:"stringOperatorIsNotBlank",numberOperatorIs:"numberOperatorIs",
numberOperatorIsNot:"numberOperatorIsNot",numberOperatorIsAtLeast:"numberOperatorIsAtLeast",numberOperatorIsLessThan:"numberOperatorIsLessThan",numberOperatorIsAtMost:"numberOperatorIsAtMost",numberOperatorIsGreaterThan:"numberOperatorIsGreaterThan",numberOperatorIsBetween:"numberOperatorIsBetween",numberOperatorIsNotBetween:"numberOperatorIsNotBetween",numberOperatorIsAnyOf:"numberOperatorIsAnyOf",numberOperatorIsNoneOf:"numberOperatorIsNoneOf",numberOperatorIsBlank:"numberOperatorIsBlank",numberOperatorIsNotBlank:"numberOperatorIsNotBlank",
dateOperatorIsOn:"dateOperatorIsOn",dateOperatorIsNotOn:"dateOperatorIsNotOn",dateOperatorIsBefore:"dateOperatorIsBefore",dateOperatorIsAfter:"dateOperatorIsAfter",dateOperatorIsOnOrBefore:"dateOperatorIsOnOrBefore",dateOperatorIsOnOrAfter:"dateOperatorIsOnOrAfter",dateOperatorIsBetween:"dateOperatorIsBetween",dateOperatorIsNotBetween:"dateOperatorIsNotBetween",dateOperatorIsBlank:"dateOperatorIsBlank",dateOperatorIsNotBlank:"dateOperatorIsNotBlank",dateOperatorInTheLast:"dateOperatorInTheLast",dateOperatorNotInTheLast:"dateOperatorNotInTheLast",
dateOperatorIsIn:"dateOperatorIsIn",dateOperatorIsNotIn:"dateOperatorIsNotIn",dateOperatorMinutes:"dateOperatorMinutes",dateOperatorHours:"dateOperatorHours",dateOperatorDays:"dateOperatorDays",dateOperatorWeeks:"dateOperatorWeeks",dateOperatorMonths:"dateOperatorMonths",dateOperatorYears:"dateOperatorYears"},prepare:function(a,b){this.isHosted=p.isHostedService(a);b=b||[];this.setFieldsStoreByFieldInfos(b)},isPartsObjHasError:function(a){var b=!1;a&&(b=a.parts&&0<=a.parts.length?m.every(a.parts,
l.hitch(this,function(a){return a.parts?0<a.parts.length?m.every(a.parts,l.hitch(this,function(a){return!a.error})):!1:!a.error})):!1);return!b},isAskForValues:function(a){return g.isAskForValues(a)},hasVirtualDate:function(a){return g.hasVirtualDate(a)},setFieldsStoreByFieldInfos:function(a){a=m.filter(a,l.hitch(this,function(a){return 0<=this._supportFieldTypes.indexOf(a.type)}));a=m.map(a,function(a,c){var b;switch(a.type){case "esriFieldTypeString":b="string";break;case "esriFieldTypeDate":b=
"date";break;default:b="number"}return{id:c,label:a.name,shortType:b,alias:a.alias,editable:a.editable,name:a.name,nullable:a.nullable,type:a.type}},this);this.fieldsStore=new x({data:{identifier:"id",label:"label",items:a}});return a.length},_validatePartsObj:function(a){return a&&"object"===typeof a},_isObject:function(a){return a&&"object"===typeof a},_isString:function(a){return a&&"string"===typeof a},containsNonLatinCharacter:function(a){for(var b=0;b<a.length;b++)if(255<a.charCodeAt(b))return!0;
return!1},containsNonLatinCharacterBatch:function(a){for(var b=!1,c=0;c<a.length;c++){var d=a[c],d=l.isObject(d)?d.value:d;b||(b=this.containsNonLatinCharacter(d))}return b},getExprByFilterObj:function(a){if(!m.every(a.parts,function(a){return!!a}))return null;if(!this.isPartsObjReadyToBuild(a))return a.expr="",a.displaySQL="",a.expr;this._handleVirtualDate(a);var b="",c="",d,e;if(0===a.parts.length)c=b="1\x3d1";else if(1===a.parts.length)d=a.parts[0],d.valueObj&&l.isArray(d.valueObj.value)&&"multiple"!==
d.valueObj.type?(e=this._checkIfValObjArrayAndChecked(d.valueObj.value))?(b=this.builtFilterString(d),c=d.displaySQL):c=b="1\x3d1":(b=this.builtFilterString(d),c=d.displaySQL);else for(var f="",h=0;h<a.parts.length;h++){d=a.parts[h];d.valueObj&&l.isArray(d.valueObj.value)&&"multiple"!==d.valueObj.type?(e=this._checkIfValObjArrayAndChecked(d.valueObj.value))?(e=this.builtFilterString(d),d=d.displaySQL):d=e="1\x3d1":(e=this.builtFilterString(d),d=d.displaySQL);if(!r.isDefined(e))return null;b+=f+"("+
e+")";c+=f+"("+d+")";f=f||" "+a.logicalOperator+" "}a.expr=b;a.displaySQL=c;return b},_checkIfValObjArrayAndChecked:function(a){var b=!1,c;for(c in a)if(a[c].isChecked){b=!0;break}return b},_handleVirtualDate:function(a){this.hasVirtualDate(a)&&m.forEach(a.parts,l.hitch(this,function(a){a.parts?m.forEach(a.parts,l.hitch(this,function(a){this._updateRealDateByVirtualDate(a)})):this._updateRealDateByVirtualDate(a)}))},_updateRealDateByVirtualDate:function(a){var b;b=[this.OPERATORS.dateOperatorIsOn,
this.OPERATORS.dateOperatorIsNotOn,this.OPERATORS.dateOperatorIsBefore,this.OPERATORS.dateOperatorIsAfter,this.OPERATORS.dateOperatorIsOnOrBefore,this.OPERATORS.dateOperatorIsOnOrAfter];a.valueObj.virtualDate?a.operator===this.OPERATORS.dateOperatorIsIn||a.operator===this.OPERATORS.dateOperatorIsNotIn?(b=g.getRealDateByVirtualDate(a.valueObj.virtualDate),a.value1=b[0],a.value2=b[1],a.valueObj.value1=b[0].toDateString(),a.valueObj.value2=b[1].toDateString()):-1<b.indexOf(a.operator)&&(b=g.getRealDateByVirtualDate(a.valueObj.virtualDate),
a.value=b,a.valueObj.value=b.toDateString()):(a.valueObj.virtualDate1&&(b=g.getRealDateByVirtualDate(a.valueObj.virtualDate1),a.value1=b,a.valueObj.value1=b.toDateString()),a.valueObj.virtualDate2&&(b=g.getRealDateByVirtualDate(a.valueObj.virtualDate2),a.value2=b,a.valueObj.value2=b.toDateString()))},isPartsObjReadyToBuild:function(a){return m.every(a.parts,l.hitch(this,function(a){return a.parts?m.every(a.parts,l.hitch(this,function(a){return this._isPartReadyToBuild(a)})):this._isPartReadyToBuild(a)}))},
_isPartReadyToBuild:function(a){var b=a.fieldObj.shortType,c=a.operator,d=a.valueObj;a=d.type||"value";var e=d.value,f=d.value1,d=d.value2;if("value"===a){if("string"===b)return c===this.OPERATORS.stringOperatorIsBlank||c===this.OPERATORS.stringOperatorIsNotBlank?!0:p.isNotEmptyString(e);if("number"===b)return c===this.OPERATORS.numberOperatorIsBlank||c===this.OPERATORS.numberOperatorIsNotBlank?!0:c===this.OPERATORS.numberOperatorIsBetween||c===this.OPERATORS.numberOperatorIsNotBetween?p.isValidNumber(f)&&
p.isValidNumber(d):p.isValidNumber(e);if("date"===b)return c===this.OPERATORS.dateOperatorIsBlank||c===this.OPERATORS.dateOperatorIsNotBlank?!0:c===this.OPERATORS.dateOperatorIsBetween||c===this.OPERATORS.dateOperatorIsNotBetween||c===this.OPERATORS.dateOperatorIsIn||c===this.OPERATORS.dateOperatorIsNotIn?p.isNotEmptyString(f)&&p.isNotEmptyString(d):c===this.OPERATORS.dateOperatorInTheLast||c===this.OPERATORS.dateOperatorNotInTheLast?void 0!==e&&null!==e:p.isNotEmptyString(e)}else{if("field"===a)return p.isNotEmptyString(e);
if("unique"===a){if("string"===b)return p.isNotEmptyString(e);if("number"===b)return p.isValidNumber(e);if("date"===b)return p.isValidDate(e)}else if("multiple"===a){if("string"===b)return p.isNotEmptyStringArray(e);if("number"===b)return p.isValidNumberArray(e)}else if("values"!==a&&("uniquePredefined"===a||"multiplePredefined"===a)){if("string"===b)return p.isNotEmptyStringArray(e);if("number"===b)return p.isValidNumberArray(e)}}return!1},builtFilterString:function(a){var b="",c="";if(a.parts)for(var d=
"",e=0;e<a.parts.length;e++){var f=a.parts[e],h=this.builtSingleFilterString(f);f.expr=h.whereClause;if(!r.isDefined(h.whereClause))return null;b+=d+h.whereClause;c+=d+f.displaySQL;d=" "+a.logicalOperator+" "}else a&&a.valueObj&&"multiple"===a.valueObj.type&&0===a.valueObj.value.length?b=c="1\x3d1":(b=this.builtSingleFilterString(a).whereClause,c=a.displaySQL);a.expr=b;a.displaySQL=c;return b},_preBuiltSingleFilterString:function(a){if("string"===a.fieldObj.shortType&&"\x3cNull\x3e"===a.valueObj.value){if(a.operator===
this.OPERATORS.stringOperatorIs)return{whereClause:a.fieldObj.name+" IS NULL"};if(a.operator===this.OPERATORS.stringOperatorIsNot)return{whereClause:a.fieldObj.name+" IS NOT NULL"}}if("number"===a.fieldObj.shortType&&"\x3cNull\x3e"===a.valueObj.value){if(a.operator===this.OPERATORS.numberOperatorIs)return{whereClause:a.fieldObj.name+" IS NULL"};if(a.operator===this.OPERATORS.numberOperatorIsNot)return{whereClause:a.fieldObj.name+" IS NOT NULL"}}return null},_handlePrefixStringsForIn:function(a,b){for(var c=
[],d=0;d<b.length;d++){var e=b[d],e=e.replace(/\'/g,"''");c.push(e)}return""+a+"'"+c.join("',"+a+"'")+"'"},builtSingleFilterString:function(a,b){this.isHosted&&(a.caseSensitive=!1);if(r.isDefined(a.valueObj.isValid)&&!a.valueObj.isValid)return{whereClause:null};var c=this._preBuiltSingleFilterString(a);if(c)return c;var d=a.valueObj.value,e=a.valueObj.value1,f=a.valueObj.value2,h=!1;a.interactiveObj&&r.isDefined(b)&&(h=!0,r.isDefined(a.valueObj.value)&&(d="{"+b+"}"),r.isDefined(a.valueObj.value1)&&
(e="{"+b+"}"),r.isDefined(a.valueObj.value2)&&(f="{"+(b+1)+"}"));var n=c="",n="",g=[];if("string"===a.fieldObj.shortType){var k="";h&&this.isHosted?k="N":d&&"field"!==a.valueObj.type&&this.isHosted&&(l.isArray(d)&&this.containsNonLatinCharacterBatch(d)||!l.isArray(d)&&this.containsNonLatinCharacter(d))&&(k="N");if(d&&"multiple"===a.valueObj.type){if(a.operator===this.OPERATORS.stringOperatorIsAnyOf||a.operator===this.OPERATORS.stringOperatorIsNoneOf)d=this._handlePrefixStringsForIn(k,d)}else!d||"multiplePredefined"!==
a.valueObj.type&&"uniquePredefined"!==a.valueObj.type||(g=[],m.forEach(d,l.hitch(this,function(a){a.isChecked&&g.push(a.value)})),d=a.operator===this.OPERATORS.stringOperatorIs||a.operator===this.OPERATORS.stringOperatorIsNot?g[0]:a.operator===this.OPERATORS.stringOperatorIsAnyOf||a.operator===this.OPERATORS.stringOperatorIsNoneOf?this._handlePrefixStringsForIn(k,g):g);var q=[];switch(a.operator){case this.OPERATORS.stringOperatorIs:"field"===a.valueObj.type?c=a.fieldObj.name+" \x3d "+d:"multiple"===
a.valueObj.type?(n=d.join("','"),c=a.caseSensitive?a.fieldObj.name+" IN ("+k+"'"+n.replace(/\'/g,"'")+"')":"UPPER("+a.fieldObj.name+") IN ("+k+"'"+n.replace(/\'/g,"'").toUpperCase()+"')"):c=a.caseSensitive?a.fieldObj.name+" \x3d "+k+"'"+d.replace(/\'/g,"''")+"'":"UPPER("+a.fieldObj.name+") \x3d "+k+"'"+d.replace(/\'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorIsNot:"field"===a.valueObj.type?c=a.fieldObj.name+" \x3c\x3e "+d:"multiple"===a.valueObj.type?(n=d.join("','"),c=a.caseSensitive?
a.fieldObj.name+" NOT IN ("+k+"'"+n.replace(/\'/g,"'")+"')":"UPPER("+a.fieldObj.name+") NOT IN ("+k+"'"+n.replace(/\'/g,"'").toUpperCase()+"')"):c=a.caseSensitive?a.fieldObj.name+" \x3c\x3e "+k+"'"+d.replace(/\'/g,"''")+"'":"UPPER("+a.fieldObj.name+") \x3c\x3e "+k+"'"+d.replace(/\'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorStartsWith:q=[];"multiple"===a.valueObj.type||"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(m.forEach(d,l.hitch(this,function(b){a.caseSensitive?
q.push(a.fieldObj.name+" LIKE "+k+"'"+b.replace(/\'/g,"''")+"%'"):q.push("UPPER("+a.fieldObj.name+") LIKE "+k+"'"+b.replace(/\'/g,"''").toUpperCase()+"%'")})),c="(("+q.join(") or (")+"))"):c=a.caseSensitive?a.fieldObj.name+" LIKE "+k+"'"+d.replace(/\'/g,"''")+"%'":"UPPER("+a.fieldObj.name+") LIKE "+k+"'"+d.replace(/\'/g,"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorEndsWith:q=[];"multiple"===a.valueObj.type||"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?
(m.forEach(d,l.hitch(this,function(b){a.caseSensitive?q.push(a.fieldObj.name+" LIKE "+k+"'%"+b.replace(/\'/g,"''")+"'"):q.push("UPPER("+a.fieldObj.name+") LIKE "+k+"'%"+b.replace(/\'/g,"''").toUpperCase()+"'")})),c="(("+q.join(") or (")+"))"):c=a.caseSensitive?a.fieldObj.name+" LIKE "+k+"'%"+d.replace(/\'/g,"''")+"'":"UPPER("+a.fieldObj.name+") LIKE "+k+"'%"+d.replace(/\'/g,"''").toUpperCase()+"'";break;case this.OPERATORS.stringOperatorContains:q=[];"multiple"===a.valueObj.type||"multiplePredefined"===
a.valueObj.type||"uniquePredefined"===a.valueObj.type?(m.forEach(d,l.hitch(this,function(b){a.caseSensitive?q.push(a.fieldObj.name+" LIKE "+k+"'%"+b.replace(/\'/g,"''")+"%'"):q.push("UPPER("+a.fieldObj.name+") LIKE "+k+"'%"+b.replace(/\'/g,"''").toUpperCase()+"%'")})),c="(("+q.join(") or (")+"))"):c=a.caseSensitive?a.fieldObj.name+" LIKE "+k+"'%"+d.replace(/\'/g,"''")+"%'":"UPPER("+a.fieldObj.name+") LIKE "+k+"'%"+d.replace(/\'/g,"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorDoesNotContain:q=
[];"multiple"===a.valueObj.type||"multiplePredefined"===a.valueObj.type||"uniquePredefined"===a.valueObj.type?(m.forEach(d,l.hitch(this,function(b){a.caseSensitive?q.push(a.fieldObj.name+" NOT LIKE "+k+"'%"+b.replace(/\'/g,"''")+"%'"):q.push("UPPER("+a.fieldObj.name+") NOT LIKE "+k+"'%"+b.replace(/\'/g,"''").toUpperCase()+"%'")})),c="(("+q.join(") or (")+"))"):c=a.caseSensitive?a.fieldObj.name+" NOT LIKE "+k+"'%"+d.replace(/\'/g,"''")+"%'":"UPPER("+a.fieldObj.name+") NOT LIKE "+k+"'%"+d.replace(/\'/g,
"''").toUpperCase()+"%'";break;case this.OPERATORS.stringOperatorIsAnyOf:c=a.fieldObj.name+" IN ("+d+")";break;case this.OPERATORS.stringOperatorIsNoneOf:c=a.fieldObj.name+" NOT IN ("+d+")";break;case this.OPERATORS.stringOperatorIsBlank:c=a.fieldObj.name+" IS NULL";break;case this.OPERATORS.stringOperatorIsNotBlank:c=a.fieldObj.name+" IS NOT NULL"}}else if("number"===a.fieldObj.shortType)switch(!d||"uniquePredefined"!==a.valueObj.type&&"multiplePredefined"!==a.valueObj.type?d&&"multiple"===a.valueObj.type&&
(d=d.join(",")):(g=[],m.forEach(d,l.hitch(this,function(a){a.isChecked&&g.push(a.value)})),d=g.join(",")),a.operator){case this.OPERATORS.numberOperatorIs:c=a.fieldObj.name+" \x3d "+d;break;case this.OPERATORS.numberOperatorIsNot:c=a.fieldObj.name+" \x3c\x3e "+d;break;case this.OPERATORS.numberOperatorIsAtLeast:c=a.fieldObj.name+" \x3e\x3d "+d;break;case this.OPERATORS.numberOperatorIsLessThan:c=a.fieldObj.name+" \x3c "+d;break;case this.OPERATORS.numberOperatorIsAtMost:c=a.fieldObj.name+" \x3c\x3d "+
d;break;case this.OPERATORS.numberOperatorIsGreaterThan:c=a.fieldObj.name+" \x3e "+d;break;case this.OPERATORS.numberOperatorIsAnyOf:c=a.fieldObj.name+" IN ("+d+")";break;case this.OPERATORS.numberOperatorIsNoneOf:c=a.fieldObj.name+" NOT IN ("+d+")";break;case this.OPERATORS.numberOperatorIsBetween:c=a.fieldObj.name+" BETWEEN "+e+" AND "+f;break;case this.OPERATORS.numberOperatorIsNotBetween:c=a.fieldObj.name+" NOT BETWEEN "+e+" AND "+f;break;case this.OPERATORS.numberOperatorIsBlank:c=a.fieldObj.name+
" IS NULL";break;case this.OPERATORS.numberOperatorIsNotBlank:c=a.fieldObj.name+" IS NOT NULL"}else switch(r.isDefined(d)&&"field"!==a.valueObj.type&&"string"===typeof d&&(d=new Date(d)),"field"!==a.valueObj.type&&(d&&(d=new Date(d)),e&&(e=new Date(e)),f&&(f=new Date(f))),a.operator){case this.OPERATORS.dateOperatorIsOn:c="field"===a.valueObj.type?a.fieldObj.name+" \x3d "+d:h?a.fieldObj.name+" BETWEEN "+(this.isHosted?"":"timestamp ")+"'{"+b+"}' AND "+(this.isHosted?"":"timestamp ")+"'{"+(b+1)+"}'":
a.fieldObj.name+" BETWEEN "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(d)+"' AND "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(this.addDay(d))+"'";break;case this.OPERATORS.dateOperatorIsNotOn:c="field"===a.valueObj.type?a.fieldObj.name+" \x3c\x3e "+d:h?a.fieldObj.name+" NOT BETWEEN "+(this.isHosted?"":"timestamp ")+"'{"+b+"}' AND "+(this.isHosted?"":"timestamp ")+"'{"+(b+1)+"}'":a.fieldObj.name+" NOT BETWEEN "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(d)+"' AND "+(this.isHosted?
"":"timestamp ")+"'"+this.formatDate(this.addDay(d))+"'";break;case this.OPERATORS.dateOperatorIsBefore:c="field"===a.valueObj.type?a.fieldObj.name+" \x3c "+d:a.fieldObj.name+" \x3c "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(d)+"'";break;case this.OPERATORS.dateOperatorIsAfter:c="field"===a.valueObj.type?a.fieldObj.name+" \x3e "+d:a.fieldObj.name+" \x3e "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(this.addDay(d))+"'";break;case this.OPERATORS.dateOperatorIsOnOrBefore:c="field"===
a.valueObj.type?a.fieldObj.name+" \x3c\x3d "+d:a.fieldObj.name+" \x3c\x3d "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(this.addDay(d))+"'";break;case this.OPERATORS.dateOperatorIsOnOrAfter:c="field"===a.valueObj.type?a.fieldObj.name+" \x3e\x3d "+d:a.fieldObj.name+" \x3e\x3d "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(d)+"'";break;case this.OPERATORS.dateOperatorInTheLast:c=a.fieldObj.name+" BETWEEN CURRENT_TIMESTAMP - "+this._convertRangeToDays(a.valueObj.value,a.valueObj.range)+
" AND CURRENT_TIMESTAMP";break;case this.OPERATORS.dateOperatorNotInTheLast:c=a.fieldObj.name+" NOT BETWEEN CURRENT_TIMESTAMP - "+this._convertRangeToDays(a.valueObj.value,a.valueObj.range)+" AND CURRENT_TIMESTAMP";break;case this.OPERATORS.dateOperatorIsBetween:case this.OPERATORS.dateOperatorIsIn:c=h?a.fieldObj.name+" BETWEEN '"+e+"' AND '"+f+"'":a.fieldObj.name+" BETWEEN "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(e)+"' AND "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(this.addDay(f))+
"'";break;case this.OPERATORS.dateOperatorIsNotBetween:case this.OPERATORS.dateOperatorIsNotIn:c=h?a.fieldObj.name+" NOT BETWEEN '"+e+"' AND '"+f+"'":a.fieldObj.name+" NOT BETWEEN "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(e)+"' AND "+(this.isHosted?"":"timestamp ")+"'"+this.formatDate(this.addDay(f))+"'";break;case this.OPERATORS.dateOperatorIsBlank:c=a.fieldObj.name+" IS NULL";break;case this.OPERATORS.dateOperatorIsNotBlank:c=a.fieldObj.name+" IS NOT NULL"}"date"===a.fieldObj.shortType?
(b=l.clone(a.valueObj),b.dateFormat=a.fieldObj.dateFormat,n=this.getDisplaySQL(a.fieldObj.name,b,a.operator)):n=c;a.displaySQL=n;return{whereClause:c}},_dateENUM:{dateOperatorIsOn:"is on ",dateOperatorIsNotOn:"is not on ",dateOperatorIsIn:"is in ",dateOperatorIsNotIn:"is not in ",dateOperatorIsBefore:"is before ",dateOperatorIsAfter:"is after ",dateOperatorIsOnOrBefore:"is on or before ",dateOperatorIsOnOrAfter:"is on or after ",dateOperatorInTheLast:["is in the last "," from CURRENT_TIMESTAMP"],
dateOperatorNotInTheLast:["is not in the last "," from CURRENT_TIMESTAMP"],dateOperatorIsBetween:["is between "," and "],dateOperatorIsNotBetween:["is not between "," and "],dateOperatorIsBlank:"is blank",dateOperatorIsNotBlank:"is not blank"},_getDisplayDates:function(a){var b={value:a.virtualDate,value1:a.virtualDate1,value2:a.virtualDate2},c=""===a.dateFormat?{}:{format:{dateFormat:a.dateFormat}};if(""===a.virtualDate||void 0===a.virtualDate)b.value=p.localizeDateByFieldInfo(new Date(a.value),
c);""===a.virtualDate1&&(b.value1=p.localizeDateByFieldInfo(new Date(a.value1),c));""===a.virtualDate2&&(b.value2=p.localizeDateByFieldInfo(new Date(a.value2),c));return b},getDisplaySQL:function(a,b,c){var d="",d=this._dateENUM[c];0<c.indexOf("InTheLast")?d=d[0]+b.value+" "+this._getDateRangeEnum(b.value,b.range)+d[1]:(b=this._getDisplayDates(b,c),d=0<c.indexOf("Between")?d[0]+b.value1+d[1]+b.value2:0<c.indexOf("Blank")?this._dateENUM[c]:this._dateENUM[c]+b.value);return a+" "+d},_getDateRangeEnum:function(a,
b){b={dateOperatorYears:"year",dateOperatorDays:"day",dateOperatorMonths:"month",dateOperatorWeeks:"week",dateOperatorHours:"hour",dateOperatorMinutes:"minute"}[b];return 1<a?b+"s":b},_convertRangeToDays:function(a,b){var c=a;b===this.OPERATORS.dateOperatorYears?c=365*a:b===this.OPERATORS.dateOperatorMonths?c=30*a:b===this.OPERATORS.dateOperatorWeeks?c=7*a:b===this.OPERATORS.dateOperatorHours?c=a/24:b===this.OPERATORS.dateOperatorMinutes&&(c=a/1440);return c=Math.round(1E6*c)/1E6},formatDate:function(a){a=
new Date(a);return""+a.getUTCFullYear()+"-"+u.format(a.getUTCMonth()+1,{pattern:"00"})+"-"+u.format(a.getUTCDate(),{pattern:"00"})+" "+u.format(a.getUTCHours(),{pattern:"00"})+":"+u.format(a.getUTCMinutes(),{pattern:"00"})+":"+u.format(a.getSeconds(),{pattern:"00"})},addDay:function(a){return new Date(a.getTime()+this.dayInMS)},addMinute:function(a){return new Date(a.getTime()+this.MinuteInMS)},addSec:function(a){return new Date(a.getTime()+this.SecInMS)},getFilterObjByExpr:function(a){if(a&&this.fieldsStore){var b=
this.replaceStrings(a);a=b.defExpr;var c=this.findParts(a,"AND");1===c.parts.length&&(c=this.findParts(a,"OR"),1===c.parts.length&&(c.logicalOperator="AND"));m.forEach(c.parts,function(a){a.expr=a.expr.trim();if(a.expr.startsWith("(")&&-1<a.expr.search(/\)$/)){var b=a.expr.substring(1,a.expr.length-1),c=b.indexOf("("),d=b.indexOf(")");if(-1===c&&-1===d||c<d)a.expr=b}b=this.findParts(a.expr,"AND");1===b.parts.length&&(b=this.findParts(a.expr,"OR"));1<b.parts.length&&(a.parts=b.parts,a.logicalOperator=
b.logicalOperator)},this);this.parseExpr(c);this.reReplaceStrings(b,c,l.hitch(this,function(){c&&c.parts&&m.forEach(c.parts,l.hitch(this,function(a){a&&(a.parts?m.forEach(a.parts,l.hitch(this,function(a){this._handleParsedValuesForSinglePart(a);this._addDefalutValueTypeForSinglePart(a)})):(this._handleParsedValuesForSinglePart(a),this._addDefalutValueTypeForSinglePart(a)))}))}));this.isPartsObjHasError(c)&&(c=null);return c}},_handleParsedValuesForSinglePart:function(a){a&&a.fieldObj&&"number"===
a.fieldObj.shortType&&a.valueObj&&(a.valueObj.hasOwnProperty("value")&&(a.valueObj.value=parseFloat(a.valueObj.value)),a.valueObj.hasOwnProperty("value1")&&(a.valueObj.value1=parseFloat(a.valueObj.value1)),a.valueObj.hasOwnProperty("value2")&&(a.valueObj.value2=parseFloat(a.valueObj.value2)))},_addDefalutValueTypeForSinglePart:function(a){a&&a.valueObj&&!a.valueObj.type&&(a.valueObj.type="value")},replaceStrings:function(a){for(var b=a,c=function(a,b,d){var e=-1,e=a.indexOf("'",d+1);return e===d+
1?(e=a.indexOf("'",e+1),c(a,b,e)):d},d=[],e=a.indexOf("'");-1<e;){var f=e,e=a.indexOf("'",e+1),h=0,e=c(a,f,e);"%"===a[f+1]&&f++;"%"===a[e-1]&&(--e,h++);var n=a.substring(f+1,e);"N"===a[f-1]&&(a=a.substring(0,f-1)+a.substring(f),--f,--e);this.isDateString(n)||-1!==n.indexOf("{")?e=a.indexOf("'",e+1+h):(d.push(n),a=a.substring(0,f+1)+"#"+(d.length-1)+"#"+a.substring(e),e=a.indexOf("'",a.lastIndexOf("#")+2+h))}return{origDefExpr:b,defExpr:a,savedStrings:d}},reReplaceStrings:function(a,b,c){var d=a.savedStrings;
if(!d.length)c&&"function"===typeof c&&c();else if(d.length){var e=function(a,b){if(void 0===a.valueObj||null===a.valueObj||void 0===a.valueObj.value||null===a.valueObj.value||"string"!==a.fieldObj.shortType)return!1;var c=a.valueObj.value.indexOf("#"),d=a.valueObj.value.lastIndexOf("#");return r.isDefined(a.valueObj.value)&&-1<c?(a.valueObj.value=b[parseInt(a.valueObj.value.substring(c+1,d),10)].replace(/\'\'/g,"'"),this.builtSingleFilterString(a),!0):!1},e=l.hitch(this,e),f=!1;m.forEach(b.parts,
function(a){if(a.parts){var b=!1;m.forEach(a.parts,function(a){b=e(a,d)||b});b&&(f=b,a.expr=this.builtFilterString(a))}else(f=e(a,d)||f)&&this.builtFilterString(a)},this);c&&"function"===typeof c&&c();f&&(b.expr=null,this.getExprByFilterObj(b))}},isDateString:function(a){return 19===a.length&&"-"===a.charAt(4)&&"-"===a.charAt(7)&&" "===a.charAt(10)&&":"===a.charAt(13)&&":"===a.charAt(16)?!0:!1},findParts:function(a,b){for(var c=a.toLowerCase(),d=" "+b.toLowerCase()+" ",e=[],f=0,h=c.indexOf(d);0<h;){var n=
a.substring(f,h),g=n.toLowerCase(),k=n.count("("),l=n.count(")"),m=n.count("'");k!==l||1===m%2?h=c.indexOf(d,h+1):-1<g.indexOf(" between ")&&-1===g.indexOf(" and ")?h=c.indexOf(d,h+1):(e.push({expr:n}),f=h+d.length,h=c.indexOf(d,f))}e.push({expr:a.substring(f)});for(c=e.length-1;0<=c;c--)!this.hasOperator(e[c].expr)&&0<c&&(e[c-1].expr+=" "+b+" "+e[c].expr,e.splice(c,1));return{expr:a,parts:e,logicalOperator:b}},hasOperator:function(a){a=a.toLowerCase();return-1<a.indexOf("{")&&-1<a.indexOf("}")||
-1<a.indexOf(" \x3d ")||-1<a.indexOf(" \x3c ")||-1<a.indexOf(" \x3e ")||-1<a.indexOf(" \x3c\x3e ")||-1<a.indexOf(" \x3c\x3d ")||-1<a.indexOf(" \x3e\x3d ")||-1<a.indexOf(" like ")||-1<a.indexOf(" between ")||-1<a.indexOf(" date")||-1<a.indexOf(" is null")||-1<a.indexOf(" is not null")?!0:!1},parseExpr:function(a){m.forEach(a.parts,function(a){a.parts?this.parseExpr(a):this.parseSingleExpr(a)},this)},_preParseSingleExpr:function(a){var b=null;try{if(b=l.clone(a),b.expr=b.expr.trim(),/^UPPER\((.*)\)(\s+|\s+NOT\s+)LIKE\s+UPPER\(N?'(.*)'\)$/i.test(b.expr)){var c=
a="",d=b.expr.match(/^UPPER\((.*)\)\s+/i);if(d&&2<=d.length)a=d[1];else return null;var e=b.expr.match(/UPPER\(N?'(.*)'\)$/i);if(e&&2<=e.length)c="'"+e[1]+"'";else return null;b.expr=b.expr.replace(/^UPPER\((.*)\)\s+/i,a+" ");b.expr=b.expr.replace(/UPPER\(N?'(.*)'\)$/i,c);b.caseSensitive=!1}else/^(.+)(\s+|\s+NOT\s+)LIKE\s+N?'(.*)'$/i.test(b.expr)&&(b.caseSensitive=!0)}catch(f){return console.log(f),null}b&&this.isHosted&&(b.caseSensitive=!1);return b},_removeOperator:function(a,b,c){b=b.substring(c).trim();
"date"===a&&!this.isHosted&&b.toLowerCase().startsWith("timestamp ")&&(b=b.substring(10).trim());return b},parseSingleExpr:function(a){var b=this._preParseSingleExpr(a);b&&(a=l.mixin(a,b));var b=a.expr.trim(),c=b.indexOf(" "),d=b.substring(0,c);a.fieldObj={name:d};a.valueObj={};this.getFieldItemByName({name:d},function(b){a.fieldObj.shortType=b.shortType[0];a.fieldObj.label=b.label[0]},function(){a.error={msg:"unknown field name ("+d+")",code:1}});b=b.substring(c+1).trim();c=b.toLowerCase();c.startsWith("\x3d ")?
(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,a),a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsOn:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIs:this.OPERATORS.numberOperatorIs):c.startsWith("\x3c ")?(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsBefore:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsLessThan:a.error=
{msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("\x3e ")?(b=this._removeOperator(a.fieldObj.shortType,b,2),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsAfter:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsGreaterThan:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("\x3c\x3e ")?(b=this._removeOperator(a.fieldObj.shortType,b,3),this.storeValue(b,a),a.operator="date"===a.fieldObj.shortType?
this.OPERATORS.dateOperatorIsNotOn:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsNot:this.OPERATORS.numberOperatorIsNot):c.startsWith("\x3c\x3d ")?(b=this._removeOperator(a.fieldObj.shortType,b,3),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsOnOrBefore:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsAtMost:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("\x3e\x3d ")?(b=this._removeOperator(a.fieldObj.shortType,
b,3),this.storeValue(b,a),"date"===a.fieldObj.shortType?a.operator=this.OPERATORS.dateOperatorIsOnOrAfter:"number"===a.fieldObj.shortType?a.operator=this.OPERATORS.numberOperatorIsAtLeast:a.error={msg:"operator ("+c+") not supported for string",code:3}):c.startsWith("like ")?(b=b.substring(5).trim(),b.startsWith("N'")&&(b=b.substring(1,b.length)),b.startsWith("'%")&&b.endsWith("%'")?(this.storeValue(b.substring(2,b.length-2),a),a.operator=this.OPERATORS.stringOperatorContains):b.startsWith("'%")&&
b.endsWith("'")?(this.storeValue(b.substring(2,b.length-1),a),a.operator=this.OPERATORS.stringOperatorEndsWith):b.startsWith("'")&&b.endsWith("%'")?(this.storeValue(b.substring(1,b.length-2),a),a.operator=this.OPERATORS.stringOperatorStartsWith):a.error={msg:"value ("+c+") not supported for LIKE",code:3}):c.startsWith("not like ")?(b=b.substring(9).trim(),b.startsWith("N'")&&(b=b.substring(1,b.length)),b.startsWith("'%")&&b.endsWith("%'")?(this.storeValue(b.substring(2,b.length-2),a),a.operator=this.OPERATORS.stringOperatorDoesNotContain):
a.error={msg:"value ("+c+") not supported for NOT LIKE",code:3}):c.startsWith("between ")?this._updatePartForBetween(b,!0,a):c.startsWith("not between ")?this._updatePartForBetween(b,!1,a):"is null"===c?(a.valueObj.value=null,a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsBlank:"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsBlank:this.OPERATORS.numberOperatorIsBlank):"is not null"===c?(a.valueObj.value=null,a.operator="date"===a.fieldObj.shortType?this.OPERATORS.dateOperatorIsNotBlank:
"string"===a.fieldObj.shortType?this.OPERATORS.stringOperatorIsNotBlank:this.OPERATORS.numberOperatorIsNotBlank):a.error={msg:"unknown operator ("+c+")",code:2};if(r.isDefined(a.valueObj.value)&&"string"===typeof a.valueObj.value&&a.valueObj.value.startsWith("{")&&a.valueObj.value.endsWith("}")||r.isDefined(a.valueObj.value1)&&"string"===typeof a.valueObj.value1&&a.valueObj.value1.startsWith("{")&&a.valueObj.value1.endsWith("}"))a.isInteractive=!0},getFieldItemByName:function(a,b,c){this.fieldsStore.fetch({query:a,
onComplete:l.hitch(this,function(a){a&&a.length?b(a[0]):c()})})},subtractDay:function(a){return new Date(a.getTime()-this.dayInMS)},_updatePartForBetween:function(a,b,c){var d,e,f,h,g;a=this._removeOperator(c.fieldObj.shortType,a,(b?"between ":"not between ").length);d=a.toLowerCase().indexOf(" and ");if(-1<d)if(e=a.substring(0,d).trim(),e.startsWith("CURRENT_TIMESTAMP "))if(e=e.substring(18).trim(),e.startsWith("-")){c.operator=b?this.OPERATORS.dateOperatorInTheLast:this.OPERATORS.dateOperatorNotInTheLast;
try{g=parseFloat(e.substring(1).trim()),1<=g?(f=this.OPERATORS.dateOperatorDays,h=g/365,1E-4>Math.abs(h-Math.round(h))?(g=Math.round(h),f=this.OPERATORS.dateOperatorYears):(h=g/30,1E-4>Math.abs(h-Math.round(h))?(g=Math.round(h),f=this.OPERATORS.dateOperatorMonths):(h=g/7,1E-4>Math.abs(h-Math.round(h))&&(g=Math.round(h),f=this.OPERATORS.dateOperatorWeeks)))):(f=this.OPERATORS.dateOperatorMinutes,g*=24,1E-4>Math.abs(g-Math.round(g))?f=this.OPERATORS.dateOperatorHours:g*=60),c.valueObj.value=g,c.valueObj.range=
f}catch(y){c.error={msg:"missing count for '"+(b?"":"not ")+"in the last'",code:3}}}else c.error={msg:"'"+(b?"":"not ")+"in the next' not supported",code:3};else if(a=this._removeOperator(c.fieldObj.shortType,a.substring(d),5),this.storeValue1(e,c),this.storeValue2(a,c),"date"===c.fieldObj.shortType){if(c.operator=b?this.OPERATORS.dateOperatorIsBetween:this.OPERATORS.dateOperatorIsNotBetween,"object"===typeof c.valueObj.value1&&"object"===typeof c.valueObj.value2)try{1E3>Math.abs(this.subtractDay(c.valueObj.value2).getTime()-
c.valueObj.value1.getTime())&&(c.valueObj.value=c.valueObj.value1,delete c.valueObj.value1,delete c.valueObj.value2,c.operator=b?this.OPERATORS.dateOperatorIsOn:this.OPERATORS.dateOperatorIsNotOn)}catch(y){}}else"number"===c.fieldObj.shortType||"oid"===c.fieldObj.shortType?c.operator=b?this.OPERATORS.numberOperatorIsBetween:this.OPERATORS.numberOperatorIsNotBetween:c.error={msg:c.fieldObj.shortType+" field not supported for "+(b?"":"NOT ")+"BETWEEN",code:3};else c.error={msg:"missing AND operator for "+
(b?"":"NOT ")+"BETWEEN",code:3}},storeValue:function(a,b){if(a.startsWith("{")&&a.endsWith("}"))b.valueObj.value=a;else if(a.startsWith("'{")&&a.endsWith("}'"))b.valueObj.value=a.substring(1,a.length-1);else if("date"===b.fieldObj.shortType)if(a.startsWith("'")&&a.endsWith("'")){var c=a.substring(1,a.length-1);b.valueObj.value=this.parseDate(c)}else b.valueObj.value=a,b.valueObj.type="field";else"string"===b.fieldObj.shortType?(a.startsWith("#")||a.startsWith("%#"))&&(a.endsWith("#")||a.endsWith("#%"))?
b.valueObj.value=a:a.startsWith("'")&&a.endsWith("'")?b.valueObj.value=a.substring(1,a.length-1).replace(/\'\'/g,"'"):(b.valueObj.value=a,b.valueObj.type="field",this.getFieldItemByName({name:a},function(a){b.valueObj.label=a.label[0]},function(){b.error={msg:"unknown field name ("+a+")",code:1}})):(b.valueObj.value=a,isNaN(a)&&(b.valueObj.type="field",this.getFieldItemByName({name:a},function(a){b.valueObj.label=a.label[0]},function(){b.error={msg:"unknown field name ("+a+")",code:1}})))},storeValue1:function(a,
b){a.startsWith("{")&&a.endsWith("}")?b.valueObj.value1=a:a.startsWith("'{")&&a.endsWith("}'")?b.valueObj.value1=a.substring(1,a.length-1):"date"===b.fieldObj.shortType?a.startsWith("'")&&a.endsWith("'")?(a=a.substring(1,a.length-1),b.valueObj.value1=this.parseDate(a)):(b.valueObj.value1=a,b.valueObj.type="field"):(b.valueObj.value1=a,isNaN(a)&&(b.valueObj.type="field"))},storeValue2:function(a,b){a.startsWith("{")&&a.endsWith("}")?b.valueObj.value2=a:a.startsWith("'{")&&a.endsWith("}'")?b.valueObj.value2=
a.substring(1,a.length-1):"date"===b.fieldObj.shortType?a.startsWith("'")&&a.endsWith("'")?(a=a.substring(1,a.length-1),b.valueObj.value2=this.parseDate(a)):(b.valueObj.value2=a,b.valueObj.type="field"):(b.valueObj.value2=a,isNaN(a)&&(b.valueObj.type="field"))},parseDate:function(a){var b=v.parse(a,{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"});b||(b=v.parse(a.replace(" ",", "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"}))||(b=v.parse(a.replace(" "," - "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"}));
return b}});g.VIRTUAL_DATE_TODAY="today";g.VIRTUAL_DATE_YESTERDAY="yesterday";g.VIRTUAL_DATE_TOMORROW="tomorrow";g.VIRTUAL_DATE_THIS_WEEK="thisWeek";g.VIRTUAL_DATE_THIS_MONTH="thisMonth";g.VIRTUAL_DATE_THIS_QUARTER="thisQuarter";g.VIRTUAL_DATE_THIS_YEAR="thisYear";g.isAskForValues=function(a){var b=!1;return b=m.some(a.parts,function(a){return a.parts?m.some(a.parts,function(a){return!!a.interactiveObj}):!!a.interactiveObj})};g.hasVirtualDate=function(a){var b=!1;return b=m.some(a.parts,function(a){return a.parts?
m.some(a.parts,function(a){return!!a.valueObj.virtualDate||!!a.valueObj.virtualDate1||!!a.valueObj.virtualDate2}):!!a.valueObj.virtualDate||!!a.valueObj.virtualDate1||!!a.valueObj.virtualDate2})};g.getRealDateByVirtualDate=function(a){var b=null,c=new Date,d=c.getTime();switch(a){case g.VIRTUAL_DATE_TODAY:b=c;break;case g.VIRTUAL_DATE_YESTERDAY:b=new Date(d-864E5);break;case g.VIRTUAL_DATE_TOMORROW:b=new Date(d+864E5);break;case g.VIRTUAL_DATE_THIS_WEEK:b=[t().startOf("week").toDate(),t().endOf("week").toDate()];
break;case g.VIRTUAL_DATE_THIS_MONTH:b=[t().startOf("month").toDate(),t().endOf("month").toDate()];break;case g.VIRTUAL_DATE_THIS_QUARTER:b=[t().startOf("quarter").toDate(),t().endOf("quarter").toDate()];break;case g.VIRTUAL_DATE_THIS_YEAR:b=[t().startOf("year").toDate(),t().endOf("year").toDate()]}return b};return g});