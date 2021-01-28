(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{341:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_20210125-记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_20210125-记录"}},[t._v("#")]),t._v(" 20210125 记录")]),t._v(" "),n("h3",{attrs:{id:"props-很多的情况下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props-很多的情况下"}},[t._v("#")]),t._v(" props 很多的情况下")]),t._v(" "),n("p",[t._v("当 props 很多时，如果一次性列举下来，会让 props 列表很长很难维护，为了方便维护，应该将它们分类归类。")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CreditPlanCell")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item,index) of repayTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mt-18"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":index")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":pay-number")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("payNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":calendar-config")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    'default-date':repayTime && repayTime[index],\n    'min-date':repayTime[index-1] || firstMinTime ,\n    'max-date': index === 0 ? firstMaxTime : lastMaxTime\n  }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":stepper-config")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n    'value':proportions[index],\n    'disable-plus':proportions[index+1] <= 10 || index === installment - 1,\n    'disable-minus':proportions[index] <= 10 || index === installment - 1,\n  }"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@confirm")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onConfirm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@plus")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handlePlus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@minus")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleMinus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v('<CreditPlanCell\n  v-for="(item,index) of repayTime"\n  :key="index"\n  class="mt-18"\n  :index="index"\n  :pay-number="payNumber"\n  \'default-date\':repayTime && repayTime[index],\n  \'min-date\':repayTime[index-1] || firstMinTime ,\n  \'max-date\': index === 0 ? firstMaxTime : lastMaxTime\n  \'value\':proportions[index],\n  \'disable-plus\':proportions[index+1] <= 10 || index === installment - 1,\n  \'disable-minus\':proportions[index] <= 10 || index === installment - 1,\n  @confirm="onConfirm"\n  @plus="handlePlus"\n  @minus="handleMinus"\n/>\n')])])])])}),[],!1,null,null,null);a.default=e.exports}}]);